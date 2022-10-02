import keywords from "./keywords.js";

const autocomplete = false;

export function initialize() {
    monaco.languages.register({
        id: "hecker"
    });
}

export function setup(ide) {
    const tokensProvider = {
        defaultToken: "",
        tokenPostfix: ".cpp",
        
        brackets: [
            { open: "{", close: "}", token: "delimiter.curly" },
            { open: "[", close: "]", token: "delimiter.bracket" },
            { open: "(", close: ")", token: "delimiter.parenthesis" },
            { open: '<', close: '>', token: 'delimiter.angle' }
        ],
    
        operators: [
            '=', '>', '<', '!', '~', '?', ':',
            '==', '<=', '>=', '!=', '&&', '||', '++', '--',
            '+', '-', '*', '/', '&', '|', '^', '%', '<<',
            '>>', '>>>', '+=', '-=', '*=', '/=', '&=', '|=',
            '^=', '%=', '<<=', '>>=', '>>>='
        ],
    
        // we include these common regular expressions
        symbols:  /[=><!~?:&|+\-*\/\^%]+/,
        escapes:  /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
        integersuffix: /(ll|LL|u|U|l|L)?(ll|LL|u|U|l|L)?/,
        floatsuffix: /[fFlL]?/,
    
        // The main tokenizer for our languages
        tokenizer: {
            root: [
                [/[a-zA-Z_]\w*(?=\()/, {
                    cases: {
                        '@func': { token: 'func' },
                        '@keyword': { token: 'keyword.$0' },
                        '@special': { token: 'special' },
                        '@datatype': { token: 'datatype' },
                        '@variable': { token: 'variable' },
                        '@default': 'func'
                    }
                }],
                
                // identifiers and keywords
                [/[a-zA-Z_]\w*/, {
                    cases: {
                        '@keyword': { token: 'keyword.$0' },
                        '@special': { token: 'special' },
                        '@datatype': { token: 'datatype' },
                        '@variable': { token: 'variable' },
                        '@default': 'identifier'
                    }
                }],

                // [/[a-zA-Z_]\w*(\:|\[\]|\[)?/, {
                //     cases: {
                //         '@keyword': { token: 'keyword.$0' },
                //         '@special': { token: 'special' },
                //         '@datatype': { token: 'datatype' },
                //         '@variable': { token: 'variable' },
                //         '@default': 'identifier'
                //     }
                // }],

                [/\<[a-zA-Z_\.\+\/]*\>/, 'string'],
    
                // whitespace
                { include: '@whitespace' },
    
                // [[ attributes ]].
                [/\[\[.*\]\]/, 'annotation'],
    
                // Preprocessor directive
                [/^\s*#\w+/, 'special'],
    
                // delimiters and operators
                [/[{}()\[\]]/, '@brackets'],
                [/[<>](?!@symbols)/, '@brackets'],
                //[/(?<=#include )\<.*\>/, '@string'],
                [/@symbols/, { cases: { '@operators': 'delimiter',
                                        '@default'  : '' } } ],
    
                // numbers
                [/\d*\d+[eE]([\-+]?\d+)?(@floatsuffix)/, 'number.float'],
                [/\d*\.\d+([eE][\-+]?\d+)?(@floatsuffix)/, 'number.float'],
                [/0[xX][0-9a-fA-F']*[0-9a-fA-F](@integersuffix)/, 'number.hex'],
                [/0[0-7']*[0-7](@integersuffix)/, 'number.octal'],
                [/0[bB][0-1']*[0-1](@integersuffix)/, 'number.binary'],
                [/\d[\d']*\d(@integersuffix)/, 'number'],
                [/\d(@integersuffix)/, 'number'],
    
                // delimiter: after number because of .\d floats
                [/[;,.]/, 'delimiter'],
    
                // strings
                [/"([^"\\]|\\.)*$/, 'string.invalid' ],  // non-teminated string
                [/"/,  'string', '@string' ],
    
                // characters
                [/'[^\\']'/, 'string'],
                [/(')(@escapes)(')/, ['string','string.escape','string']],
                [/'/, 'string.invalid']
            ],
    
            whitespace: [
                [/[ \t\r\n]+/, ''],
                [/\/\*\*(?!\/)/,  'comment.doc', '@doccomment' ],
                [/\/\*/,       		'comment', '@comment' ],
                [/\/\/.*$/,    		'comment'],
            ],
    
            comment: [
                [/[^\/*]+/, 'comment' ],
                // [/\/\*/, 'comment', '@push' ],    // nested comment not allowed :-(
                // [/\/\*/,    'comment.invalid' ],	// this breaks block comments in the shape of /* //*/
                [/\*\//,    'comment', '@pop'  ],
                [/[\/*]/,   'comment' ]
            ],
            //Identical copy of comment above, except for the addition of .doc
            doccomment: [
                [/[^\/*]+/, 'comment.doc' ],
                // [/\/\*/, 'comment.doc', '@push' ],    // nested comment not allowed :-(
                [/\/\*/,    'comment.doc.invalid' ],
                [/\*\//,    'comment.doc', '@pop'  ],
                [/[\/*]/,   'comment.doc' ]
            ],
    
            string: [
                [/[^\\"]+/,  'string'],
                [/@escapes/, 'string.escape'],
                [/\\./,      'string.escape.invalid'],
                [/"/,        'string', '@pop' ]
            ]
        }
    };
    
    for (const words of keywords) {
        tokensProvider[words.type] = words.words;
    }
    
    monaco.languages.setMonarchTokensProvider("hecker", tokensProvider);
    
    monaco.languages.setLanguageConfiguration("hecker", {
        comments: {
            lineComment: '//',
            blockComment: ['/*', '*/'],
        },
        brackets: [['{','}'], ['[',']'], ['(',')'], ['<','>']],
        autoClosingPairs: [
            { open: '"', close: '"', notIn: ['string', 'comment'] },
            { open: '{', close: '}', notIn: ['string', 'comment'] },
            { open: '[', close: ']', notIn: ['string', 'comment'] },
            { open: '(', close: ')', notIn: ['string', 'comment'] }
        ]
    });
    
    if (autocomplete) {
        const autocompletes = [];
        
        for (const words of keywords) {
            let kind;
        
            switch (words.type) {
                default:
                    kind = monaco.languages.CompletionItemKind.Text;
                    break;
        
                case "func":
                    kind = monaco.languages.CompletionItemKind.Function;
                    break;
        
                case "keyword":
                case "special":
                    kind = monaco.languages.CompletionItemKind.Keyword;
                    break;
        
                case "datatype":
                    kind = monaco.languages.CompletionItemKind.Class;
                    break;
    
                case "variable":
                    kind = monaco.languages.CompletionItemKind.Variable;
            }
        }
        
        for (const word of words.words) {
            autocompletes.push({
                label: word,
                kind,
                documentation: "",
                insertText: word
            });
        }

        function createDependencyProposals(range) {
            const result = [...autocompletes];
            result.forEach(item => item.range = range);
            return result;
        }
    
        function getWords() {
            if (ide) {
                const text = ide.getValue(); 
                return text.match(/(\w+)/g)
            }
        
            return null;
        }

        monaco.languages.registerCompletionItemProvider("hecker", {
            provideCompletionItems: async function(model, position) {
                const wordObject = model.getWordUntilPosition(position);
        
                const range = {
                    startLineNumber: position.lineNumber,
                    endLineNumber: position.lineNumber,
                    startColumn: wordObject.startColumn,
                    endColumn: wordObject.endColumn
                };
        
                const result = createDependencyProposals(range);
                const words = getWords();
        
                if (words) {
                    for (const word of words) {
                        const match = result.find(item => item.label === word);
        
                        if (wordObject.word === word) {
                            continue;
                        }
        
                        if (!match) {
                            result.push({
                                label: word,
                                kind: monaco.languages.CompletionItemKind.Text,
                                documentation: "",
                                insertText: word,
                                range
                            });
                        }
                    }
                }
        
                return {
                    suggestions: result
                };
            }
        });
    }
}