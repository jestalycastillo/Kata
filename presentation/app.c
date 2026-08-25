#include <stdio.h>
#include <stdlib.h>

int main() {
   int *ptr;

   // Allocate memory in heap
   ptr = (int*) malloc(sizeof(int));

   if (ptr == NULL) {
       printf("Memory allocation failed\n");
       return 1;
   }
   *ptr = 10;
   printf("Value stored in heap: %d\n", *ptr);

   // Free allocated memory
    free(ptr);

   return 0;
}
