import * as language from "./language.js";
import * as theme from "./theme.js";
import * as keycodes from "./keycodes.js";

import options from "./options.js";

export function create(element, overrides) {
    const settings = options;

    for (const setting in overrides) {
        settings[setting] = overrides[setting];
    }

    theme.setup(overrides.color);
    language.initialize();

    const editor = monaco.editor.create(element, settings);

    language.setup(editor);
    keycodes.setup(editor);

    return editor;
}