// Javascript Operators

// JavaScript operators are special symbols that tell JavaScript to perform an action on values

// Arithmetic Operators

let a = 10;
let b = 3;

console.log(a + b)   // 13  (Addition)
console.log(a - b)    // 7   (Subtraction)
console.log(a * b)    // 30  (Multiplication)
console.log(a / b)     // 3.333... (Division)
console.log(a % b)     // 1   (Modulus – remainder)
console.log(a ** b)   // 1000 (Exponentiation)

/*--------------------------------------------------------------------------------------------------------------*/
// Assignment Operators

let x = 5;

x += 3;  // x = x + 3 → 8
x -= 2;  // 6
x *= 4;  // 24
x /= 2;  // 12
x %= 5;  // 2

/*--------------------------------------------------------------------------------------------------------------*/
// Comparison Operators
/* 

  ==    : This operator compares the values
  ===   : This operator compares both the values and the types
  >     : greater than operator 
  <     : lesser than operator
  >=    : greater than or equal to operator 
  <=    : lesser than or equal to operator 

*/

let val1 = 5 ; 
let val2 = "5" ; 
if(val1 == val2)
{
  console.log("compare only value"); 
  console.log(`${val1} : ${typeof(val1)} is equal to ${val2} : ${typeof(val2)}`); 
}
else
{
  console.log("compare only value"); 
  console.log(`${val1} : ${typeof(val1)} is not equal to ${val2} : ${typeof(val2)}`); 
}

if(val1 === val2)
{
  console.log("compare value and type"); 
  console.log(`${val1} : ${typeof(val1)} is equal ${val2} : ${typeof(val2)}`); 
}
else
{
  console.log("compare value and type"); 
  console.log(`${val1} : ${typeof(val1)} is are equal ${val2} : ${typeof(val2)}`); 
}


let myval1 = 100; 
let myval2 = 50 ; 

if(myval1 > myval2)
{
  console.log(`${myval1} is greater than ${myval2}`); 
}
else
{
  console.log(`${myval1} is greater than ${myval2}`); 
}

/*--------------------------------------------------------------------------------------------------------------*/
// Logical Operators

if(true && false)  // false  (AND)
{
  console.log("hello");
}
else
{
  console.log("both condition needs to be true");
}

if(true || false) // true  (OR)
{
  console.log("hello");
  console.log("anyone condition with true is enough");
}  

if(!true)          // false (NOT)
{
  console.log("hello");
}
else
{
  console.log("opposite of the condition is needed to be true");
}

/*--------------------------------------------------------------------------------------------------------------*/
// Unary Operators
// Operate on a single value.

let my_variable1 = 5;
let my_variable2 = 15;

console.log(`my_variable1 = ${my_variable1++}`);    // 6 (increment)
console.log(`after post increment my_variable1 = ${my_variable1}`);    
console.log(`my_variable1 = ${my_variable1--}`);    // 4 (decrement)
console.log(`after post decrement my_variable1 = ${my_variable1}`);    



console.log(`my_variable2 = ${++my_variable2}`);    // 6 (increment)
console.log(`after pre increment my_variable2 = ${my_variable2}`); 
console.log(`my_variable2 = ${--my_variable2}`);    // 4 (decrement)
console.log(`after pre increment my_variable2 = ${my_variable2}`); 

/*--------------------------------------------------------------------------------------------------------------*/
// Ternary (Conditional) Operator
// Short form of if-else condition 
let age  = 20 ; 
let result = (age >= 18) ? "Adult" : "Minor";
console.log(`result = ${result}`); 

/*--------------------------------------------------------------------------------------------------------------*/
// Bitwise Operators 
// These bitwise operators are used in low-level programming.

console.log(`7&4 = ${7&4}`); // 4 
console.log(`5|8 = ${5|8}`); // 13
console.log(`2^9 = ${2^9}`); // 11 
console.log(`~3 = ${~3}`); // -4 
