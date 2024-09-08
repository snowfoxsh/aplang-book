# Math Module Documentation

```ap
IMPORT MOD "MATH"
```

The Math module provides a variety of mathematical functions, including trigonometric, hyperbolic, exponential, logarithmic, rounding, and clamping functions. It also includes important constants like PI, E, and TAU.

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

Calculates the sine of an angle in radians.

**Parameters:**  
- `angle: Number` The angle in radians.

**Returns:**  
- `Number`: The sin of the given angle

**Example Usage:**
```ap
result <- SIN(1.5708) // Approx value of PI/2
DISPLAY(result)
```

---

## COS

Calculates the cosine of an angle in radians.

**Parameters:**  
- `angle: Number` The angle in radians.

**Returns:**  
- `Number`: The cosine of the given angle.

**Example Usage:**
```ap
result <- COS(0)
DISPLAY(result)
```

---

## TAN
 
Calculates the tangent of an angle in radians.

**Parameters:**  
- `angle: Number` The angle in radians.

**Returns:**  
- `Number`: The tangent of the given angle.

**Example Usage:**
```ap
result <- TAN(0.7854) // Approx value of PI/4
DISPLAY(result)
```

---

## ASIN

Calculates the arc sine of a value.

**Parameters:**  
- `value: Number` The input value, must be between -1 and 1.

**Returns:**  
- `Number`: The arc sine in radians of the given angle.

**Example Usage:**
```ap
result <- ASIN(0.5)
DISPLAY(result)
```

---

## ACOS

Calculates the arc cosine of a value.

**Parameters:**  
- `value: Number` The input value, must be between -1 and 1.

**Returns:**  
- `Number`: The arc cosine in radians of the given angle.

**Example Usage:**
```ap
result <- ACOS(0.5)
DISPLAY(result)
```

---

## ATAN

Calculates the arc tangent of a value.

**Parameters:**  
- `value: Number` The input value.

**Returns:**  
- `Number`: The arc tangent in radians of the given angle.

**Example Usage:**
```ap
result <- ATAN(1)
DISPLAY(result)
```

---

## ATAN2

Calculates the arc tangent of `y/x`, using the signs of both values to determine the correct quadrant.

**Parameters:**  
- `y: Number` The y-coordinate.
- `x: Number` The x-coordinate.

**Returns:**  
- `Number`: The arc tangent of `y/x`.

**Example Usage:**
```ap
result <- ATAN2(1, 1)
DISPLAY(result)
```

---

## SINH

Calculates the hyperbolic sine of a value.

**Parameters:**  
- `value: Number` The input value.

**Returns:**  
- `Number`: The hyperbolic sine of the given value.

**Example Usage:**
```ap
result <- SINH(1)
DISPLAY(result)
```

---

## COSH

Calculates the hyperbolic cosine of a value.

**Parameters:**  
- `value: Number` The input value.

**Returns:**  
- `Number`: The hyperbolic cosine of the given value.

**Example Usage:**
```ap
result <- COSH(1)
DISPLAY(result)
```

---

## TANH

Calculates the hyperbolic tangent of a value.

**Parameters:**  
- `value: Number` The input value.

**Returns:**  
- `Number`: The hyperbolic tangent of the given value.

**Example Usage:**
```ap
result <- TANH(1)
DISPLAY(result)
```

---

## ASINH

Calculates the inverse hyperbolic sine of a value.

**Parameters:**  
- `value: Number` The input value.

**Returns:**  
- `Number`: The inverse hyperbolic sine of the given value.

**Example Usage:**
```ap
result <- ASINH(1)
DISPLAY(result)
```

---

## ACOSH

Calculates the inverse hyperbolic cosine of a value.

**Parameters:**  
- `value: Number` The input value, must be greater than or equal to 1.

**Returns:**  
- `Number`: The inverse hyperbolic cosine of the given value.

**Example Usage:**
```ap
result <- ACOSH(1)
DISPLAY(result)
```

---

## ATANH
 
Calculates the inverse hyperbolic tangent of a value.

**Parameters:**  
- `value: Number` The input value, must be between -1 and 1.

**Returns:**  
- `Number`: The inverse hyperbolic tangent of the given value.

**Example Usage:**
```ap
result <- ATANH(0.5)
DISPLAY(result)
```

---

## EXP

Calculates the exponential of a value (e^value).

**Parameters:**  
- `value: Number` The input value.

**Returns:**  
- `Number`: The result of `e^value`.

**Example Usage:**
```ap
result <- EXP(1)
DISPLAY(result)
```

---

## LOG

Calculates the logarithm of a value with a specified base.

**Parameters:**  
- `value: Number` The input value.
- `base: Number` The base of the logarithm.

**Returns:**  
- `Number`: The logarithm of `value` to the base `base`.

**Example Usage:**
```ap
result <- LOG(8, 2)
DISPLAY(result)
```

---

## LOG10

Calculates the base-10 logarithm of a value.

**Parameters:**  
- `value: Number`: The input value.

**Returns:**  
- `Number` The base-10 logarithm of the given value.

**Example Usage:**
```ap
result <- LOG10(100)
DISPLAY(result)
```

---

## LOG2

Calculates the base-2 logarithm of a value.

**Parameters:**  
- `value: Number` The input value.

**Returns:**  
- `Number`: The base-2 logarithm of the given value.

**Example Usage:**
```ap
result <- LOG2(8)
DISPLAY(result)
```

---

## ROUND

Rounds a number to the nearest whole number.

**Parameters:**  
- `value: Number` The input value.

**Returns:**  
- `Number`: The rounded value.

**Example Usage:**
```ap
result <- ROUND(2.7)
DISPLAY(result)
```

---

## FLOOR

Rounds a number down to the nearest whole number.

**Parameters:**  
- `value: Number` The input value.

**Returns:**  
- `Number`: The rounded-down value.

**Example Usage:**
```ap
result <- FLOOR(2.7)
DISPLAY(result) // 2
```

---

## CEIL

Rounds a number up to the nearest whole number.

**Parameters:**  
- `value: Number` The input value.

**Returns:**  
- `Number`: The rounded-up value.

**Example Usage:**
```ap
result <- CEIL(2.1)
DISPLAY(result) // 3
```

---

## INT

Truncates the decimal part of a number.

**Parameters:**  
- `value: Number` The input value.

**Returns:**  
- `Number`: The truncated value.

**Example Usage:**
```ap
result <- INT(2.7)
DISPLAY(result) // 2
```

---

## CLAMP

Clamps a number between a minimum and maximum value.

**Parameters:**  
- `value: Number` The input value.
- `min: Number` The minimum value.
- `max: Number` The maximum value.

**Returns:**  
- `Number`: The clamped value.

**Example Usage:**
```ap
result <- CLAMP(15, 1, 10)
DISPLAY(result) // 10
```

---

## PI

Returns the value of PI.

**Returns:**  
- `Number`: The value of PI (3.14159...).

**Example Usage:**
```ap
pi_value <- PI()
DISPLAY(pi_value)
```

---

## E

Returns the value of Euler's number (e).

**Returns:**  
- `Number`: The value of Euler's number (2.71828...).

**Example Usage:**
```ap
e_value <- E()
DISPLAY(e_value)
```

---

## TAU

Returns the value of TAU (2 * PI).

**Returns:**  
- `Number`: The value of TAU (6.28318...).

**Example Usage:**
```ap
tau_value <- TAU()
DISPLAY(tau_value)
```
