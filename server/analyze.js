const { exec, spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const uuid = require("uuid");
const prcs = require("process")

let sandbox = false; // Enable/disable the sandbox

async function runCode(container, code, input, timeout) {
    console.log("trying...")

    return new Promise(async resolve => {
        const errormessage = "An server error has occured. Please try again.";
        const timemessage = "The script took too long to execute. This is most likely due to an infinite loop, or your code is not fully optimized for certain testcases.";

        try {
            fs.writeFileSync(`${container}/temp.cpp`, code);

            let process;
            
            exec(`g++ -o ${container}/runner ${container}/temp.cpp`, (error, _stdout, stderr) => {
                if (error) {
                    resolve(error.message);
                    return;
                }
            
                if (stderr) {
                    resolve(stderr);
                }

                let settings = {};

                if (sandbox) {
                    settings = {
                        env: {
                            LD_PRELOAD: `${path.join(__dirname, "sandbox")}/EasySandbox.so`
                        }
                    };
                }

                console.log("compiled")
                
                const startTime = prcs.hrtime.bigint()
                
                process = spawn(`${container}/runner`, settings);
                
                console.log("process spawned")
                
                process.on("error", _err => {
                    resolve(errormessage);
                });
                
                process.stdin.write(input);
                
                process.stdin.end();

                let result = "";

                process.stdout.on("data", data => {
                    result += `${data}`;
                });

                process.stderr.on("data", data => {
                    result += `${data}`;
                });

                process.on("close", _code => {
                    const endTime = prcs.hrtime.bigint()
                    const difference = (endTime - startTime).toString()

                    resolve({
                        output: result,
                        time: difference
                    });
                });
            });

            setTimeout(() => {
                if (process) {
                    process.kill();
                    resolve(timemessage);
                } else {
                    resolve("The script took too long to compile.");
                }
            }, timeout);
        } catch (err) {
            resolve(errormessage);
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

// function cleanOutput(text) {
//     text = text.replace("<<entering SECCOMP mode>>\n<<entering SECCOMP mode>>\n", "");
//     text = text.replace("<<entering SECCOMP mode>>\n<<entering SECCOMP mode>>", "");
//     text = text.replaceAll("<<entering SECCOMP mode>>\n", "");
//     text = text.replaceAll("<<entering SECCOMP mode>>", "");
//     text = text.replaceAll(__dirname, "");
//     return text;
// }

module.exports = async (code, input, timeout) => {
    const id = uuid.v4();
    const container = createContainer(id);
    const result = await runCode(container, code, input, timeout ? timeout : 5000);

    // console.log(result)

    removeContainer(container);

    // const cleaned = cleanOutput(result);

    return result;
}
