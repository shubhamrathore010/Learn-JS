//  names func

// function sum(a,b) {
//     return a + b;
// }

// console.log(sum(23,4));

// ---------------------------------------------

//  anonymouse fun 

// console.log(
//   function(a,b) {
//     return a+ b;
// }(4,5));

// ----------------------------------------------


// fun exepression

// const addd = function(a,b) {
//     return a+ b;
// }

// console.log(addd(5,41));


// const summ = (A,B) => A +B;


// console.log(summ(23,5));

// ----------------------------------------------

// callback fun  -> passed as an argument in another function

// function add(A,b) {
//     return A+b;
// }
// let x = 23, y =45;
// let result = add(x, y)

// console.log(result);

// function display(A, b , operation) {
//     var result = operation(A ,b)
    
//     console.log(result);
    
// }
 
// display(12,9,add)




  
//  Uses of callback    -------->


//  *************

// Iteration =>

    // const numbers = [12,3,4,5]

    // function logNumber(number) {
    // console.log(number);
    // }

    // numbers.forEach(logNumber)

//  ___________________________

    // EventHandling  => 
    
        // <button id="myButton">Click Me</button>

        // const button = document.getElementById('myButton;')


        // button.addEventListener('click', function()) {
        //     alert('Button Clicked')
        // }

//  __________________________

        // Higher-Oder-Function  =>

    //         function hof(func) {
    //             func();
    //         }

    //         hof(sayHello);

    //         function sayHello() {
    //             console.log("Hello!");                
    //         }

    //    function  func() {
    //     console.log("Im under the water!!");
        
    //    }

// ___________________________________

    //    asynchronous operation/function   =>

//         console.log('Before setTimeouot');

//         setTimeout(() => {
// console.log("Inside the setTimeout");

//    },2000)

//    console.log('After setTimeout');
   

// __________________________________

// Promises =>

        
// const promises = new Promise((resolve, reject) => {

// setTimeout(() => {
//     const randomNum = Math.floor(Math.random() * 10);

//     if(randomNum < 5) {
//         resolve(`Succes ! Random number: ${randomNum}`);
//     }

//      else {
//         reject(`Error! Number ${randomNum}`);
//      }
// },1000)

// })


//  _________________________


// promises
//     .then((result) => {
//         console.log(result);
//     })

//     .catch((error) =>{
//         console.error(error);
        
//     })

// *****************

// class  => 


// let carName =  "Tata"

// class   Car {
//     static numOfWheels = 4;

//     constructor(model, year) {
//         this.model = model;
//         this.year = year;
//     }


// method ->

// start() {
//     console.log(`${this.model} started`);
    
// }
// }
// //  create an instance of the car class
// const myCar = new Car("Tata", 2023)

// console.log(myCar);
// console.log(Car.numOfWheels)

// myCar.start()

//  ______________________

// this  =>  this refers the current context / scoe of code whice are executed

// ____________________________


// **************


// hoisting  => where function ans variable declarations are moved ot the top of their 
// respective scopes during the complation pashe