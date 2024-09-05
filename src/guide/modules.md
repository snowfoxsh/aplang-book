# Modules

> As you begin to write larger and more complex programs organizing your code will become increasingly more important ([The Rust Book](https://doc.rust-lang.org/stable/book/ch07-00-managing-growing-projects-with-packages-crates-and-modules.html)). 

Enter the module! They work to "encapsolate implementation details". What does that mean? Well (explain what that means). Its to hide unesssisary that so the user of the module does not need to worry about it. It allows you to effectivley break down a project into small building blocks which can be stuck together. Every `.ap` file is also a module. There are two types of modules in ApLang. Standard Library Modules that come with your aplang. Standard Library Modules are "native" meaning that they are writen in Rust. You can find documentation about them all in the `Standard Library` section of this guide. At its core this is what gives ApLang important functionality. Standard Library modules are by convention in SCREAMING_CASE, as are the functions that live inside each module.

```ap
// Import all functions from a std module
IMPORT MOD "MATH"

// we can now use functions from this

// Import just the INPUT function from the "IO" module
IMPORT "INPUT" FROM MOD "IO"


// Import the FILE_CREATE and FILE_READ functions from the "FS" (file system) module
IMPORT ["FILE_CREATE", "FILE_READ"] FROM MOD "FS"
```

The other type of modules are "User Modules". They are modules written in ApLang. All modules must have the file extention `.ap` or they will not be found. Instead of just calling the name of the module u must pass the path to it.

- make a nice directory trees for the examples when you think it would be usefull so the reader   can visualize the structure of the project
```ap
// main.ap

// notice the .ap file extention
IMPORT "myFunction" from "./myModule.ap"

// this is equivent to the previous statement
IMPORT "myFunction" from "myModule.ap"

// you can import whole nested modules
IMPORT "./nested/myModule.ap
```

Notice that we dont use SCREAMING_CASE here we use camelCase. Std code by convention is in SCREAMING_CASE but any procedures the programmer defines should be in camelCase.


But how do we make it so functions in our file are accessable outside of the file? We need to EXPORT them. By default procedures are private meaning invisable to outside code. we can make them "public" or visable by placing the EXPORT keyword before PROCEDURE


```ap
// myModule.ap
EXPORT PROCEDURE myFunction() {
    // does something
}
```

You can only export procedures not variables. If you need to export a variable wrap it in a function like this

```
EXPORT PROCEDURE myFavorteNumber() {
    RETURN 8
}
```


--- Please break this into a few sections. improve my writing but dont change the keep the tone. The style of writing should be that of "The rust book" and "Rust By example". Please make my examples better.