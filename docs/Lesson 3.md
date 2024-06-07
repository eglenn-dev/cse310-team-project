## Advanced Python Programming

## Advanced Data Structures

Learn advanced data structures and algorithms.

Stacks
Queues
Linked lists
Trees (binary trees, binary search trees)
Graphs (basic graph traversal algorithms)

```python

# Stacks
stack = []
stack.append(1)
stack.append(2)
stack.append(3)
print(stack.pop())  # Output: 3

# Queues
from collections import deque
queue = deque([1, 2, 3])
queue.append(4)
print(queue.popleft())  # Output: 1

# Linked Lists
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
        else:
            current = self.head
            while current.next:
                current = current.next
            current.next = new_node

ll = LinkedList()
ll.append(1)
ll.append(2)
ll.append(3)

# Trees
class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

# Graphs
class Graph:
    def __init__(self):
        self.adj_list = {}

    def add_edge(self, node1, node2):
        if node1 not in self.adj_list:
            self.adj_list[node1] = []
        self.adj_list[node1].append(node2)

```

## Working with Libraries

Get comfortable with popular Python libraries.

NumPy (numerical operations)
Pandas (data manipulation)
Matplotlib/Seaborn (data visualization)
Requests (HTTP requests)

```python

# NumPy
import numpy as np
array = np.array([1, 2, 3])
print("NumPy Array:", array)

# Pandas
import pandas as pd
data = {'Name': ['Alice', 'Bob'], 'Age': [25, 22]}
df = pd.DataFrame(data)
print("Pandas DataFrame:")
print(df)

# Matplotlib/Seaborn
import matplotlib.pyplot as plt
import seaborn as sns

x = [1, 2, 3, 4, 5]
y = [10, 20, 25, 30, 40]

plt.plot(x, y)
plt.title("Line Chart")
plt.xlabel("X-axis")
plt.ylabel("Y-axis")
plt.show()

sns.barplot(x=["A", "B", "C"], y=[1, 3, 2])
plt.show()

# Requests
import requests
response = requests.get("https://api.github.com")
print("Requests Response:", response.json())

```

## Working with APIs

Learn how to interact with APIs.

Understanding APIs
Making GET and POST requests
Handling JSON data
Authenticating API requests

```python

# Understanding APIs
# APIs allow different software systems to communicate with each other.

# Making GET Requests
response = requests.get("https://api.github.com")
print(response.json())

# Making POST Requests
payload = {'key': 'value'}
response = requests.post("https://httpbin.org/post", data=payload)
print(response.json())

# Handling JSON Data
data = response.json()
print(data)

# Authenticating API Requests
response = requests.get("https://api.github.com/user", auth=('username', 'token'))
print(response.json())

```