// Variable in Javascript
// A variable is a container that stores the data.

/* 
  JAVASCRIPT VARAIABLES ARE DYNAMIC.
  In JavaScript, variables are not locked to a single data type.
  JavaScript variables can be declared in four ways:

  Modern JavaScript
  1. Using let
  2. Using const
  
  Older JavaScript
  1. Using var (Not Recommended)
  2. Automatically (Not Recommended)

*/

/*
  JavaScript runs code in two phases:
  1. Creation phase: JavaScript prepares variables
  2. Execution phase: JavaScript runs code line by line
  
  Temporal Dead Zone: Time where let/const exist but cannot be used

*/

/* JAVASCRIPT IS DYNAMICALLY TYPED LANGUAGE*/
let data = 10;        // data is a number
data = "hello";      // data is a string
data = true;         // data is a boolean

/* There is no declaration of a variable associated with a specific type.*/

/*------------------------------------------- let Variable -------------------------------------*/
// let declares a block scoped variable 

let my_let_count = 10 ; 
my_let_count++; 

console.log(`let variable`);
console.log(`count = ${my_let_count}`);

// let variable if block scoped 

if(true)
{
  // my block
  let my_let_var = "hello"; 
  console.log(`inside my block let variable, my_let_var = ${my_let_var}`);
}

// myvar is not defined outside the my block 

// Hoisting behaviour of let variable

/*
  This cannot work as the let variable exist and cannot be used in this statement before being initialized
  
  console.log(`hoisted variable my_value = ${my_value}`); 
  let my_value = 55.78; 
*/



/*------------------------------------------- const Variable -------------------------------------*/

const PI = 3.14; 
console.log(`PI = ${PI}`);


// PI = 3.14159 ;  changing the const value leads to an error


// The variable book is constant, but the object’s properties are mutable
const book = { name: "Operating System" ,cost : 650.00};
book.name = "Computer Networks"; 
book.price = 500.00 ; 

console.log(`${book.name}`);
console.log(`${book.price}`);

// The variable numbers is constant, but the array is mutable

const numbers = [1, 2, 3];
numbers.push(4);

console.log(`${numbers}`);

/*------------------------------------------- var Variable -------------------------------------*/

// var declares a variable that is function-scoped
// var is NOT block-scoped variable

if (true) {
  var my_var_variable = 20;
}
console.log(my_var_variable); // The scope of myvariable is beyond the block which is not recommended


// var supports hoisting

console.log(`${my_var_string}`);

var my_var_string = "Hello World !"; 

// Redeclaration allowed in var 

var my_first_var = "javascript"; 
var my_first_var = 100 ; 
console.log(`${my_first_var}`);

/*------------------------------------------- Automatically Declared Variables -------------------------------------*/

my_automatic_value = 100 ;  

/* 

  Drawbacks of Automatic variables
  1. Creates global variables
  2. Pollutes global scope
  3. Causes name conflicts
  4. Hard to debug
  5. Breaks strict mode

*/ 
