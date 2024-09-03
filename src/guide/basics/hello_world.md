# Hello World

Welcome to your first ApLang program! We'll start with the classic "Hello, World!" example, a simple program that displays text on the screen. This program introduces the `DISPLAY` procedure, which you can use to print text. 

```ap
// This is a comment.
// Comments are ignored by the interpreter.

// Display text on the console
DISPLAY("Hello, World!")
//      ^^^^^^^^^^^^^^^^
//          String Literal
```

Let's break this down:

- **`DISPLAY`**: This procedure (sometimes called a function) outputs the text you provide to the console.
- **`"Hello, World!"`**: The text inside the quotation marks is called a "String Literal." A string is a sequence of characters. In this case, "Hello, World!" is the string we want to display.

## Comments

Comments are an essential part of programming. They help you and others understand your code by providing explanations or notes. In ApLang, comments are not executed as part of your program; instead, they are completely ignored by the interpreter.

There are two types of comments in ApLang:

### Line Comments

Line comments start with `//` and continue until the end of the line. 

```ap
// This is a line comment. It explains the code below.
DISPLAY("Hello, World!")
```

### Block Comments

Block comments start with `/*` and end with `*/`. Everything between these markers is ignored by the interpreter.

```ap
/* 
This is a block comment.
It can span multiple lines.
*/
DISPLAY("Hello, World!")
```

## Commenting Guidelines

Writing good comments is an important skill for making your code more readable and maintainable. Here are some guidelines for writing effective comments:

- **DO**: Use comments to explain complex or non-obvious sections of code.
- **DO**: Use comments to provide context on why certain decisions were made.
- **DO**: Document design decisions, especially any trade-offs or compromises.
- **DON'T**: Use comments as a substitute for clear and descriptive variable or function names.
- **DON'T**: Write comments that simply restate what the code does; focus on the "why."

### Example of Effective Comments

Let's look at an example of how to use comments effectively:

```ap
// Poor Commenting:
// Increment the margin by 2
margin <- margin + 2

// Better Commenting:
// Increase margin to account for the 2-pixel border of the render box
margin <- margin + 2
```

In the first example, the comment just restates what the code does, which is redundant. The improved version explains *why* the margin is increased, providing valuable context.