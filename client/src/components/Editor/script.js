import * as ide from "./ide/editor.js";
import getRegression from "./getRegression.js";

const codearea = document.getElementById("codearea")
const editor = ide.create(codearea, { languageType: "hecker" })
const analyze = document.getElementById("analyze")
const result = document.getElementById("result")

async function post(name, body) {
    const content = JSON.stringify({
        content: body
    });

    const formatted = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: content
    };

    const fetched = await fetch(`/${name}`, formatted);
    const data = await fetched.json();

    return data;
}

editor.setValue(
`#include <iostream>

using namespace std;

int main() {
    int n; cin >> n;
    int sum = 0;

    for (int i = 0; i < n; i++) {
        sum += i;
    }

    cout << sum << endl;
}`)

analyze.onclick = async function() {
    const code = editor.getValue();
    const data = await post("analyze", code);
    
    console.log(data)

    result.innerText = await getRegression(data)
}
