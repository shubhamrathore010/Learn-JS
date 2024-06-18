// object literal

const mySym =  Symbol("Key1")  // define symbol  

const user = {
//     Name : "shubham",
//    "full name": "Shubham Rathore",
   [mySym]: "mykey1",   // Symbol act as a key
    // age: 18,
    // location: "indore",
    // email: "Suhbham@gmail.com",
    // isLoggedIn: false,
    // lastLoginDays: ["Monday", "Saturday"]
}
// user.email = "shubham@chatgpt.com"
// user.Name = "Shubham"
// // Object.freeze(user)
// user.location = "Bhopal"
// console.log(user);

// // console.log(user.email);
// // console.log(user["email"]);

// // console.log(user["isLoggedIn"]);
// // console.log(user["full name"]);
// console.log(user[mySym]);


// // user.greeting = function(){
// //     console.log(`Hello JS user, ${this.Name}`);
// // }

// // console.log(user.greeting());

// const  symkey = Symbol("")

//  const user = {
//     name: "Shubham",
//     [symkey]: "Key1"
//  }

//  console.log(user[symkey]);

// +++++++++++++++++++++++++++++++++++++++++++++++++++

// object singleton

// const tinderUser = new Object()  //singleton object

const tinderUser = {}

tinderUser.name = "Sammy"
tinderUser.id = "123abc"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// nasted object

// const regulerUser = {
//     email: "name@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "Shubham",
//             lastname: "Rathore"
//         }
//     }
// }
// console.log(regulerUser.fullname);
// console.log(regulerUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2: "b"}
const obj2 = {3:"a",4: "b"}

// const obj3 = {obj1, obj2}
const obj3 = Object.assign({}, obj1, obj2)  // traget/assing
// const obj3 = {...obj1, ...obj2}

// console.log(obj3, obj1);


// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(Object.hasOwnProperty("name"));

// const course = {
//     courename: "js in hindi",
//     price: "999",
//     couresir: "hitesh"
// }
// const {couresir: sir} = course   // => desstructor

// // console.log(sir);
// let data = course.constructor;
// console.log(data);


// const person1 = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
//   };
  
  // Create Source Object
//   const person2 = {FirstName: "Anne",LastName: "Smith"};
//   const person2 = {firstName: "Anne",lastName: "Smith"};
  // Assign Source to Target
//   console.log(Object.assign(person1, person2));

//  const Keys = Symbol("Chabi")

//  const Data = {
//     [Keys]: "Keys"
//  }
//  console.log(Data);


const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
  const man = Object.create(person1);
  man.firstName = "Peter";

// console.log(man);
 Object.defineProperties(person1, {
    language: {value: "en"},
    year: {value: "Hello"}
 });
 console.log(person1);

