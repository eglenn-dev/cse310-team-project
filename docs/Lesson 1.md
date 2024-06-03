
Welcome to the Python Basics Interactive Tutorial!  
Today we will learn about basic syntax, data types, and basic operations in Python.  
Let's get started!

In Python, a variable is used to store information. Variables can store different types of data.  
Here are some examples:

```python

# Integer
age = 25
print("Age:", age)

# Float
price = 19.99
print("Price:", price)

# String
name = "Alice"
print("Name:", name)

# Boolean
is_student = True
print("Is student:", is_student)

```

Exercise: Variables and Data Types

```python

name = "Your Name"
age = 30
is_student = False
print("Name:", name)
print("Age:", age)
print("Is student:", is_student)

```

Understanding Basic Operators

Operators in Python are used to perform operations on variables and values.
Here are some examples:

```python

a = 10
b = 3

# Arithmetic operators
addition = a + b
print("Addition:", addition)  # Output: 13

subtraction = a - b
print("Subtraction:", subtraction)  # Output: 7

multiplication = a * b
print("Multiplication:", multiplication)  # Output: 30

division = a / b
print("Division:", division)  # Output: 3.333...

modulus = a % b
print("Modulus:", modulus)  # Output: 1

# Comparison operators
print("a equals b:", a == b)  # Output: False
print("a not equals b:", a != b)  # Output: True
print("a greater than b:", a > b)  # Output: True
print("a less than b:", a < b)  # Output: False
print("a greater than or equals b:", a >= b)  # Output: True
print("a less than or equals b:", a <= b)  # Output: False

# Logical operators
x = True
y = False

print("x and y:", x and y)  # Output: False
print("x or y:", x or y)  # Output: True
print("not x:", not x)  # Output: False

```

Basic Operators

Write a program that takes two numbers as input, performs addition, subtraction, multiplication, and division, and prints the results.

```python

a = int(input("Enter the first number: "))
b = int(input("Enter the second number: "))

addition = a + b
print("Addition:", addition)

subtraction = a - b
print("Subtraction:", subtraction)

multiplication = a * b
print("Multiplication:", multiplication)

division = a / b
print("Division:", division)

```

Working with Input and Output

In Python, you can use the print function to output information and the input function to get user input. Here is an example:

```python

# Output
print("Hello, world!")

# Input
user_name = input("Enter your name: ")
print("Hello,", user_name)

```

Input and Output

Write a program that asks for your name and then greets you by name.

```python

user_name = input("Enter your name: ")
print("Hello,", user_name)

```

Comparison and Logical Operators

Comparison operators compare two values and return a boolean result.
Logical operators combine boolean values.
Here are some examples:

```python

number1 = 7
number2 = 5

print("number1 > number2:", number1 > number2)
print("number1 < number2:", number1 < number2)
print("number1 == number2:", number1 == number2)

bool1 = True
bool2 = False

print("bool1 and bool2:", bool1 and bool2)
print("bool1 or bool2:", bool1 or bool2)
print("not bool1:", not bool1)

```

Comparison and Logical Operators

Write a program that takes two numbers as input and prints whether the first number is greater than, less than, or equal to the second number.
Also, print the result of logical operations between two boolean variables.

```python

number1 = int(input("Enter the first number: "))
number2 = int(input("Enter the second number: "))

print("number1 > number2:", number1 > number2)
print("number1 < number2:", number1 < number2)
print("number1 == number2:", number1 == number2)

bool1 = True
bool2 = False

print("bool1 and bool2:", bool1 and bool2)
print("bool1 or bool2:", bool1 or bool2)
print("not bool1:", not bool1)

```






