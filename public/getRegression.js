let calculator = null;

const regressions = {
    "linear": "y_1 \\sim m x_1 + b",
    "quadratic": "y_1 \\sim m (x_1)^2 + b",
    "cubic": "y_1 \\sim m (x_1)^3 + b",
    "exponential": "y_1 \\sim \\abs(m) 2^{x_1} + \\abs(c)",
    "logarithmic": "y_1 \\sim m \\log_d(x_1) + b",
    "nlogn": "y_1 \\sim m x_1 \\log_2(x_1) + b",
    "factorial": "y_1 \\sim m (x_1 !) + b",
    "constant": "y_1 \\sim b"
}

async function getRegression(type, xValues, yValues) {
    const graphing = Desmos.GraphingCalculator(calculator);

    graphing.setExpression({ id: 'regression', latex: regressions[type] });

    graphing.setExpression({ type: 'table', columns: [
        { latex: 'x_1', values: xValues },
        { latex: 'y_1', values: yValues }
    ]});

    const rSquared = await new Promise(async resolve => {
        const interval = setInterval(() => {
            const values = document.querySelectorAll(".dcg-mq-mathspeak")
    
            for (const value of values) {
                const text = value.textContent
    
                if (text.includes('"r" squared equals') || text.includes('"R" squared equals')) {
                    const rSquared = parseFloat(text.match(/[0-9\.]/g).join(''))

                    clearInterval(interval)
                    resolve(rSquared)
                }
            }
        }, 100)

        setTimeout(() => {
            clearInterval(interval)
            resolve(null);
        }, 5000);
    })

    graphing.destroy()

    return rSquared
}

export default async function(values) {
    if (!calculator) {
        calculator = document.createElement("div")
        calculator.id = "calculator"
        // calculator.style = "width: 600px; height: 400px;"
        calculator.style = "position: absolute; top: 0; left: 0; visibility: hidden; width: 600px; height: 400px;"

        document.body.appendChild(calculator)
    }

    let bestType = { type: null, rSquared: null }
    
    const xValues = []
    const yValues = []

    for (const value of values) {
        xValues.push(parseInt(value.input))
        yValues.push(parseInt(value.time))
    }

    for (const type of Object.keys(regressions)) {
        const rSquared = await getRegression(type, xValues, yValues)

        console.log(type, rSquared)

        if (rSquared) {
            if (bestType.type == null) {
                bestType = { type: type, rSquared: rSquared }
            } else {
                if (rSquared >= bestType.rSquared) {
                    bestType = { type: type, rSquared: rSquared }
                }
            }
        }
    }

    console.log(bestType)

    return bestType
}
