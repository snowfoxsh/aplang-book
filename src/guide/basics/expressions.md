# Expressions

Expressions are a core concept in ApLang. They represent values or computations that produce values. In ApLang, you can use expressions to perform arithmetic operations, manipulate strings and lists, call functions, and evaluate logical conditions. This chapter will introduce you to the different types of expressions available in ApLang and how to use them effectively.

## Arithmetic Expressions

Arithmetic expressions in ApLang allow you to perform basic mathematical operations. ApLang supports the following arithmetic operators:

- `+` (addition)
- `-` (subtraction)
- `*` (multiplication)
- `/` (division)
- `MOD` (modulo)

### Example: Arithmetic Operations

```ap
// Addition
sum <- 5 + 3
DISPLAY(sum)  // Output: 8

// Subtraction
difference <- 10 - 4
DISPLAY(difference)  // Output: 6

// Multiplication
product <- 7 * 2
DISPLAY(product)  // Output: 14

// Division
quotient <- 8 / 2
DISPLAY(quotient)  // Output: 4

// Modulo (remainder of division)
remainder <- 9 MOD 4
DISPLAY(remainder)  // Output: 1
```

In these examples, each expression calculates a result using arithmetic operators and assigns the result to a variable.

## String and List Concatenation

ApLang supports string and list concatenation using the `+` operator. Concatenation combines two strings or two lists into one.

### Example: String Concatenation

```ap
greeting <- "Hello, "
name <- "World!"
full_greeting <- greeting + name
DISPLAY(full_greeting)  // Output: "Hello, World!"
```

### Example: List Concatenation

```ap
list1 <- [1, 2, 3]
list2 <- [4, 5, 6]
combined_list <- list1 + list2
DISPLAY(combined_list)  // Output: [1, 2, 3, 4, 5, 6]
```

These examples show how the `+` operator can be used to concatenate strings and lists, creating a new string or list that combines the contents of both operands.

## Function Calls as Expressions

Function calls in ApLang are expressions that evaluate to the return value of the function. You can use function calls wherever expressions are allowed.

### Example: Using Function Calls

```ap
PROCEDURE square(x) {
    RETURN x * x
}

result <- square(4)
DISPLAY(result)  // Output: 16
```

In this example, `square(4)` is an expression that calls the `square` function with the argument `4` and returns the result.

## Logical Expressions

Logical expressions evaluate to boolean values (`TRUE` or `FALSE`) and are used to make decisions in your programs. ApLang supports several logical operators:

- `NOT` (logical negation)
- `AND` (logical conjunction)
- `OR` (logical disjunction)

### Example: Logical Operations

```ap
a <- TRUE
b <- FALSE

// Logical NOT
not_a <- NOT a
DISPLAY(not_a)  // Output: FALSE

// Logical AND
and_result <- a AND b
DISPLAY(and_result)  // Output: FALSE

// Logical OR
or_result <- a OR b
DISPLAY(or_result)  // Output: TRUE
```

Logical expressions are crucial for controlling the flow of your program using conditional statements.

## Comparison Expressions

Comparison expressions are used to compare values and produce boolean results. ApLang supports the following comparison operators:

- `==` (equal to)
- `!=` (not equal to)
- `>` (greater than)
- `<` (less than)
- `>=` (greater than or equal to)
- `<=` (less than or equal to)

### Example: Comparison Operations

```ap
x <- 5
y <- 10

DISPLAY(x == y)   // Output: FALSE
DISPLAY(x != y)   // Output: TRUE
DISPLAY(x > y)    // Output: FALSE
DISPLAY(x < y)    // Output: TRUE
DISPLAY(x >= y)   // Output: FALSE
DISPLAY(x <= y)   // Output: TRUE
```

These expressions evaluate to `TRUE` or `FALSE` based on the comparison of `x` and `y`.

## Combined Expressions

Expressions in ApLang can be combined to perform more complex calculations or evaluations. By using parentheses `()` to group expressions, you can control the order of operations.

### Example: Combining Expressions

```ap
a <- 2
b <- 3
c <- 4

result <- (a + b) * c  // Parentheses change the order of operations
DISPLAY(result)  // Output: 20
```

In this example, the expression `(a + b)` is evaluated first, followed by multiplication by `c`, resulting in `20`.

## Conclusion

Expressions are a powerful tool in ApLang, enabling you to perform a wide range of operations and calculations. By mastering arithmetic, string, list, logical, and comparison expressions, you can create more dynamic and efficient programs. Remember to use parentheses to control the order of operations to ensure your expressions evaluate as intended.