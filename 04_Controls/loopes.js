

// for (let index = 0; index <=10; index++) {
// const element = index;
// if (element == 5 ) {
//     console.log("5 is best number");
// }
//     console.log(element);
// }


// for (let i  = 0; i  <= 10; i ++) {
//      console.log(`Oeter loop value ${i}`);
//      for (let j = 0; j <=5; j++) {
//         console.log(`Inner loop value ${j} and inner loop ${i}`);
        
//      }
   
// }

// for (let index = 1; index <=10; index++) {
//     if(index === 5){
//         console.log(`rukana he ${index} per`);
//         break
//     }
//     console.log(index);
    
// }

// for (let index = 1; index <=10; index++) {
//     if(index === 5){
//         console.log(`rukana he ${index} per`);
//         continue
//     }
//     console.log(index);    
// }

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let index = 0
// while(index <= 10) {
//     console.log(`Value fo index is ${index}`);
//     index = index +2
// }

// let myarr = ['flash', 'batman', 'superman']

// let arr = 0;

// while(arr < myarr.length) {
//     console.log(`${myarr[arr]}`);
//     arr = arr +1
// }

// let num = 5

// do {
//     console.log(`${num}`);
//     num++
// } while (num <= 1)


// for of

// const arr = [ 1,2,3,4,5]

// for (const num of arr) { 
//     console.log(num);
// }

const greeting = "Hello Wolrd!"

for (const greet of greeting) {
    // if(greet == " "){break}else{
    // console.log(`Each char is ${greet}`)
}
// }

 
// Maps


const map = new Map()
map.set('In', "India")
map.set('Fr', "France")
map.set('Uk', "Austrelia")
map.set('In',"India")

// console.log(map);

// forof loop

// for (const key of map) {
//     // console.log(key);
// }
// for (const [key, value] of map)  {
//     console.log(key, '--', value);
// }


// for in loop


// const myobj = {
//     js: "JavaScript",
//     cpp: "C++",
//     rb: "Ruby",
//     swift: "Swift by apple"
// }

//  for (const key in myobj) {
//   console.log(`${key} = ${myobj[key]}`);
       
//     }


// const programming = ["js", "cpp", "rb", "java"]

// for (const key in programming) {
//      console.log(programming[key]);
// }
 
    // foreach ==>   Non callBack function

        const coding = ["js", "ruby", "java", "python"]
         
// coding.forEach( function (item) {
//     console.log(item);
// } )


// coding.forEach( (val) => {
//     console.log(val);
// } )


// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)



// coding.forEach( (item, index, arr) =>{
//     console.log(item, index, arr);
// })

// const cours = [
//     {
//         language: "JacaScript",
//         filename: "js"
//     },
//     {
//     language: "CPP",
//     filename: "cpp"
//     },
//     {
//      language: "python",
//      filename: "py"
// },
// ]

//  cours.forEach((item) =>{
//     console.log(item.language);
//  })



//// filter

const Num =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNum = Num.filter( (num) =>{
//     return num > 4
// })

// console.log(newNum);
 


// Num.filter((value) =>{       // array value
//     console.log(value);
// })  

// SAme as filter     ---- in forEach

// const newNum = []

// Num.forEach((Num) => {
//      if (Num > 4) {
//         newNum.push(Num)
//      }
// })

// console.log(newNum);

// const Books = [
//     {title: 'Book one', genre: 'Fiction', publish: 1978, edition: 2010},
//     {title: 'Book two', genre: 'History', publish: 1948, edition: 2021},
//     {title: 'Book three', genre: 'Non-ficotn', publish: 1978, edition: 2030},
//     {title: 'Book four', genre: 'Science', publish: 1878, edition: 2030},
//     {title: 'Book five', genre: 'History', publish: 1980, edition: 2040},
// ];

// let userBook = Books.filter( (bk) => bk.genre === 'History')

//   userBook = Books.filter((bk)  => bk.publish >= 1978 && bk.genre === "History")
// console.log(userBook);



// +++++++++++++++++++++ Map


const myNum =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// const newNum = myNum.map( (num) => { return num + 10})


// / chainning

// const newNum = myNum
//                .map( (num) => num * 10)
//                .map( (num) => num + 1)
//                .filter( (num) => num >=40 )

// console.log(newNum);



// reduce method


const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( (acc, currval) => {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//  return acc + currval
// }, 0)

// const myTotal = myNums.reduce( (acc, currval) => acc + currval, 0)
// console.log(myTotal);

const cours = [
      {
        itemName: "js couse",
        price: 999
      },
      {
        itemName: "cpp couse",
        price: 499
      },
      {
        itemName: "py couse",
        price: 1999
      },
      {
        itemName: "dev ops couse",
        price: 2999
      },
      {
        itemName: "mobile dev couse",
        price: 3999
      },
]

const totalPay = cours.reduce( (acc, item) => acc + item.price, 0)

console.log(totalPay);