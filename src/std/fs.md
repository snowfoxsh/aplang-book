# File System Module Documentation

```ap
IMPORT MOD "FS"
```

The File System module provides functions for interacting with the file system, including checking paths, reading/writing files, and managing directories.

## Table Of Contents

---

# Functions

---


## PATH_EXISTS

Checks whether a given path exists.

**Parameters:**  
- `path: String` The path to check.

**Returns:**  
- `Bool`: `TRUE` if the path exists, `FALSE` otherwise.

**Example Usage:**
```ap
exists <- PATH_EXISTS("/home/user/file.txt")
DISPLAY(exists)
```

---

## PATH_IS_FILE

Checks if a given path is a file.

**Parameters:**  
- `path: String` The path to check.

**Returns:**  
- `Bool`: `TRUE` if the path is a file, `FALSE` otherwise.

**Example Usage:**
```ap
is_file <- PATH_IS_FILE("/home/user/file.txt")
DISPLAY(is_file)
```

---

## PATH_IS_DIRECTORY

Checks if a given path is a directory.

**Parameters:**  
- `path: String` The path to check.

**Returns:**  
- `Bool`: `TRUE` if the path is a directory, `FALSE` otherwise.

**Example Usage:**
```ap
is_dir <- PATH_IS_DIRECTORY("/home/user/")
DISPLAY(is_dir)
```

---

## FILE_CREATE

Creates a new file at the specified path. Returns `TRUE` if the file was created successfully.

**Parameters:**  
- `file_path: String` The path where the file should be created.

**Returns:**  
- `Bool`: `TRUE` if the file was created, `FALSE` if there was an error.

**Example Usage:**
```ap
success <- FILE_CREATE("/home/user/new_file.txt")
DISPLAY(success)
```

---

## FILE_READ

Reads the contents of a file as a string. Returns `NULL` if the file cannot be read.

**Parameters:**  
- `file_path: String` The path of the file to read.

**Returns:**  
- `String`: The contents of the file, `NULL` If the file cannot be read.

**Example Usage:**
```ap
contents <- FILE_READ("/home/user/file.txt")

IF (contents == NULL) {
    DISPLAY("Failed to read file.")
} ELSE {
    DISPLAY(contents)
}
```

---

## FILE_APPEND

Appends the given content to the end of a file. Returns `TRUE` if successful.

**Parameters:**  
- `file_path: String` The path of the file.
- `contents: Value` The content to append.

**Returns:**  
- `Bool`: `TRUE` if the content was successfully appended, `FALSE` otherwise.

**Example Usage:**
```ap
success <- FILE_APPEND("/home/user/file.txt", "New content to add.")
DISPLAY(success)
```

---

## FILE_OVERWRITE

Overwrites the contents of a file with the provided content. Returns `TRUE` if successful.

**Parameters:**  
- `file_path: String` The path of the file.
- `contents: Value` The content to overwrite the file with.

**Returns:**  
- `Bool`: `TRUE` if the content was successfully written, `FALSE` otherwise.

**Example Usage:**
```ap
success <- FILE_OVERWRITE("/home/user/file.txt", "Overwritten content.")
DISPLAY(success)
```

---

## DIRECTORY_READ

Reads the contents of a directory and returns a list of file paths.

**Parameters:**  
- `path: String` The path of the directory to read.

**Returns:**  
- `List` A list of file paths in the directory.

**Example Usage:**
```ap
files <- DIRECTORY_READ("/home/user/")

FOR EACH file IN files {
    DISPLAY(file)
}
```

---

## DIRECTORY_CREATE

Creates a new, empty directory at the provided path. Does not create parent directories. 

Note: To create a directory and all its missing parents at the same time, instead use `DIRECTORY_CREATE_ALL`.
**Parameters:**
- `path: String` The path of the directory to be created.

**Returns:**
- `Bool` Is `TRUE` if creation was successfull `FALSE` otherwise.


**Errors When:**
- User lacks permissions to create directory at `path`.
- A parent of the given path doesn't exist. 
- `path` already exists.

**Example Usage:**
```ap
success <- DIRECTORY_CREATE("some/dir")
DISPLAY(success)
```


--- 

## DIRECTORY_CREATE_ALL

Creates a new, empty directory at the provided path. Will create parent directories.


**Parameters:**
- `path: String` The path of the directory to be created.

**Returns:**
- `Bool` Is `TRUE` if creation was successfull `FALSE` otherwise.

**Errors When:**
- If any directory in the path specified by path does not already exist and it could not be created otherwise.

**Example Usage:**
```ap
success <- DIRECTORY_CREATE_ALL("some/dir")
DISPLAY(success)
```

---

## DIRECTORY_REMOVE_ALL
*Be very cautious when using this function!* 

Removes a directory at this path, after removing *all* its contents.


**Parameters:**
- `path: String` The path of the directory to be removed.

**Returns:**
- `Bool` Is `TRUE` if creation was successfull `FALSE` otherwise.

**Example Usage:**
```ap
success <- DIRECTORY_REMOVE_ALL("some/dir")
DISPLAY(success)
```


## DIRECTORY_REMOVE
Removes an empty directory.

**Parameters:**
- `path: String` The path of the directory to be removed.

**Returns:**
- `Bool` Is `TRUE` if creation was successfull `FALSE` otherwise.

**Errors When:**
- `path` doesn't exist.
- `path` isn't a directory.
- The user lacks permissions to remove the directory at the provided `path`.
- The directory isn't empty.

**Example Usage:**
```ap
success <- DIRECTORY_REMOVE("some/dir")
DISPLAY(success)
```

