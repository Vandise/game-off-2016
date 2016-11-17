# MiS(cript)
This document contains a full reference set to the MiScript Language and HackableMi environment. It also serves as a reference to implemented features.

## Reference
- Datatypes
- Math
- Conditions
- Variables
- Control Structures
- Functions

## Datatypes
There are only two datatypes implemented in MiScript: Strings and Integers. Arrays may be implemented in the coming future.

### Strings
Strings are ascii characters enclosed in double quotes (""). Strings are generally used to define a character action, or for debugging information.
```
"This is a string in MiScript!"
``` 

### Integers
Integers are generally utilized in MiScript for incrementing counters and having "Mi" navigate the grid system. There are no decimals within MiScript and any Math operations that result in decimals will be rounded up. Integers can be both signed, and unsigned (positive/negative), but may only be directly declared as positive.
```
25
```

## Math
MiScript implements all major mathematical operations (not functions). These operations include:
[x] Addition
```
10 + 10
=> 20
```
[x] Subtraction
```
5 - 5
=> 0
```
[x] Multiplication
```
(0-1) * 7
=> -7
```
[x] Division
```
(10 / 5) + 3
=> 5
```
[x] Powers
```
5^2
=> 25
```
[x] Modulus
```
10 % 2
=> 0
```

## Conditions
All conditions return a boolean datatype true and false (0 and 1).

[x] Greater Than
```
5 > 3
=> true
```

[x] Less Than
```
5 < 3
=> false
```

[x] Greater Than or Equal
```
3 >= 3
=> true
```

[x] Less Than or Equal
```
0 <= 10
=> true
```

[x] Equal
```
5 = 5
=> true
```

[x] Not Equal
```
10 != 10
=> false
```

## Variables
Variables are declared by the colon-equal (:=) operator. They may contain any valid datatype in MiScript. They are mutable and dynamic. 
```
x := 5
y := "hello world"
y := x
y := x + 10
```

## Control Structures
MiScript offers basic control structures to conditionally control "Mi" when navigating the grid.

[x] If Conditional
```
x := 5
if 10 > 3
  x := 10
end

if x = 10
  x := 3
end
```

[ ] Loop Until
Not Yet Implemented

[ ] For Loop

Other control structures are under consideration.

## Functions
The following functions are implemented in MiScript. Currently, the user cannot define their own functions and must rely on the control structures and provided functions in MiScript.

### Calling functions
Functions are called by an identifier with parenthesis surrounding a comma-delimited list of arguments. The following function, move, is a core function that move the Mi player.

```
// move the Mi player 10 grid spaces to the left
move("left", 10)
```

### Function Reference
The following references document the function like so: 
```
Function Name [parameter<datatype>, parameter<datatype> ... (optional<datatype default value> )] -> returns <value>
```
Note that `...` means an unlimited amount of parameters.

#### log [...<any>] -> null
Logs a message in the console section of the UI
```
log("The value of x is:", x)
=> null
```

#### move [direction<string> , (distance<int 1>)]
Moves the Mi sprite in the specified direction on the grid.
```
move("left", 3)
```
