# Hello World
This is the source code for the classic "Hello World" program. You can use the DISPLAY function (sometimes called PROCEDURE) to print text to the screen. 

```ap
// This is a comment.
// It is ignored by the interpreter.

// Print text to the console
DISPLAY("Hello World")
```
## Comments
Comments are not executed as code. Instead they are completely ignored. There are two types of comments that exist.

```ap
// Type One: interpreter will until the end of the line
/* Type Two: will ignore untill it sees -->*/
```
### Guidelines
They work as notes in the notes to help both the writer and reader to understand what is happening. You should leave comments to explain your code. Here are some general guidelines for writing good comments:
- **DO**: Use comments to explain difficult to understand sections of code
- **DO**: Use comments to help the reader understand *why* your code works
- **DO**: Use comments to document design decisions (especially compromises)
- **DON'T**: Use comments as a substitue for proper naming
- **DONT'T**: Leave comments that just reiterate *what* your code does

```ap
// Worse:
// Add two to the margin
margin <- margin + 2

// Better:
// The edge of the render box is two pixeles wide
margin <- margin + 2
```

Comments 
-- parking space  --
> This is called printing to standard output commonly abbreviated to stdout. 