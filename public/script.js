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

const regressionNames = {
    "linear": "O(n)",
    "quadratic": "O(n^2)",
    "cubic": "O(n^3)",
    "exponential": "O(2^n)",
    "logarithmic": "O(log(n))",
    "nlogn": "O(nlog(n))",
    "factorial": "O(n!)",
    "constant": "O(1)"
}

analyze.onclick = async function() {
    analyze.disabled = true;
    
    const code = editor.getValue();
    const data = await post("analyze", code);
    const regression = await getRegression(data)
    
    if (regression.type != null) {
        result.innerHTML = regressionNames[regression.type]
    }

    analyze.disabled = false;
}
