# FOR EACH Loop

The `FOR EACH` loop in ApLang is used to iterate over the elements of a list. This type of loop is ideal when you want to perform an operation on each element of a list without manually managing loop counters or indices. The `FOR EACH` loop simplifies code that processes each item in a collection, making your programs easier to read and maintain.

## Syntax

```ap
FOR EACH item IN list {
    // Code to execute for each item
}
```

- `item` represents the current element in the list for each iteration of the loop.
- `list` is the collection of elements you want to iterate over.

### Example: Basic FOR EACH Loop

```ap
// Define a list of numbers
numbers <- [1, 2, 3, 4, 5]

// Iterate over each number in the list and display it
FOR EACH number IN numbers {
    DISPLAY(number)
}
// Output:
// 1
// 2
// 3
// 4
// 5
```

In this example, the `FOR EACH` loop iterates over each element in the `numbers` list and displays it. The loop executes once for each element in the list.

### Example: Performing Operations on List Elements

```ap
// Define a list of words
words <- ["apple", "banana", "cherry"]

// Iterate over each word in the list and display it in uppercase
FOR EACH word IN words {
    DISPLAY(word + " in uppercase is " + TO_UPPER(word) + "!")
}
// Output:
// apple in uppercase is APPLE!
// banana in uppercase is BANANA!
// cherry in uppercase is CHERRY!
```

In this example, the `FOR EACH` loop iterates over the `words` list and displays each word, demonstrating how to concatenate strings within the loop.

### Example: Modifying Elements Within the Loop

```ap
// Define a list of numbers
numbers <- [1, 2, 3, 4, 5]

// Initialize an empty list to hold doubled values
doubled_numbers <- []

// Iterate over each number in the list, double it, and add it to the new list
FOR EACH number IN numbers {
    doubled_numbers <- doubled_numbers + [number * 2]
}

DISPLAY(doubled_numbers)
// Output: [2, 4, 6, 8, 10]
```

In this example, the `FOR EACH` loop doubles each number in the `numbers` list and appends the result to a new list called `doubled_numbers`. The loop efficiently processes each element and builds a new list of doubled values.

### Nesting FOR EACH Loops

You can nest `FOR EACH` loops to iterate over multiple lists or to perform more complex operations on lists of lists.

```ap
// Define a list of lists
matrix <- [[1, 2], [3, 4], [5, 6]]

// Iterate over each row in the matrix
FOR EACH row IN matrix {
    // Iterate over each element in the current row
    FOR EACH element IN row {
        DISPLAY(element)
    }
}
// Output:
// 1
// 2
// 3
// 4
// 5
// 6
```

In this example, the outer `FOR EACH` loop iterates over each row of the `matrix`, and the inner `FOR EACH` loop iterates over each element in the current row, displaying all elements in the matrix.

## Conclusion

The `FOR EACH` loop is a powerful and versatile tool in ApLang, allowing you to iterate over lists and perform operations on each element with ease. By using `FOR EACH` loops, you can write cleaner and more efficient code, especially when working with collections of data. Mastering this loop will enable you to handle a wide range of programming tasks involving lists in ApLang.