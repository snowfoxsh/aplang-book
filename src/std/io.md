# IO Module Documentation

```ap
IMPORT MOD "IO"
```

The IO module provides functions for formatted user input, output, and string formatting.

## Table of Contents

- [IO Module Documentation](#io-module-documentation)
    - [Import Example](#import-example)
  - [Table of Contents](#table-of-contents)
- [Functions](#functions)
  - [INPUT\_PROMPT](#input_prompt)
  - [FORMAT](#format)
  - [DISPLAYF](#displayf)

--- 

# Functions

---

## INPUT_PROMPT

Prompts the user with a custom message and returns the user's input as a string.

**Parameters:**  
- `prompt: String` The prompt message to display to the user.

**Returns:**  
- `String`: The user's input as a string.

**Example Usage:**
```ap
user_input <- INPUT_PROMPT("Enter your name: ")
DISPLAY(user_input)
```

---

## FORMAT

Formats a string by replacing placeholders (`{}`) with values from a list.

**Parameters:**  
- `fstring: String` The format string with `{}` as placeholders.
- `args: List` The list of values to insert into the format string.

**Returns:**  
- `String`: The formatted string.

**Example Usage:**
```ap
name <- "Alice"
age <- 25
message <- FORMAT("My name is {} and I am {} years old.", [name, age])
DISPLAY(message)
// "My name is Alice and I am 25 years old."
```

---

## DISPLAYF

Displays a formatted string to the console by replacing placeholders (`{}`) with values from a list.

**Parameters:**  
- `fstring: String` The format string with `{}` as placeholders.
- `args: List` The list of values to insert into the format string.

**Returns:**  
- `Null`: No return value, outputs directly to the console.

**Example Usage:**
```ap
name <- "Bob"
score <- 100
DISPLAYF("Player {} scored {} points!", [name, score])
// "Player Bob scored 100 points!"
```