# Types

ApLang, like many programming languages, uses various types to represent different kinds of data. Understanding these types is fundamental to writing effective programs.

## Values

In ApLang, a *value* is a piece of data that has a type. The main types of values you will encounter are:

- **Number**: Represents floating-point numbers.
- **String**: Represents text.
- **Boolean**: Represents a truth value, either `TRUE` or `FALSE`.
- **List**: Represents a series of values.

### Numbers

Numbers in ApLang are similar to numbers in mathematics. They can be whole numbers (integers) or have a decimal point (floating-point numbers). In ApLang, all numbers are represented as `f64`, which means they are 64-bit floating-point numbers. This allows for a wide range of values, both large and small, with high precision.

```ap
DISPLAY(42)      // This is a number.
DISPLAY(3.1415)  // This is also a number, with a decimal point.
```

### Strings

A *string* is a sequence of characters, used to represent text. Strings are created by placing text inside quotation marks (`"`). 

```ap
DISPLAY("Hello, ApLang!")  // This is a string.
```

Strings can contain letters, numbers, symbols, and spaces. They are very useful for storing and manipulating text data.

#### Example: Creating and Displaying Strings

```ap
// Create a string variable
my_text <- "This is a string."

// Display the string
DISPLAY(my_text)
```

In the example above, `my_text` is a variable that stores the string `"This is a string."`. The `DISPLAY` procedure outputs the value of `my_text` to the console.

### Booleans

A *Boolean* is a type that can have one of two values: `TRUE` or `FALSE`. Booleans are often used in conditional statements to control the flow of a program based on certain conditions.

```ap
DISPLAY(TRUE)   // This is a boolean value.
DISPLAY(FALSE)  // This is another boolean value.
```

Booleans are essential for making decisions in your programs. For example, you can use them to check if a condition is met and then execute different code based on the result.

#### Example: Using Booleans in Conditional Statements

```ap
is_ready <- TRUE

// Check if is_ready is TRUE
IF is_ready THEN
    DISPLAY("Ready to go!")
ELSE
    DISPLAY("Not ready yet.")
ENDIF
```

In this example, the program checks the value of `is_ready`. If it is `TRUE`, it displays "Ready to go!" Otherwise, it displays "Not ready yet."

### Lists

A *list* is a collection of values. Lists in ApLang are versatile and can hold multiple values of different types, but they are unique in that they are the only type passed by reference rather than by value. This means when you pass a list to a function or assign it to another variable, you are referencing the same list in memory, not copying it.

#### Creating a List

Lists are created using square brackets (`[]`) with values separated by commas:

```ap
my_list <- ["a", "b", "c", "d"]
DISPLAY(my_list)
```

This list contains four string elements: `"a"`, `"b"`, `"c"`, and `"d"`.

#### Understanding Lists as References

Since lists are passed by reference, modifying a list in one place affects all references to that list.

```ap
numbers <- [1, 2, 3]
more_numbers <- numbers

// Modify the list through more_numbers
APPEND(more_numbers, 4)

DISPLAY(numbers)  // Output: [1, 2, 3, 4]
DISPLAY(more_numbers)  // Output: [1, 2, 3, 4]
```

In this example, `numbers` and `more_numbers` both refer to the same list in memory. When we append `4` to `more_numbers`, `numbers` is also affected because they reference the same data.

#### Example: Using Lists

```ap
// Create a list of numbers
my_numbers <- [10, 20, 30, 40]

// Accessing elements
DISPLAY(my_numbers[1])  // Output: 10
DISPLAY(my_numbers[3])  // Output: 30

// Modifying elements
my_numbers[2] <- 25
DISPLAY(my_numbers)  // Output: [10, 25, 30, 40]
```

In the example above, `my_numbers` is a list of numbers. We can access elements using an index (starting at 1) and modify elements by assigning a new value to a specific index.