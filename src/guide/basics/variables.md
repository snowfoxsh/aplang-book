	# Variables

Variables in ApLang are used to store and manage data. By assigning values to variables, you can reference and manipulate them throughout your program. This chapter will introduce you to the basics of variables, including how to create them, assign values, and use them effectively.

## Creating Variables

To create a variable in ApLang, you use the assignment operator `<-`. This operator assigns the value on the right-hand side to the variable on the left-hand side.

```ap
// Create a variable named 'x' and assign it the value 10
x <- 10
DISPLAY(x)  // Output: 10
```

In the example above, the variable `x` is created and assigned the value `10`. You can think of `x` as a label that points to the value `10`.

### Variable Naming

Variable names in ApLang can contain letters, digits, and underscores (`_`). However, they must start with a letter. Good variable names are descriptive and make your code easier to understand.

```ap
// Create a variable with a descriptive name
apples_in_basket <- 5
DISPLAY(apples_in_basket)  // Output: 5
```

### Reassigning Variables

Variables in ApLang are mutable, meaning their values can be changed after they are created. To change the value of a variable, simply use the assignment operator `<-` again with a new value.

```ap
// Create a variable and assign a value
count <- 1
DISPLAY(count)  // Output: 1

// Reassign the variable with a new value
count <- 2
DISPLAY(count)  // Output: 2
```

In this example, the variable `count` is initially set to `1` and then changed to `2`.

### Using Variables in Expressions

Variables can be used in expressions just like literal values. You can perform operations with variables and assign the result to another variable or even back to the same variable.

```ap
// Create variables
a <- 5
b <- 3

// Use variables in expressions
sum <- a + b
DISPLAY(sum)  // Output: 8

// Update variable value using itself
a <- a + 1
DISPLAY(a)  // Output: 6
```

Here, `sum` is assigned the result of adding `a` and `b`. The variable `a` is then updated by adding `1` to its current value.

## Variable Scope

The *scope* of a variable is the region of your program where the variable is accessible. In ApLang, variables have a block scope, meaning they are only accessible within the block of code where they are defined.

```ap
x <- 10

IF (x > 5) {
    y <- 20  // 'y' is only accessible within this block
    DISPLAY(y)  // Output: 20
}

// Trying to access 'y' here would result in an error
// DISPLAY(y)  // Error: 'y' is not defined
```

In this example, the variable `y` is defined inside the `IF` block and cannot be accessed outside of it. The variable `x`, however, is defined outside the block and can be accessed anywhere in the program.

### Example: Variable Scope

```ap
counter <- 10

IF (counter > 5) {
    temp <- 50  // 'temp' is only accessible within this block
    DISPLAY(temp)  // Output: 50
}

// 'temp' is not accessible here and would cause an error if used
// DISPLAY(temp)  // Error: 'temp' is not defined
```

Understanding variable scope helps prevent errors and keeps your code organized and efficient.

## Conclusion

Variables are fundamental to programming in ApLang. They allow you to store, modify, and use data dynamically. By understanding how to create variables, reassign values, and use variables within their scope, you will be able to write more flexible and powerful programs.