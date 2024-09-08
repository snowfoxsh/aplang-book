# Error Anatomy

When you're writing code, you're bound to run into errors. It's just a fact of life. While they might look complicated at first, error messages are really just the program's way of telling you something went wrong, and our way of giving you clues on how to fix it. Let's break one down together.

Here's a super simple example of one:
```
Error: aplang::runtime

  x Invalid Variable
   ,-[./examples.ap/main.ap:1:1]
 1 | var
   : |
   : `-- Could not find variable
 2 |
   `----
  help: Make sure to create the variable `var` before you use it

error: process didn't exit successfully: `target\debug\aplang.exe -d all ./examples.ap/main.ap` (exit code: 1)
```

Let's break this down step by step:

1. **Error type:** `Error: aplang::runtime`
   
   The very first line tells you what type of error occurred. This will often tell you the general category of the error, like a runtime error or a syntax error. In our case, this is a runtime error.

2. **Error code:** `x Invalid Variable`
   
   Right below the error type, you'll usually find a more succinct description of the error. It's like a headline that summarizes the problem in a few words. In our case, it's telling us that a variable that we tried to use is invalid.

3. **Error Location (File and Line Number):** `[./examples.ap/main.ap:1:1]  `
    
    This part tells you where the error occurred. It's usually in the format `[file_path:line_number:column_number]`. In our case, the error occurred in the file `main.ap` at line 1, column 1.
    <div class="warning">When Importing code from a Module, the file_path will <i>always</i> show the main file, even if the error is in the Module. This is subject to change.</div>

4. **Code Snippet:**
    ```
    1 | var
      : |
      : `-- Could not find variable
    2 |
    ```
   The code snippet is a little snapshot of your code around the error. There is often a little pointer and a message that tells you almost exactly what went wrong. Here, it's showing us that the error occurred on line 1, where we tried to use the variable `var`.

5. **Help Message:** ```help: Make sure to create the variable `var` before you use it```
   
   Finally, the help message will often give you a hint on how to fix the error. It's the most common fix for the error you're seeing. In our case, it's telling us to create the variable `var` before we use it.


## Some Confusing Errors

1. ```
    Error:   x (todo) Expected from following specific imports, found
    |
    ```

    <div class="warning">For this one, check your import statements. You most likely forgot the word `MOD` after `IMPORT`.
    
    This error message is subject to be fixed</div>

2. 
    ```
    Error:   x expected primary, instead found {
    |
    ,-[main.ap:1:14]
    1 | someProcedure( {
    :              ^ |
    :              | `-- primary expected here
    :              `-- consider checking your upstream code
    2 |
    `----
    help: a primary is made up of the following set:
            [expression | ident | literal | list]
    ```

    This error is telling us that it expected a primary, but instead found a `{`. In this case, we missed a closing parenthesis `)`.