g++ program.cpp -S -o input.s
cat input.s | perl -pe 's/^(\t[^.])/\tmovq %r13, __r13_save(%rip)\n\tmovq __instruction_counter(%rip), %r13\n\tleaq 1(%r13), %r13\n\tmovq %r13, __instruction_counter(%rip)\n\tmovq %r13, __r13_save(%rip)\n\1/' > output.s
g++ output.s wrapper.cpp -o a.out
./a.out