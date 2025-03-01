## BREAK and CONTINUE in Loops

In ApLang, loops like `REPEAT`, `REPEAT UNTIL`, and `FOR EACH` give you the ability to control the flow of the loop execution using the `BREAK` and `CONTINUE` keywords.

### BREAK

The `BREAK` keyword allows you to exit a loop entirely before it naturally finishes. Once the `BREAK` statement is encountered, the program will immediately stop executing the current loop and move to the next statement after the loop.

Here's an example of using `BREAK` in a loop:

```ap
REPEAT 10 TIMES {
    IF (i == 5) {
        BREAK
    }
    DISPLAY(i)
}
// This will display numbers from 1 to 4 and then stop
```

In this example, the loop will terminate when the value of `i` reaches 5, and no further iterations will be performed.

### CONTINUE

The `CONTINUE` keyword is used to skip the current iteration of a loop and move to the next one without breaking out of the loop completely. Once the `CONTINUE` statement is encountered, the program will stop the current iteration and start the next iteration of the loop immediately.

Here's an example of using `CONTINUE`:

```ap
i <- 0
REPEAT 10 TIMES {
    i <- i + 1
    IF (i == 5) {
        CONTINUE
    }
    DISPLAY(i)
}
// This will display numbers from 1 to 4 and 6 to 10, skipping 5
```

In this case, when the value of `i` is 5, the `CONTINUE` statement will skip displaying `i` and jump to the next iteration, so 5 will not be printed.

### Using BREAK and CONTINUE in FOR EACH

Both `BREAK` and `CONTINUE` can also be used in `FOR EACH` loops to manage the flow of list iteration. Here's an example:

```ap
myList <- ["a", "b", "skipThis", "c", "stopHere", "d"]
FOR EACH item IN myList {
    IF (item == "skipThis") {
        CONTINUE
    }
    IF (item == "stopHere") {
        BREAK
    }
    DISPLAY(item)
}
```

In this example, the `CONTINUE` statement skips the iteration where `item` equals `"skipThis"`, and the `BREAK` statement stops the loop entirely when `item` equals `"stopHere"`.

### Conclusion

The `BREAK` and `CONTINUE` keywords give you finer control over loop execution. Whether you need to prematurely exit a loop or skip over specific iterations, these commands provide essential tools for managing complex looping conditions.