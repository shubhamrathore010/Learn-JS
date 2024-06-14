"use strict" // treat all js code as newer version

let name = "Shubham"
let age = 21

// data primitive Type

// String = "Shubham"
// Number = 23332
// Boolean =  true/false
// undefined => String = name;
// null => standalone value 
// Symbol => unique
// bigInt => Long number



// Reference {Non Primitive}

// Array
// Object
// Functoin
// null is object




// console.log(typeof "Shubham");
// console.log(typeof age);
// console.log(typeof null) // object
// console.log(typeof undefined) // undefined

// Symbol my variable uniq from other


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


const binNumber = 123232343n  //  BingInt Number representasion

const heros = ["Shaktiman", "naagraj", "doga"];  // Array

let myObj = {
    name: "Shubham",
    age: 22,
}
const myFunction = function() {
    console.log("Hello wold");
}



console.log(typeof anotherId);
//  console.log(typeof myFunction);  // => function
// console.log(typeof myObj);
// console.log(typeof id);  => Symbol
// console.log(typeof heros); // => Object


