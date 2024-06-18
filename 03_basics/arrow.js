//  const user = {
//     username : "Shubham",
//     price: 999,

//     welcomeMsg: function(){
//         console.log(`${this.username}, Welcome to this website`);
//         console.log(this);
//     }
//  }

//  user.welcomeMsg()
//  user.username = "sam"
//  user.welcomeMsg()
//  console.log(this);

// function chai() {
// let name = "Shubham"
// console.log(this.name);
// }
// chai()

// const chai = function () {
//     let name = "Shubham"
//     console.log(this.name);
// }

// chai()

// const chai = () =>{
//     let name = "Shubham"
//     console.log(this.name);
// }
// chai()

// +++++ Arrow function =====

// const  addtwo = (num1, num2) => {
    
//     return num1 + num2
// }

// console.log(addtwo(2,5))

// implicite func -----

// const addtwo = (num1, num2) => num1 +num2

// const addtwo = (num1, num2) => (num1 + num2)  
//  console.log(addtwo(2,1));


// const addtwo = (num1, num2) => ({name: "shubham"})  

// console.log(addtwo());

// (function chai(){
// named IIFE
//     console.log("DB Connected");
// })();

// UNNAMED
//  ( (name) => {
//     console.log(`DB CONNECTED ${name}`);
//  })("Chai");


// (function chai (name) {
//     console.log(`named iife  ${name}`);
// })("Tea");

// ((name) =>{
//     console.log(`unnamed iife ${name}`);
// })("Chai");


