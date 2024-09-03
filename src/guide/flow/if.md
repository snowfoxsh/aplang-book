# IF Statements

`IF` statements are a fundamental control flow structure in ApLang. They allow your program to make decisions and execute specific blocks of code based on certain conditions. Using `IF`, `ELSE IF`, and `ELSE`, you can create flexible programs that respond dynamically to different inputs and scenarios.

## IF

The `IF` statement checks a condition and executes a block of code if the condition evaluates to `TRUE`. It’s the most basic form of decision-making in your program.

### Syntax

```ap
IF (condition) {
    // Code to execute if the condition is TRUE
}
```

### Example: Basic IF Statement

```ap
x <- 10

IF (x > 5) {
    DISPLAY("x is greater than 5")
}
// Output: "x is greater than 5"
```

In this example, the condition `(x > 5)` is `TRUE`, so the code inside the `IF` block is executed, displaying "x is greater than 5."

## ELSE

The `ELSE` statement is used to execute a block of code if the condition in the preceding `IF` statement evaluates to `FALSE`. It provides an alternative path of execution.

### Syntax

```ap
IF (condition) {
    // Code to execute if the condition is TRUE
} ELSE {
    // Code to execute if the condition is FALSE
}
```

### Example: IF-ELSE Statement

```ap
x <- 3

IF (x > 5) {
    DISPLAY("x is greater than 5")
} ELSE {
    DISPLAY("x is not greater than 5")
}
// Output: "x is not greater than 5"
```

Here, the condition `(x > 5)` is `FALSE`, so the code inside the `ELSE` block is executed, displaying "x is not greater than 5."

## ELSE IF

The `ELSE IF` statement allows you to check multiple conditions sequentially. If the initial `IF` condition is `FALSE`, the program checks the `ELSE IF` condition. You can chain multiple `ELSE IF` statements together to handle various scenarios.

### Syntax

```ap
IF (condition1) {
    // Code to execute if condition1 is TRUE
} ELSE IF (condition2) {
    // Code to execute if condition1 is FALSE and condition2 is TRUE
} ELSE {
    // Code to execute if none of the above conditions are TRUE
}
```

### Example: IF-ELSE IF-ELSE Statement

```ap
x <- 5

IF (x > 5) {
    DISPLAY("x is greater than 5")
} ELSE IF (x == 5) {
    DISPLAY("x is equal to 5")
} ELSE {
    DISPLAY("x is less than 5")
}
// Output: "x is equal to 5"
```

In this example, the program first checks if `x` is greater than `5`. Since this is `FALSE`, it moves to the `ELSE IF` condition `(x == 5)`, which is `TRUE`. The code inside the `ELSE IF` block is executed, displaying "x is equal to 5."

## Nesting IF Statements

You can nest `IF` statements within each other to create more complex decision-making structures. This is useful for checking multiple conditions in a hierarchical manner.

### Example: Nested IF Statements

```ap
x <- 10
y <- 20

IF (x > 5) {
    IF (y > 15) {
        DISPLAY("x is greater than 5 and y is greater than 15")
    } ELSE {
        DISPLAY("x is greater than 5 but y is not greater than 15")
    }
} ELSE {
    DISPLAY("x is not greater than 5")
}
// Output: "x is greater than 5 and y is greater than 15"
```

In this example, the first `IF` statement checks if `x` is greater than `5`. Since it is `TRUE`, the program moves inside this `IF` block and checks the next `IF` statement to see if `y` is greater than `15`. Since both conditions are `TRUE`, it displays "x is greater than 5 and y is greater than 15."

## Conclusion

`IF`, `ELSE IF`, and `ELSE` statements are powerful tools in ApLang, allowing you to control the flow of your program based on conditions. By mastering these constructs, you can write programs that respond dynamically to a wide range of inputs and situations, making your code more flexible and adaptable.