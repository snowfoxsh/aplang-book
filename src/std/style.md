# Style Module Documentation

```ap
IMPORT MOD "STYLE"
```

The style module includes utilities for coloring and adding styles to displayed text. 

## Table of Contents



---

# Functions

--- 


## CLEAR_STYLE

Clears all applied styles

**Parameters:** None.

**Returns:** None.


**Example Usage:**
```ap
STYLE("blue")
DISPLAY("This text is blue")
CLEAR_STYLE()
DISPLAY("This text is no longer blue")
```

## STYLE

Applies a style

**Parameters:**
- `style: String` The style type to apply to the text

<center><strong>Default Colors</strong></center>
<br>

| Style/Color          | ANSI Code   | Description                               |
|----------------------|-------------|-------------------------------------------|
| clear                 | `\x1b[0m`   | Resets all styles and colors              |
| default_color         | `\x1b[39m`  | Resets the foreground color to default    |
| bg_default_color      | `\x1b[49m`  | Resets the background color to default    |

<br>
<center><strong>Foreground Colors</strong></center>
<br>

| Style/Color          | ANSI Code   | Description                               |
|----------------------|-------------|-------------------------------------------|
| black                 | `\x1b[30m`  | Sets the text color to black              |
| red                   | `\x1b[31m`  | Sets the text color to red                |
| green                 | `\x1b[32m`  | Sets the text color to green              |
| yellow                | `\x1b[33m`  | Sets the text color to yellow             |
| blue                  | `\x1b[34m`  | Sets the text color to blue               |
| magenta               | `\x1b[35m`  | Sets the text color to magenta            |
| cyan                  | `\x1b[36m`  | Sets the text color to cyan               |
| white                 | `\x1b[37m`  | Sets the text color to white              |
| bright_black          | `\x1b[90m`  | Sets the text color to bright black (gray)|
| bright_red            | `\x1b[91m`  | Sets the text color to bright red         |
| bright_green          | `\x1b[92m`  | Sets the text color to bright green       |
| bright_yellow         | `\x1b[93m`  | Sets the text color to bright yellow      |
| bright_blue           | `\x1b[94m`  | Sets the text color to bright blue        |
| bright_magenta        | `\x1b[95m`  | Sets the text color to bright magenta     |
| bright_cyan           | `\x1b[96m`  | Sets the text color to bright cyan        |
| bright_white          | `\x1b[97m`  | Sets the text color to bright white       |

<br>
<center><strong>Background Colors</strong></center>
<br>

| Style/Color          | ANSI Code   | Description                               |
|----------------------|-------------|-------------------------------------------|
| bg_black              | `\x1b[40m`  | Sets the background color to black        |
| bg_red                | `\x1b[41m`  | Sets the background color to red          |
| bg_green              | `\x1b[42m`  | Sets the background color to green        |
| bg_yellow             | `\x1b[43m`  | Sets the background color to yellow       |
| bg_blue               | `\x1b[44m`  | Sets the background color to blue         |
| bg_magenta            | `\x1b[45m`  | Sets the background color to magenta      |
| bg_cyan               | `\x1b[46m`  | Sets the background color to cyan         |
| bg_white              | `\x1b[47m`  | Sets the background color to white        |
| bg_bright_black       | `\x1b[100m` | Sets the background color to bright black (gray)|
| bg_bright_red         | `\x1b[101m` | Sets the background color to bright red   |
| bg_bright_green       | `\x1b[102m` | Sets the background color to bright green |
| bg_bright_yellow      | `\x1b[103m` | Sets the background color to bright yellow|
| bg_bright_blue        | `\x1b[104m` | Sets the background color to bright blue  |
| bg_bright_magenta     | `\x1b[105m` | Sets the background color to bright magenta|
| bg_bright_cyan        | `\x1b[106m` | Sets the background color to bright cyan  |
| bg_bright_white       | `\x1b[107m` | Sets the background color to bright white |

<br>
<center><strong>Text Styles</strong></center>
<br>

| Style/Color          | ANSI Code   | Description                               |
|----------------------|-------------|-------------------------------------------|
| bold                  | `\x1b[1m`   | Makes the text bold or bright             |
| faint                 | `\x1b[2m`   | Makes the text faint or dim               |
| underline             | `\x1b[4m`   | Underlines the text                       |
| blink                 | `\x1b[5m`   | Makes the text blink (less supported)     |


**Returns:**
- `Bool`: `TRUE` if the style was applied, `FALSE` if it was not

**Example Usage:**
```ap
STYLE("red")
DISPLAY("This text is red")
CLEAR_STYLE()
```

