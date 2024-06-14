"use strict" // treat all js code as newer version

// let name = "Shubham"
// let age = 21

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

// console.log(id === anotherId);


const binNumber = 123232343n  //  BingInt Number representasion

const heros = ["Shaktiman", "naagraj", "doga"];  // Array

let myObj = {
    name: "Shubham",
    age: 22,
}
const myFunction = function() {
    console.log("Hello wold");
}



// console.log(typeof anotherId);
//  console.log(typeof myFunction);  // => function
// console.log(typeof myObj);
// console.log(typeof id);  => Symbol
// console.log(typeof heros); // => Object

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)
// stack providee copy of variable data

// Heap provide actualDAta  Data update with actual data

let firstname = "shubham"

let lastname = firstname
lastname = "Rathore"

// console.log(firstname);
// console.log(lastname);

let userONe = {
    email: "userONe@gmail.com",
    upi: "user@ybl"
}
let userTwo = userONe

userTwo.email = "userTwo@google.com"

// console.log(userONe);
// console.log(userONe.email);
// console.log(userTwo.email);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const name = "Shubham"
const repoCount = 50

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Shubham-r-rathore')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 7)

// console.log(newString);


const anotherString = gameName.slice(3, 5)
// console.log(anotherString);


const newStringOne = "    Shubhan    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://shubham.com/shubham%20rathore"

// console.log(url.replace('%20','-'));
// console.log(url.includes('sunder'));

// console.log(gameName.split('-'));


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


