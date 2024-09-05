# Modules

> As you begin to write larger and more complex programs, organizing your code will become increasingly more important. ([The Rust Book](https://doc.rust-lang.org/stable/book/ch07-00-managing-growing-projects-with-packages-crates-and-modules.html))

This is where modules come in. Modules help to **encapsulate implementation details**, which means they hide the internal workings of your code. By doing this, modules allow you to expose only the parts of the code that are necessary for the user, keeping the rest private. This makes it easier to understand and maintain your programs by breaking them down into smaller, more manageable building blocks.

Every `.ap` file in ApLang is also considered a module. In ApLang, there are two types of modules: **Standard Library Modules** and **User Modules**.

## Standard Library Modules

Standard Library Modules come built-in with ApLang and are written in Rust. These modules provide essential functionality that you can use in your programs. Standard Library Modules and their functions follow a convention of using SCREAMING_CASE for their names. Here’s how you can import them:

```ap
// Import all functions from a standard library module
IMPORT MOD "MATH"

// Now, we can use functions from the MATH module

// Import just the INPUT function from the IO module
IMPORT "INPUT" FROM MOD "IO"

// Import the FILE_CREATE and FILE_READ functions from the FS (file system) module
IMPORT ["FILE_CREATE", "FILE_READ"] FROM MOD "FS"
```

## User Modules

User Modules are modules written by you, the programmer, using ApLang. These modules also have the `.ap` file extension, and you can specify their path when importing them. Here’s an example:

```ap
// main.ap

// Importing a specific function from a user module using its relative path
IMPORT "myFunction" FROM "./myModule.ap"

// This is equivalent to the previous statement
IMPORT "myFunction" FROM "myModule.ap"

// Importing a whole nested module
IMPORT "./nested/myModule.ap"
```

In contrast to Standard Library Modules, user-defined functions and modules should be written in camelCase rather than SCREAMING_CASE. This helps distinguish user code from the standard library code.

### Directory Structure Example

To better visualize how modules are organized, let's look at a simple project directory tree:

```
/my_project
|-- main.ap
|-- myModule.ap
|-- nested/
|   |-- myModule.ap
```

### Exporting Functions

By default, functions in ApLang are private, meaning they can't be accessed outside of the file they're defined in. To make a function accessible to other modules, you need to use the `EXPORT` keyword before `PROCEDURE`. Here’s how you can export a function:

```ap
// myModule.ap
EXPORT PROCEDURE myFunction() {
    // does something
}
```

### Exporting Values

You cannot directly export variables in ApLang. If you want to share a variable across modules, you need to wrap it in a function:

```ap
EXPORT PROCEDURE myFavoriteNumber() {
    RETURN 8
}
```

By exporting this procedure, other modules can call `myFavoriteNumber()` to get the value `8`.

## Conclusion

Modules are a powerful tool in ApLang that help you organize and manage your code more effectively. By encapsulating implementation details, modules make it easier to break down complex programs into smaller, reusable components. Whether you're using built-in Standard Library Modules or creating your own User Modules, understanding how to import, export, and structure your code will allow you to build more robust and maintainable projects. As your programs grow, leveraging modules will become essential for keeping your codebase clean and efficient.
