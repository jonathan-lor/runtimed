#include <stdio.h>
long long int __instruction_counter;
long long int __r13_save;
int main_real(int, char* []);
int main(int argc, char* argv[]) {
    int ret = main_real(argc, argv);
    printf("Total instructions = %lld\n", __instruction_counter);
    return ret;
}