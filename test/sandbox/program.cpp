// #include <iostream>
// #include <sys/types.h>
// #include <sys/wait.h>
// #include <sys/stat.h>
// #include <unistd.h>
// #include <fcntl.h>

// int fd = -1;

// unsigned long long instructions = 0;

// void addInstructions(unsigned long long amount) {
//     instructions += amount;

//     if (fd == -1) {
//         fd = open("output.txt", O_WRONLY);
//     }

//     lseek(fd, 0, SEEK_SET);
//     write(fd, &instructions, sizeof(instructions));
// }

// /home/collingc/bin/WSL2-Linux-Kernel/tools/perf/perf stat -e instructions:u -x, -o output.txt ./program

// user program

#include <iostream>

using namespace std;

int main() {
    cout << "test" << endl;

    // addInstructions(1);
    // addInstructions(100);
    // addInstructions(10000);

    // sleep(0.5);

    // // int readFd = open("output.txt", O_RDONLY);

    // unsigned long long value = 0;
    // read(readFd, &value, sizeof(value));
    // cout << "value: " << value << endl;

    return 0;
}
