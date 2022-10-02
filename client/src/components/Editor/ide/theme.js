import keywords from "./keywords.js";

export function setup(backgroundColor) {
    const theme = {
        base: "vs-dark",
        inherit: true,
        colors: {
            "editor.background": backgroundColor ? backgroundColor : "#222222"
        },
        rules: []
    };

    const colorRules = [];
    
    for (const words of keywords) {
        const color = words.color;
    
        if (color) {
            colorRules.push({
                token: words.type,
                foreground: color
            });
        }
    }

    colorRules.push({
        token: "string.escapechar",
        foreground: "d7ba7d"
    });

    theme.rules = colorRules;
    
    monaco.editor.defineTheme("hecker", theme);
}