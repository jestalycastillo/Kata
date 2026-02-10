#include <iostream>
#include <cmath>
using namespace std;

int main()
{
    const double value = 16.0;
    int choice;

    cout << "Choose a math function to perform on " << value << ":\n";
    cout << "1. Square root\n";
    cout << "2. Square value\n";
    cout << "3. Absolute value\n";
    cout << "4. Natural logarithm (ln)\n";
    cout << "Enter a number between 1 and 4: ";
    cin >> choice;

    if (choice == 1)
    {
        cout << "Square root of " << value << " is " << sqrt(value) << endl;
    }
    else if (choice == 2)
    {
        cout << value << " squared is " << pow(value, 2) << endl;
    }
    else if (choice == 3)
    {
        cout << "Absolute value of " << value << " is " << abs(value) << endl;
    }
    else if (choice == 4)
    {
        cout << "Natural logarithm of " << value << " is " << log(value) << endl;
    }
    else
    {
        cout << "Invalid choice! Please enter a number between 1 and 4." << endl;
    }

    return 0;
}
