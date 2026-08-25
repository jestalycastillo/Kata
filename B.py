def number_to_words(n):
    ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
            "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
            "seventeen", "eighteen", "nineteen"]
    tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]

    if n == 0:
        return "zero"

    result = ""

    hundreds = n // 100
    remainder = n % 100
    print(remainder)

    if hundreds > 0:
        result += ones[hundreds] + " hundred"
        if remainder > 0:
            result += " "

    if remainder > 0:
        if remainder < 20:
            result += ones[remainder]
        else:
            tens_digit = remainder // 10
            ones_digit = remainder % 10
            result += tens[tens_digit]
            if ones_digit > 0:
                result += "-" + ones[ones_digit]

    return result

while True:
    try:
        num = int(input("Input three digit number [0-999]: "))
        if 0 <= num <= 999:
            print(f"the number is read as: {number_to_words(num)}")
            break
        else:
            print("Please enter a number between 0 and 999.")
    except ValueError:
        print("Invalid input. Please enter an integer.")