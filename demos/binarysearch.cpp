#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n; cin >> n;

    int* nums = new int[n];

    int low = 0;
    int high = n - 1;
    int goal = rand();

    while (low <= high) {
        int mid = (low + high) / 2;
        int num = nums[mid];

        if (goal == num) {
            return mid;
        } else if (num < goal) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    delete[] nums;

    return -1;
}