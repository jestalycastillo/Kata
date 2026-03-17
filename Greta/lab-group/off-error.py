numbers = []

print("Enter non-numeric to exit")
while True:
    try:
        number = int(input("Input a number: "))
        numbers.append(number)
    except ValueError:
        break

for num in numbers:
    print(num)