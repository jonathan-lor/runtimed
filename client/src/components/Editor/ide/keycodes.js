export function setup(ide) {
    ide.addAction({
        id: 'run-code',
        label: 'Run Code',
        keybindings: [
            monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter,
            monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.Enter,
            monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S
        ],
        precondition: null,
        keybindingContext: null,
        contextMenuGroupId: 'navigation',
        contextMenuOrder: 1.5,
        run: function() {}
    });
}