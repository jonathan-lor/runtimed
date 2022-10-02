const fs = require('fs');
const { exec } = require('child_process');

const instructionInit = [
    "\t.globl\tinstructions",
    "\t.bss",
    "\t.align 8",
    "\t.type\tinstructions, @object",
    "\t.size\tinstructions, 8",
    "instructions:",
    "\t.zero\t8"
]

const executedString = [
    ".EXECUTED_STR:",
    "\t.string\t\"%lld instructions executed\\n\"",
]

const printInstructions = [
    "\tmovq\tinstructions(%rip), %rax",
    "\tmovq\t%rax, %rsi",
    "\tleaq\t.LC1(%rip), %rax",
    "\tmovq\t%rax, %rdi",
    "\tmovl\t$0, %eax",
    "\tcall\tprintf@PLT"
]

function countInstructions(filename) {

    // later use async + await
    exec(`g++ ${filename} -S -o assembled.s`, (err, stdout, stderr) => {
        if (err) {
            console.error(err); return;
        }

        const content = fs.readFileSync("assembled.s", "utf8");
        const lines = content.split("\n");

        lines.splice(0, 0, ...instructionInit);
        
        const mainIndex = lines.findIndex(line => line === "main:");
        
        lines.splice(mainIndex, 0, ...executedString);

        const combined = lines.join("\n");

        fs.writeFileSync("assembled.s", combined);
        
        exec(`g++ ${filename} -o runner`, (err, stdout, stderr) => {
            if (err) {
                console.error(err); return;
            }

            exec(`./runner`, (err, stdout, stderr) => {
                if (err) {
                    console.error(err); return;
                }
    
                console.log(stdout)
            })
        })
    })
}

countInstructions('./program.cpp');
