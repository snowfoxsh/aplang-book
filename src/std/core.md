# Core Module Documentation

```ap
IMPORTED BY DEFAULT
```

The Core module provides essential functions for user interaction, list manipulation, and generating random numbers.

## Table of Contents

- [Core Module Documentation](#core-module-documentation)
    - [Import Example](#import-example)
  - [Table of Contents](#table-of-contents)
- [Functions](#functions)
  - [DISPLAY](#display)
  - [INPUT](#input)
  - [INSERT](#insert)
  - [APPEND](#append)
  - [REMOVE](#remove)
  - [LENGTH](#length)
  - [RANDOM](#random)

---

# Functions

---


## DISPLAY

Outputs the given value to the console.

**Parameters:**  
- `value: Any` The value to be displayed.

**Returns:**  
- `Null`

**Example Usage:**
```ap
DISPLAY("Hello, world!")
DISPLAY(123)
```

---

## INPUT

Prompts the user for input and returns the entered value as a string.

**Parameters:**  None

**Returns:**  
- `String`: The input provided by the user.

**Example Usage:**
```ap
user_input <- INPUT()
DISPLAY(user_input)
```

---

## INSERT

Inserts a value into a list at a specified index.

**Parameters:**  
- `list: List` The list in which to insert the value.
- `i: Number` The index at which to insert the value (indexed starting at 1).
- `value: Any` The value to insert.

**Returns:**  
- `Null`: No return value.

**Example Usage:**
```ap
my_list <- [1, 2, 4]
INSERT(my_list, 3, 3)
DISPLAY(my_list) // [1, 2, 3, 4]
```

---

## APPEND

Appends a value to the end of a list.

**Parameters:**  
- `list: List` The list to which the value will be appended.
- `value: Any` The value to append.

**Returns:**  
- `Null`: No return value.

**Example Usage:**
```ap
my_list <- [1, 2, 3]
APPEND(my_list, 4)
DISPLAY(my_list) // [1, 2, 3, 4]
```

---

## REMOVE

Removes a value from a list at the specified index and returns the removed value.

**Parameters:**  
- `list: List` The list from which the value will be removed.
- `i: Number` The index of the value to remove (indexed starting at 1).

**Returns:**  
- `Value`: The value that was removed.

**Example Usage:**
```ap
my_list <- [1, 2, 3, 4]
removed <- REMOVE(my_list, 2)
DISPLAY(removed) // 2
DISPLAY(my_list) // [1, 3, 4]
```

---

## LENGTH

Returns the length of a list.

**Parameters:**  
- `list: List` The list whose length will be returned.

**Returns:**  
- `Number`: The length of the list as a number.

**Example Usage:**
```ap
my_list <- [1, 2, 3]
list_length <- LENGTH(my_list)
DISPLAY(list_length) // 3
```

---

## RANDOM

Generates a random integer between two numbers (inclusive).

**Parameters:**  
- `a: Number` The lower bound.
- `b: Number` The upper bound.

**Returns:**  
- `Number`: A random integer between `a` and `b`.

**Example Usage:**
```ap
random_number <- RANDOM(1, 10)
DISPLAY(random_number) // Random number between 1 and 10
```