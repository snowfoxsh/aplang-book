# Time Module Documentation

```ap
IMPORT MOD "TIME"
```

The Time module provides functions for getting the current time and pausing execution for a specified duration.

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

Returns the current time in milliseconds since the UNIX epoch (January 1, 1970).

**Parameters:**  None

**Returns:**  
- `Number`: The current time in milliseconds

**Example Usage:**
```ap
current_time <- TIME()
DISPLAY(current_time)
```

---

## SLEEP

Pauses the execution of the program for a specified number of milliseconds.

**Parameters:**  
- `duration: Number` The duration to sleep in milliseconds.

**Returns:**  
- `Null`

**Example Usage:**
```ap
DISPLAY("Sleeping for 2 seconds...")
SLEEP(2000)
DISPLAY("Awake now!")
```