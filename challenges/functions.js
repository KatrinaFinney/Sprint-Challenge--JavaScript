// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/


function consume(x, y, cb) {
  return cb(x, y);

}


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add(x, y) {
 

  return (x+y);

     }


function multiply(x,y) {
  
  return (x * y);
}

 function greeting(firstName, lastName,) {
  
  return (`Hello ${firstName} ${lastName}, nice to meet you! `)
}



console.log(consume(2, 2, add)); 
console.log(consume(10, 16, multiply)); 
console.log(consume("Mary", "Poppins", greeting)); 

// ==== Closures ==== 

// Explain in your own words why nestedfunction can access the variable internal.



// Explanation: 

//nestedFunction is within the lexical scope of myFunction, so it can access all of it's variables.

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();
