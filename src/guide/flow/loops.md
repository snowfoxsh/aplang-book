# Loops

Loops are fundamental control flow structures in ApLang that allow you to repeat a block of code multiple times. Loops are particularly useful when you want to perform a repetitive task or iterate over a collection of items without writing the same code multiple times. In ApLang, there are two main types of loops: `REPEAT TIMES` and `REPEAT UNTIL`.

## REPEAT TIMES

The `REPEAT TIMES` loop allows you to execute a block of code a specified number of times. This type of loop is useful when you know in advance how many times you want to repeat an operation.

### Syntax

```ap
REPEAT n TIMES {
    // Code to repeat
}
```

Here, `n` is the number of times the code block should be executed. 

### Example: REPEAT TIMES Loop

```ap
// Display "Hello, World!" 3 times
REPEAT 3 TIMES {
    DISPLAY("Hello, World!")
}
// Output:
// Hello, World!
// Hello, World!
// Hello, World!
```

In this example, the `REPEAT TIMES` loop runs the code inside the block three times, each time displaying "Hello, World!".

### Example: Using a Counter

```ap
// Initialize counter
counter <- 0

// Repeat 5 times, incrementing the counter each time
REPEAT 5 TIMES {
    counter <- counter + 1
    DISPLAY(counter)
}
// Output:
// 1
// 2
// 3
// 4
// 5
```

In this example, the loop repeats five times, incrementing the `counter` by 1 on each iteration and displaying its value.

## REPEAT UNTIL

The `REPEAT UNTIL` loop executes a block of code repeatedly until a specified condition becomes `TRUE`. This type of loop is useful when you want to repeat an operation until a certain condition is met, but you don't know in advance how many iterations it will take.

### Syntax

```ap
REPEAT UNTIL condition {
    // Code to repeat
}
```

The loop continues to execute as long as the `condition` is `FALSE`. Once the condition evaluates to `TRUE`, the loop stops.

### Example: REPEAT UNTIL Loop

```ap
// Initialize variable
count <- 0

// Repeat until count is equal to 5
REPEAT UNTIL count == 5 {
    count <- count + 1
    DISPLAY(count)
}
// Output:
// 1
// 2
// 3
// 4
// 5
```

In this example, the loop runs until `count` equals `5`. With each iteration, `count` is incremented by 1 and displayed. When `count` reaches `5`, the loop stops.

### Example: Using a Condition

```ap
// Initialize variables
balance <- 100
goal <- 200

// Double the balance until it reaches the goal
REPEAT UNTIL balance >= goal {
    balance <- balance * 2
    DISPLAY(balance)
}
// Output:
// 200
```

In this example, the loop doubles the `balance` on each iteration and displays it. The loop continues until `balance` is greater than or equal to the `goal` of 200.

## Conclusion

Loops are an essential tool for automating repetitive tasks in ApLang. The `REPEAT TIMES` loop is ideal when you know how many times you need to repeat an operation, while the `REPEAT UNTIL` loop is perfect for scenarios where the number of iterations depends on a condition. By mastering these looping constructs, you can create more efficient and dynamic programs.