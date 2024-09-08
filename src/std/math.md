# Math Module Documentation

The Math module provides a variety of mathematical functions, including trigonometric, hyperbolic, exponential, logarithmic, rounding, and clamping functions. It also includes important constants like PI, E, and TAU.

### Import Example
```ap
IMPORT MOD "MATH"
```

## Table of Contents

- [Math Module Documentation](#math-module-documentation)
    - [Import Example](#import-example)
  - [Table of Contents](#table-of-contents)
- [Functions](#functions)
  - [SIN](#sin)
  - [COS](#cos)
  - [TAN](#tan)
  - [ASIN](#asin)
  - [ACOS](#acos)
  - [ATAN](#atan)
  - [ATAN2](#atan2)
  - [SINH](#sinh)
  - [COSH](#cosh)
  - [TANH](#tanh)
  - [ASINH](#asinh)
  - [ACOSH](#acosh)
  - [ATANH](#atanh)
  - [EXP](#exp)
  - [LOG](#log)
  - [LOG10](#log10)
  - [LOG2](#log2)
  - [ROUND](#round)
  - [FLOOR](#floor)
  - [CEIL](#ceil)
  - [INT](#int)
  - [CLAMP](#clamp)
  - [PI](#pi)
  - [E](#e)
  - [TAU](#tau)

---

# Functions

---


## SIN

**Description:**  
Calculates the sine of an angle in radians.

**Parameters:**  
- `angle` (f64): The angle in radians.

**Returns:**  
- `f64`: The sine of the angle.

**Example Usage:**
```ap
result <- SIN(1.5708)  # Approximate value of PI/2
DISPLAY(result)
```

---

## COS

**Description:**  
Calculates the cosine of an angle in radians.

**Parameters:**  
- `angle` (f64): The angle in radians.

**Returns:**  
- `f64`: The cosine of the angle.

**Example Usage:**
```ap
result <- COS(0)  # 0 radians
DISPLAY(result)
```

---

## TAN

**Description:**  
Calculates the tangent of an angle in radians.

**Parameters:**  
- `angle` (f64): The angle in radians.

**Returns:**  
- `f64`: The tangent of the angle.

**Example Usage:**
```ap
result <- TAN(0.7854)  # Approximate value of PI/4
DISPLAY(result)
```

---

## ASIN

**Description:**  
Calculates the arc sine of a value.

**Parameters:**  
- `value` (f64): The input value, must be between -1 and 1.

**Returns:**  
- `f64`: The arc sine in radians.

**Example Usage:**
```ap
result <- ASIN(0.5)
DISPLAY(result)
```

---

## ACOS

**Description:**  
Calculates the arc cosine of a value.

**Parameters:**  
- `value` (f64): The input value, must be between -1 and 1.

**Returns:**  
- `f64`: The arc cosine in radians.

**Example Usage:**
```ap
result <- ACOS(0.5)
DISPLAY(result)
```

---

## ATAN

**Description:**  
Calculates the arc tangent of a value.

**Parameters:**  
- `value` (f64): The input value.

**Returns:**  
- `f64`: The arc tangent in radians.

**Example Usage:**
```ap
result <- ATAN(1)
DISPLAY(result)
```

---

## ATAN2

**Description:**  
Calculates the arc tangent of `y/x`, using the signs of both values to determine the correct quadrant.

**Parameters:**  
- `y` (f64): The y-coordinate.
- `x` (f64): The x-coordinate.

**Returns:**  
- `f64`: The arc tangent of `y/x`.

**Example Usage:**
```ap
result <- ATAN2(1, 1)
DISPLAY(result)
```

---

## SINH

**Description:**  
Calculates the hyperbolic sine of a value.

**Parameters:**  
- `value` (f64): The input value.

**Returns:**  
- `f64`: The hyperbolic sine of the value.

**Example Usage:**
```ap
result <- SINH(1)
DISPLAY(result)
```

---

## COSH

**Description:**  
Calculates the hyperbolic cosine of a value.

**Parameters:**  
- `value` (f64): The input value.

**Returns:**  
- `f64`: The hyperbolic cosine of the value.

**Example Usage:**
```ap
result <- COSH(1)
DISPLAY(result)
```

---

## TANH

**Description:**  
Calculates the hyperbolic tangent of a value.

**Parameters:**  
- `value` (f64): The input value.

**Returns:**  
- `f64`: The hyperbolic tangent of the value.

**Example Usage:**
```ap
result <- TANH(1)
DISPLAY(result)
```

---

## ASINH

**Description:**  
Calculates the inverse hyperbolic sine of a value.

**Parameters:**  
- `value` (f64): The input value.

**Returns:**  
- `f64`: The inverse hyperbolic sine of the value.

**Example Usage:**
```ap
result <- ASINH(1)
DISPLAY(result)
```

---

## ACOSH

**Description:**  
Calculates the inverse hyperbolic cosine of a value.

**Parameters:**  
- `value` (f64): The input value, must be greater than or equal to 1.

**Returns:**  
- `f64`: The inverse hyperbolic cosine of the value.

**Example Usage:**
```ap
result <- ACOSH(1)
DISPLAY(result)
```

---

## ATANH

**Description:**  
Calculates the inverse hyperbolic tangent of a value.

**Parameters:**  
- `value` (f64): The input value, must be between -1 and 1.

**Returns:**  
- `f64`: The inverse hyperbolic tangent of the value.

**Example Usage:**
```ap
result <- ATANH(0.5)
DISPLAY(result)
```

---

## EXP

**Description:**  
Calculates the exponential of a value (e^value).

**Parameters:**  
- `value` (f64): The input value.

**Returns:**  
- `f64`: The result of `e^value`.

**Example Usage:**
```ap
result <- EXP(1)
DISPLAY(result)
```

---

## LOG

**Description:**  
Calculates the logarithm of a value with a specified base.

**Parameters:**  
- `value` (f64): The input value.
- `base` (f64): The base of the logarithm.

**Returns:**  
- `f64`: The logarithm of `value` to the base `base`.

**Example Usage:**
```ap
result <- LOG(8, 2)
DISPLAY(result)
```

---

## LOG10

**Description:**  
Calculates the base-10 logarithm of a value.

**Parameters:**  
- `value` (f64): The input value.

**Returns:**  
- `f64`: The base-10 logarithm of the value.

**Example Usage:**
```ap
result <- LOG10(100)
DISPLAY(result)
```

---

## LOG2

**Description:**  
Calculates the base-2 logarithm of a value.

**Parameters:**  
- `value` (f64): The input value.

**Returns:**  
- `f64`: The base-2 logarithm of the value.

**Example Usage:**
```ap
result <- LOG2(8)
DISPLAY(result)
```

---

## ROUND

**Description:**  
Rounds a number to the nearest whole number.

**Parameters:**  
- `value` (f64): The input value.

**Returns:**  
- `f64`: The rounded value.

**Example Usage:**
```ap
result <- ROUND(2.7)
DISPLAY(result)
```

---

## FLOOR

**Description:**  
Rounds a number down to the nearest whole number.

**Parameters:**  
- `value` (f64): The input value.

**Returns:**  
- `f64`: The rounded-down value.

**Example Usage:**
```ap
result <- FLOOR(2.7)
DISPLAY(result)
```

---

## CEIL

**Description:**  
Rounds a number up to the nearest whole number.

**Parameters:**  
- `value` (f64): The input value.

**Returns:**  
- `f64`: The rounded-up value.

**Example Usage:**
```ap
result <- CEIL(2.1)
DISPLAY(result)
```

---

## INT

**Description:**  
Truncates the decimal part of a number.

**Parameters:**  
- `value` (f64): The input value.

**Returns:**  
- `f64`: The truncated value.

**Example Usage:**
```ap
result <- INT(2.7)
DISPLAY(result)
```

---

## CLAMP

**Description:**  
Clamps a number between a minimum and maximum value.

**Parameters:**  
- `value` (f64): The input value.
- `min` (f64): The minimum value.
- `max` (f64): The maximum value.

**Returns:**  
- `f64`: The clamped value.

**Example Usage:**
```ap
result <- CLAMP(5, 1, 10)
DISPLAY(result)
```

---

## PI

**Description:**  
Returns the value

 of PI.

**Returns:**  
- `f64`: The value of PI (3.14159...).

**Example Usage:**
```ap
pi_value <- PI()
DISPLAY(pi_value)
```

---

## E

**Description:**  
Returns the value of Euler's number (e).

**Returns:**  
- `f64`: The value of Euler's number (2.71828...).

**Example Usage:**
```ap
e_value <- E()
DISPLAY(e_value)
```

---

## TAU

**Description:**  
Returns the value of TAU (2 * PI).

**Returns:**  
- `f64`: The value of TAU (6.28318...).

**Example Usage:**
```ap
tau_value <- TAU()
DISPLAY(tau_value)
```
