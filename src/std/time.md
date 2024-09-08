# Time Module Documentation

The Time module provides functions for getting the current time and pausing execution for a specified duration.

### Import Example
```ap
IMPORT MOD "TIME"
```

## Table of Contents

- [Time Module Documentation](#time-module-documentation)
    - [Import Example](#import-example)
  - [Table of Contents](#table-of-contents)
- [Functions](#functions)
  - [TIME](#time)
  - [SLEEP](#sleep)

---

# Functions

---


## TIME

**Description:**  
Returns the current time in milliseconds since the UNIX epoch (January 1, 1970).

**Parameters:**  
None.

**Returns:**  
- `Value::Number`: The current time in milliseconds as a floating-point number.

**Example Usage:**
```ap
current_time <- TIME()
DISPLAY(current_time)
```

---

## SLEEP

**Description:**  
Pauses the execution of the program for a specified number of milliseconds.

**Parameters:**  
- `duration` (Value::Number): The duration to sleep in milliseconds.

**Returns:**  
- `Value::Null`: No return value, the function pauses the execution.

**Example Usage:**
```ap
DISPLAY("Sleeping for 2 seconds...")
SLEEP(2000)
DISPLAY("Awake now!")
```