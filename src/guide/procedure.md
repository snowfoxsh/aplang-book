# Procedures

Procedures in ApLang are a way to encapsulate a block of code that performs a specific task. Think of procedures as a box: you can put values into the box (inputs), the box does something with those values, and then gives you a result (output). Procedures help make your programs more organized, reusable, and easier to understand.

## What is a Procedure?

A procedure is a reusable block of code that performs a particular function or task. You can define a procedure once and then use it (or "call" it) multiple times throughout your program, providing different inputs each time. This helps reduce code duplication and makes your program easier to manage.

### Defining a Procedure

To define a procedure in ApLang, use the `PROCEDURE` keyword followed by the procedure’s name and a pair of parentheses `()`. Inside the parentheses, you can specify any parameters that the procedure takes as input. The code block inside the curly braces `{}` is the body of the procedure, which contains the instructions that the procedure will execute.

### Syntax

```ap
PROCEDURE procedure_name(parameter1, parameter2, ...) {
    // Code to execute
    RETURN result
}
```

### Example: Defining a Simple Procedure

```ap
// Define a procedure to add two numbers
PROCEDURE add(a, b) {
    sum <- a + b
    RETURN sum
}
```

In this example, the `add` procedure takes two parameters, `a` and `b`, adds them together, and returns the result. The `RETURN` statement specifies the value that the procedure outputs.

### Calling a Procedure

Once a procedure is defined, you can call it by using its name followed by parentheses containing any arguments you want to pass to it. The procedure will execute its code block using the provided arguments and return a result.

### Example: Calling a Procedure

```ap
// Call the 'add' procedure with arguments 3 and 4
result <- add(3, 4)
DISPLAY(result)  // Output: 7
```

In this example, the `add` procedure is called with the arguments `3` and `4`. The procedure returns `7`, which is then displayed.

## Reference vs. Value

When passing parameters to procedures in ApLang, it's important to understand the difference between passing by reference and passing by value:

- **Pass by Value**: When a parameter is passed by value, the procedure receives a copy of the argument. Changes made to this parameter inside the procedure do not affect the original argument. In ApLang, numbers, strings, and booleans are passed by value.
  
- **Pass by Reference**: When a parameter is passed by reference, the procedure receives a reference to the actual argument, not a copy. Any changes made to this parameter inside the procedure will affect the original argument. In ApLang, lists are passed by reference.

### Example: Pass by Value

```ap
PROCEDURE modify_number(n) {
    n <- n + 10
    DISPLAY(n)  // Output: 15
}

num <- 5
modify_number(num)
DISPLAY(num)  // Output: 5
```

In this example, `num` is passed by value to the `modify_number` procedure. Inside the procedure, the local copy of `n` is modified, but the original `num` remains unchanged outside the procedure.

### Example: Pass by Reference

```ap
PROCEDURE add_to_list(lst) {
    APPEND(lst, 4)
    DISPLAY(lst)  // Output: [1, 2, 3, 4]
}

my_list <- [1, 2, 3]
add_to_list(my_list)
DISPLAY(my_list)  // Output: [1, 2, 3, 4]
```

In this example, `my_list` is passed by reference to the `add_to_list` procedure. Inside the procedure, the list is modified, and this change affects the original `my_list` outside the procedure.

## Using Procedures to Organize Code

Procedures are a powerful way to organize your code by breaking it down into smaller, manageable pieces. Each procedure can focus on a specific task, making your code easier to read, debug, and maintain.

### Example: Using Procedures to Break Down a Task

```ap
// Define a procedure to multiply two numbers
PROCEDURE multiply(a, b) {
    product <- a * b
    RETURN product
}

// Define a procedure to calculate the area of a rectangle
PROCEDURE calculate_area(length, width) {
    area <- multiply(length, width)
    RETURN area
}

// Call the 'calculate_area' procedure
area <- calculate_area(5, 10)
DISPLAY(area)  // Output: 50
```

In this example, two procedures are defined: `multiply` and `calculate_area`. The `calculate_area` procedure uses the `multiply` procedure to compute the area of a rectangle. By using procedures, the code is modular and easy to understand.

## Procedures with No Return Value

Not all procedures need to return a value. Sometimes, you might want a procedure to perform an action without giving back a result. In ApLang, procedures that do not have a `RETURN` statement simply execute their code and then finish.

### Example: Procedure with No Return Value

```ap
// Define a procedure to display a greeting
PROCEDURE greet(name) {
    DISPLAY("Hello, " + name + "!")
}

// Call the 'greet' procedure
greet("Alice")  // Output: "Hello, Alice!"
```

In this example, the `greet` procedure takes a parameter `name` and displays a greeting. It does not return any value; it simply performs an action.

## Conclusion

Procedures are like a toolbox in ApLang, allowing you to encapsulate reusable blocks of code that perform specific tasks. By understanding how ApLang passes parameters—by reference for lists and by value for other types—you can better manage how your procedures interact with data. Whether you’re returning values or simply performing actions, procedures are an essential tool for building robust and maintainable programs in ApLang.