# String Module Documentation

```ap
IMPORT MOD "STRING"
```

This module provides various string manipulation functions that allow for conversion, splitting, transformation, and inspection of strings.

## Table of Contents

- [String Module Documentation](#string-module-documentation)
    - [Import Example](#import-example)
  - [Table of Contents](#table-of-contents)
- [Functions](#functions)
  - [TO\_NUMBER](#to_number)
  - [TO\_BOOL](#to_bool)
  - [SPLIT](#split)
  - [TO\_UPPER](#to_upper)
  - [TO\_LOWER](#to_lower)
  - [TRIM](#trim)
  - [CONTAINS](#contains)
  - [REPLACE](#replace)
  - [STARTS\_WITH](#starts_with)
  - [ENDS\_WITH](#ends_with)
  - [JOIN](#join)
  - [SUBSTRING](#substring)
  - [TO\_CHAR\_ARRAY](#to_char_array)

---

# Functions

---


## TO_NUMBER

Converts a string to a number (`f64`). Returns `NULL` if the conversion is not possible.

**Parameters:**  
- `raw: String` The string to convert.

**Returns:**  
- `Number`: The converted number, `NULL` If the conversion fails.

**Example Usage:**
```ap
number <- TO_NUMBER("123.45")

IF (number == NULL) {
    DISPLAY("Conversion failed.")
}
```

---

## TO_BOOL

Converts a string to a boolean. Returns `NULL` if the conversion is not possible.

**Parameters:**  
- `raw: String` The string to convert.

**Returns:**  
- `Bool`: The converted boolean, `NULL` If the conversion fails.

**Example Usage:**
```ap
boolean <- TO_BOOL("TRUE") // you can also use "true" here

IF (boolean != NULL AND boolean == TRUE) {
    DISPLAY("It's true!")
}
```

---

## SPLIT

Splits a string into a list of strings based on a pattern.

**Parameters:**  
- `raw: String` The string to split.
- `pattern: String` The delimiter used to split the string.

**Returns:**  
- `List`: A list of strings obtained by splitting the original string.

**Example Usage:**
```ap
parts <- SPLIT("apple,banana,orange", ",")

FOR EACH item IN parts {
    DISPLAY(item)
}

// apple
// banana
// orange
```

---

## TO_UPPER

Converts a string to uppercase.

**Parameters:**  
- `raw: String` The string to convert.

**Returns:**  
- `String`: The converted uppercase string.

**Example Usage:**
```ap
upper_case <- TO_UPPER("hello")

DISPLAY(upper_case) // "HELLO"
```

---

## TO_LOWER

Converts a string to lowercase.

**Parameters:**  
- `raw: String` The string to convert.

**Returns:**  
- `String`: The converted lowercase string.

**Example Usage:**
```ap
lower_case <- TO_LOWER("HELLO")

DISPLAY(lower_case) // "hello"
```

---

## TRIM

Removes leading and trailing whitespace from a string.

**Parameters:**  
- `raw: String` The string to trim.

**Returns:**  
- `String`: The trimmed string.

**Example Usage:**
```ap
trimmed <- TRIM("  hello  ")

DISPLAY(trimmed) // "hello"
```

---

## CONTAINS

Checks if a string contains a given substring.

**Parameters:**  
- `raw: String` The string to search.
- `pattern: String` The substring to search for.

**Returns:**  
- `Bool`: `TRUE` if the substring is found, `FALSE` otherwise.

**Example Usage:**
```ap
contains <- CONTAINS("hello world", "world")

IF (contains) {
    DISPLAY("Found it!")
}
```

---

## REPLACE

Replaces all occurrences of a substring with another substring.

**Parameters:**  
- `raw: String` The string to modify.
- `from: String` The substring to replace.
- `to: String` The substring to replace with.

**Returns:**  
- `String`: The modified string with replacements.

**Example Usage:**
```ap
replaced <- REPLACE("hello world", "world", "everyone")

DISPLAY(replaced) // "hello everyone"
```

---

## STARTS_WITH

Checks if a string starts with a given prefix.

**Parameters:**  
- `raw: String` The string to check.
- `prefix: String` The prefix to check for.

**Returns:**  
- `Bool`: `TRUE` if the string starts with the prefix, `FALSE` otherwise.

**Example Usage:**
```ap
starts <- STARTS_WITH("hello", "he")

IF (starts) {
    DISPLAY("Starts with 'he'")
}
```

---

## ENDS_WITH

Checks if a string ends with a given suffix.

**Parameters:**  
- `raw: String` The string to check.
- `suffix: String` The suffix to check for.

**Returns:**  
- `Bool`: `TRUE` if the string ends with the suffix, `FALSE` otherwise.

**Example Usage:**
```ap
ends <- ENDS_WITH("hello", "lo")

IF (ends) {
    DISPLAY("Ends with 'lo'")
}
```

---

## JOIN

Joins a list of strings into a single string, separated by a given separator.

**Parameters:**  
- `list: List` The list of strings to join.
- `separator: String` The separator to use between elements.

**Returns:**  
- `String`: The joined string.

**Example Usage:**
```ap
joined <- JOIN(["apple", "banana", "orange"], ", ")

DISPLAY(joined) // "apple, banana, orange"
```

---

## SUBSTRING

Extracts a substring from a string, starting at a given position and of a specified length.

**Parameters:**  
- `raw: String` The original string.
- `start: Number` The starting index (1-based).
- `length: Number` The length of the substring.

**Returns:**  
- `String`: The extracted substring.

**Example Usage:**
```ap
substring <- SUBSTRING("hello world", 1, 4)

DISPLAY(substring) // ello
```

---

## TO_CHAR_ARRAY

Converts a string into a list of single-character strings.

**Parameters:**  
- `raw: String` The string to convert.

**Returns:**  
- `List`: A list where each element is a single-character string.

**Example Usage:**
```ap
char_array <- TO_CHAR_ARRAY("hello")

FOR EACH char in char_array {
  DISPLAY(char)
}

// h
// e
// l
// l
// o
```