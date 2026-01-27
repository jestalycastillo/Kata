#include <iostream>
using namespace std;

class Student
{
public:
    int id;
    string name;
    float grade;

    void input()
    {
        cout << "Enter ID: ";
        cin >> id;

        cout << "Enter Name: ";
        cin.ignore();
        getline(cin, name);

        cout << "Enter Grade: ";
        cin >> grade;
    }

    void display()
    {
        cout << "\n--- Student Information ---" << endl;
        cout << "ID: " << id << endl;
        cout << "Name: " << name << endl;
        cout << "Grade: " << grade << endl;
    }
};

int main()
{
    Student s;
    s.input();
    s.display();
    return 0;
}
