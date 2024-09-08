# "STRING" Module Documentation

This module provides various string manipulation functions that allow for conversion, splitting, transformation, and inspection of strings.

### Import Example
```ap
IMPORT MOD "STRING"
```

## Table of Contents

- ["STRING" Module Documentation](#string-module-documentation)
    - [Import Example](#import-example)
  - [Table of Contents](#table-of-contents)
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

## TO_NUMBER

**Description:**  
Converts a string to a number (`f64`). Returns `NULL` if the conversion is not possible.

**Parameters:**  
- `raw` (Value::String): The string to convert.

**Returns:**  
- `Value::Number`: The converted number.
- `Value::Null`: If the conversion fails.

**Example Usage:**
```ap
number <- TO_NUMBER("123.45")
```

---

## TO_BOOL

**Description:**  
Converts a string to a boolean. Returns `NULL` if the conversion is not possible.

**Parameters:**  
- `raw` (Value::String): The string to convert.

**Returns:**  
- `Value::Bool`: The converted boolean.
- `Value::Null`: If the conversion fails.

**Example Usage:**
```ap
boolean <- TO_BOOL("true")
```

---

## SPLIT

**Description:**  
Splits a string into a list of strings based on a pattern.

**Parameters:**  
- `raw` (Value::String): The string to split.
- `pattern` (Value::String): The delimiter used to split the string.

**Returns:**  
- `Value::List`: A list of strings obtained by splitting the original string.

**Example Usage:**
```ap
parts <- SPLIT("apple,banana,orange", ",")
```

---

## TO_UPPER

**Description:**  
Converts a string to uppercase.

**Parameters:**  
- `raw` (Value::String): The string to convert.

**Returns:**  
- `Value::String`: The converted uppercase string.

**Example Usage:**
```ap
upper_case <- TO_UPPER("hello")
```

---

## TO_LOWER

**Description:**  
Converts a string to lowercase.

**Parameters:**  
- `raw` (Value::String): The string to convert.

**Returns:**  
- `Value::String`: The converted lowercase string.

**Example Usage:**
```ap
lower_case <- TO_LOWER("HELLO")
```

---

## TRIM

**Description:**  
Removes leading and trailing whitespace from a string.

**Parameters:**  
- `raw` (Value::String): The string to trim.

**Returns:**  
- `Value::String`: The trimmed string.

**Example Usage:**
```ap
trimmed <- TRIM("  hello  ")
```

---

## CONTAINS

**Description:**  
Checks if a string contains a given substring.

**Parameters:**  
- `raw` (Value::String): The string to search.
- `pattern` (Value::String): The substring to search for.

**Returns:**  
- `Value::Bool`: `true` if the substring is found, `false` otherwise.

**Example Usage:**
```ap
contains <- CONTAINS("hello world", "world")
```

---

## REPLACE

**Description:**  
Replaces all occurrences of a substring with another substring.

**Parameters:**  
- `raw` (Value::String): The string to modify.
- `from` (Value::String): The substring to replace.
- `to` (Value::String): The substring to replace with.

**Returns:**  
- `Value::String`: The modified string with replacements.

**Example Usage:**
```ap
replaced <- REPLACE("hello world", "world", "everyone")
```

---

## STARTS_WITH

**Description:**  
Checks if a string starts with a given prefix.

**Parameters:**  
- `raw` (Value::String): The string to check.
- `prefix` (Value::String): The prefix to check for.

**Returns:**  
- `Value::Bool`: `true` if the string starts with the prefix, `false` otherwise.

**Example Usage:**
```ap
starts <- STARTS_WITH("hello", "he")
```

---

## ENDS_WITH

**Description:**  
Checks if a string ends with a given suffix.

**Parameters:**  
- `raw` (Value::String): The string to check.
- `suffix` (Value::String): The suffix to check for.

**Returns:**  
- `Value::Bool`: `true` if the string ends with the suffix, `false` otherwise.

**Example Usage:**
```ap
ends <- ENDS_WITH("hello", "lo")
```

---

## JOIN

**Description:**  
Joins a list of strings into a single string, separated by a given separator.

**Parameters:**  
- `list` (Value::List): The list of strings to join.
- `separator` (Value::String): The separator to use between elements.

**Returns:**  
- `Value::String`: The joined string.

**Example Usage:**
```ap
joined <- JOIN(["apple", "banana", "orange"], ", ")
```

---

## SUBSTRING

**Description:**  
Extracts a substring from a string, starting at a given position and of a specified length.

**Parameters:**  
- `raw` (Value::String): The original string.
- `start` (Value::Number): The starting index (0-based).
- `length` (Value::Number): The length of the substring.

**Returns:**  
- `Value::String`: The extracted substring.

**Example Usage:**
```ap
substring <- SUBSTRING("hello world", 0, 5)
```

---

## TO_CHAR_ARRAY

**Description:**  
Converts a string into a list of single-character strings.

**Parameters:**  
- `raw` (Value::String): The string to convert.

**Returns:**  
- `Value::List`: A list where each element is a single-character string.

**Example Usage:**
```ap
char_array <- TO_CHAR_ARRAY("hello")
```