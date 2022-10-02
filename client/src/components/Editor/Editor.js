import "./style.css"

function Editor() {
    return (
        <div id="container">
            <link rel="stylesheet" data-name="vs/editor/editor.main" href="https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.18.0/min/vs/editor/editor.main.css">
            <script> var require = { paths: { "vs": "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.18.0/min/vs" }}; </script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.18.0/min/vs/loader.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.18.0/min/vs/editor/editor.main.nls.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.18.0/min/vs/editor/editor.main.js"></script>
            <script src="https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
            <div id="code-container">
                <div id="codearea"></div>
            </div>
            <button id="analyze">
                Analyze
            </button>
            <div id="result"></div>
        </div>
    );
}

export default Editor;
