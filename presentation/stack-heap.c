#include <stdio.h>
#include <stdlib.h>

void stackExample() {
   int x = 5; // stored in stack
   printf("Stack value: %d\n", x);
}

void heapExample() {
   int *y = (int*) malloc(sizeof(int)); // stored in heap
   *y = 10;
   printf("Heap value: %d\n", *y);

   free(y); // manual deallocation
}

int main() {
   stackExample();
   heapExample();
   return 0;
}
