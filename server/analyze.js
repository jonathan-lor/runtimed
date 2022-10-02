const { exec, spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const uuid = require("uuid");
const prcs = require("process")

async function runCode(container, code, inputs, timeout) {
    return new Promise(async resolve => {
        const results = []

        try {
            fs.writeFileSync(`${container}/temp.cpp`, code);

            let process;
            
            exec(`g++ -O0 -o ${container}/runner ${container}/temp.cpp`, (error, _stdout, stderr) => {
                if (error) {
                    resolve(error.message);
                    return;
                }
            
                if (stderr) {
                    resolve(stderr);
                }

                function executeCode(index) {
                    const input = inputs[index];
                    const startTime = prcs.hrtime.bigint()
                    
                    process = spawn(`${container}/runner`);
                    
                    process.stdin.write(input);
                    
                    process.stdin.end();
    
                    let output = "";
    
                    process.stdout.on("data", data => {
                        output += `${data}`;
                    });
    
                    process.stderr.on("data", data => {
                        output += `${data}`;
                    });
    
                    process.on("close", _code => {
                        const endTime = prcs.hrtime.bigint()
                        const difference = (endTime - startTime).toString()
    
                        results.push({
                            input: input,
                            output: output,
                            time: difference
                        })

                        if (index === inputs.length - 1) {
                            resolve(results);
                        } else {
                            executeCode(index + 1);
                        }
                    });
                }

                executeCode(0)
            });

            setTimeout(() => {
                if (process) {
                    process.kill();
                    resolve(results);
                } else {
                    resolve(results);
                }
            }, timeout);
        } catch (err) {
            resolve(results);
        }
    });
}

function createContainer(id) {
    const containers = path.join(__dirname, `containers`);

    if (!fs.existsSync(containers)) {
        fs.mkdirSync(containers);
    }

    const dirname = `${containers}/${id}`;
    fs.mkdirSync(dirname);
    return dirname;
}

function removeContainer(container) {
    try {
        fs.rmSync(container, { recursive: true });
    } catch (err) {
        console.log(`Failed to remove container ${id}`);
    }
}

const inputs = [
    "1",
    "10",
    "100",
    "1000",
    "10000",
    "100000",
    "1000000",
    "10000000",
    "100000000",
    "1000000000"
]

module.exports = async (code, timeout) => {
    const id = uuid.v4();
    const container = createContainer(id);
    const results = await runCode(container, code, inputs, timeout ? timeout : 5000);

    removeContainer(container);

    return results;
}
