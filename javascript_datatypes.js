/* 
    Javascript Datatypes

    Primitive 
      1. Number
      2. String
      3. Boolean
      4. Undefined
      5. Null
      6. Symbol
      7. BigInt

    Non-Primitive
      1. Object 


*/

// Number Datatype

let value_1 = 100 ; 
let value_2 = 50.55 ; 

// String Datatype

let string_val = "Hello Javascript !";

// Boolean Datatype

let boolean_value_1 = true; 
let boolean_value_2 = false; 

// Undefined Datatype

console.log(`var variable : ${var_value}`) ;  // variable is declared but value is still not assigned
var var_value = 10 ; 

// Null Datatype

let null_value = null; // This is used to represent intentional empty value

// BigInt Datatype
let big_num = 12345678901234567890n;

// Object 

// Class in Javascript

class Book 
{
  constructor(title, author)
  {
    this.title = title; 
    this.author = author;  
  }

  printBook()
  {
    console.log(`Title = ${this.title}`);
    console.log(`Author = ${this.author}`);
  }
}


let computer_network_book = new Book("Computer Network", "Andrew"); 
let operation_system_book = new Book("Operating System", "Galvin"); 


computer_network_book.printBook();

// Common Object Types
// array 
let array_numbers = [1, 2, 3, 4];

// function
function greet() {
  console.log("Hello");
}

// Date 
let today = new Date();