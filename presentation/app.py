def greet(name):
   message = "Hello, " + name   # local variable (stored in stack)
   print(message)

def main():
   user = "Miguel"   # local variable
   greet(user)

main()
