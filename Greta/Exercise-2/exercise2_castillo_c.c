#include <stdio.h>

struct Student
{
    int id;
    char name[50];
    float grade;
};

int main()
{
    struct Student s;

    printf("Enter ID: ");
    scanf("%d", &s.id);

    printf("Enter Name: ");
    scanf(" %[^\n]", s.name);

    printf("Enter Grade: ");
    scanf("%f", &s.grade);

    printf("\n--- Student Info ---\n");
    printf("ID: %d\n", s.id);
    printf("Name: %s\n", s.name);
    printf("Grade: %.2f\n", s.grade);

    return 0;
}
