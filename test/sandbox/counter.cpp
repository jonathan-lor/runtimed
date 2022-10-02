#include <iostream>
#include <sys/types.h>
#include <sys/wait.h>
#include <sys/stat.h>
#include <unistd.h>
#include <vector>
#include <string>

using namespace std;

int main() {
    unsigned long long instructions = 0;

    cout << "counter" << endl;

    const char* fifoName = "./TEST_FIFO";
    
    int fifo = mkfifo(fifoName, S_IRUSR | S_IWUSR); // if -1 then error

    int pid = fork();

    if (pid == 0) {
        char* args[] = { (char*) "./program", NULL };

        execvp(args[0], args);

        return 0;
    }

    int req = 0;

    read(fifo, &req, sizeof(req));

    cout << "req: " << req << endl;

    waitpid(pid, NULL, 0);

    unlink(fifoName);

    cout << "exiting" << endl;

    return 0;
}
