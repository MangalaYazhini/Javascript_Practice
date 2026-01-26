/* 
  Object : A collection of related properties and/or methods .
  object = { key:value, 
             function()}
*/


const book1 = {
  name : "Computer Networks",
  author : "Behrouz A. Forouzan", 
  publishedYear : 2015,
  isAvailable : true,
  dueDays : 15, 

  showBookDetails()
  {
    return `📘 ${this.name} | ${this.author} | ${this.publishedYear}`;
  },
  returnBook: function(keptDays)
  {
    if(this.dueDays < keptDays)
     return "You must pay fine"; 
    else
      return "You have returned within the due date"; 
  }
}; 


const book2 = {
  name : "Digital Logic",
  author : "M. Morris Mano", 
  publishedYear : 2007,
  isAvailable : true,
  dueDays : 15,

  showBookDetails()
  {
    return `📘 ${this.name} | ${this.author} | ${this.publishedYear}`;
  },

  returnBook: function(keptDays)
  {
    if(this.dueDays < keptDays)
     return "You must pay fine"; 
    else
      return "You have returned within the due date"; 
  }

}; 


 
console.log(book1.showBookDetails()); 
console.log(book1.returnBook(50));

console.log(book2.showBookDetails()); 
console.log(book2.returnBook(20)); 



/* this keyword : The this keyword is used to reference the object */
/* class.attribute = this.attribute */

// NOTE : 
// Arrow functions DO NOT have their own `this`.
// They inherit `this` from the surrounding scope.


/*
    Normal functions get this at call time.
    Arrow functions lock this at creation time.
    Arrow functions don’t create their own this and this is taken from the outer scope.
*/

const car1 = {
  name : "Maruti Suzuki", 
  model : "Swift", 
  price : 600000, 
  fuel: "Petrol",

  carInfo() {
    console.log(`Car : ${this.name} , Model : ${this.model} , Price : ${this.price} , fuel : ${this.fuel}`);
  }
}

car1.carInfo(); // this is equal to car1 


// Constructor is a special method for defining attributes and methods of an object. 




function Computer(name, model, ram, storage, os)
{
  this.name = name ;
  this.model = model ; 
  this.ram = ram ; 
  this.storage = storage ; 
  this.os = os ; 

  this.computerConfigurations = function () {
    console.log(`Computer : ${this.name} , Model : ${this.model} , RAM : ${this.ram} , Storage : ${this.storage} , OS : ${this.os}`); 
  }

}

const computer1 = new Computer("Dell", "Inspiron" , 16, 512, "Windows");
const computer2 = new Computer("Apple", "Macbook Air" , 16, 256, "MacOS");
computer1.computerConfigurations();
computer2.computerConfigurations();


/*
    class : It is a feature provided by ES6 for more structured way of operating with objects 
            compared with traditional constructor functions.
*/

class Product {
  constructor(name, price)
  {
    this.name = name ; 
    this.price = price ; 
  }

  displayProduct()
  {
    console.log(`Product : ${this.name}`);
    console.log(`Price : ${this.price}`);
  }
}



const product1 = new Product("Paint Box" , 250); 
const product2 = new Product("Charger" , 500);

product1.displayProduct();


/* Javascript Prototype */
/* 
  A prototype is an object that other objects are linked to, 
  so they can reuse properties and methods without copying them. 

  In JavaScript, Objects are not instances of a class.
  Objects are linked to other objects.
*/

/*

Prototype Chain 
mobile1
│
│  (has properties: name, model, price)
│
└── [[Prototype]]  →  Mobile.prototype
                        │
                        │  (has method: mobileConfigurations)
                        │
                        └── [[Prototype]]  →  Object.prototype
                                                │
                                                │  (toString, hasOwnProperty, etc.)
                                                │
                                                └── [[Prototype]]  →  null

*/

// Constructor Function
function Mobile(name, model, price) 
{
  // Properties created for each object
  this.name = name;
  this.model = model;
  this.price = price ; 
}

// Method added to the prototype (shared by all objects)
Mobile.prototype.mobileConfigurations = function () 
{
  console.log(
    `Mobile: ${this.name}, Model: ${this.model}, Price: ${this.price}`
  );
};


// Object Creation
const mobile1 = new Mobile("Samsung", "Galaxy", 35000);
const mobile2 = new Mobile("Apple", "iPhone", 60000);

// Call prototype methods
mobile1.mobileConfigurations();
mobile2.mobileConfigurations();


// Proof for the methods are being shared between the objects
console.log( mobile1.mobileConfigurations === mobile2.mobileConfigurations ); 

// Prototype chain inspection 
console.log(Object.getPrototypeOf(mobile1) === Mobile.prototype); // true
console.log(Object.getPrototypeOf(Mobile.prototype) === Object.prototype); // true
