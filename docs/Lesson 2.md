## Intermediate Python Programming


## Functions and Modules

Deepen understanding of functions and modular programming.

Advanced functions
Lambda functions
Modules and packages (importing, creating modules) 

```python

# Advanced Functions
def greet(name="Guest"):
    return "Hello, " + name

print(greet())
print(greet("Alice"))

def add_numbers(*args):
    return sum(args)

print(add_numbers(1, 2, 3, 4))

def display_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

display_info(name="Alice", age=25)

# Lambda Functions
add = lambda x, y: x + y
print(add(2, 3))

# Modules and Packages
# Creating a module (save this as mymodule.py)
def greet(name):
    return "Hello, " + name

# Importing a module
# import mymodule
# print(mymodule.greet("Alice"))

```

## File Handling

Learn how to handle files in Python.

Reading and writing files (text and binary files)
Working with file paths
Using context managers (with statement)

```python

# Reading and Writing Files
# Writing to a file
with open("example.txt", "w") as file:
    file.write("Hello, world!")

# Reading from a file
with open("example.txt", "r") as file:
    content = file.read()
    print(content)

# Working with File Paths
import os

print(os.path.exists("example.txt"))

# Using Context Managers
with open("example.txt", "r") as file:
    for line in file:
        print(line.strip())

```
## Error and Exception Handling

Understand how to handle errors and exceptions.

Try, except blocks
Finally clause
Custom exceptions

```python

# Try, Except Blocks
try:
    result = 10 / 0
except ZeroDivisionError as e:
    print("Error:", e)

# Finally Clause
try:
    file = open("example.txt", "r")
finally:
    file.close()

# Custom Exceptions
class CustomError(Exception):
    pass

try:
    raise CustomError("This is a custom error.")
except CustomError as e:
    print("Caught custom error:", e)

```
## Object-Oriented Programming 

Introduction to OOP concepts.

Classes and objects
Methods and attributes
Inheritance
Polymorphism
Encapsulation

```python

# Classes and Objects
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        return f"Hello, my name is {self.name}."

person = Person("Alice", 25)
print(person.greet())

# Inheritance
class Student(Person):
    def __init__(self, name, age, student_id):
        super().__init__(name, age)
        self.student_id = student_id

student = Student("Bob", 22, "S12345")
print(student.greet())

# Polymorphism
def introduce(person):
    print(person.greet())

introduce(person)
introduce(student)

# Encapsulation
class EncapsulatedPerson:
    def __init__(self, name, age):
        self.__name = name
        self.__age = age

    def get_name(self):
        return self.__name

    def get_age(self):
        return self.__age

enc_person = EncapsulatedPerson("Charlie", 30)
print(enc_person.get_name())
print(enc_person.get_age())

```
