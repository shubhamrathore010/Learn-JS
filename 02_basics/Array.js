
const myArr1 = [1,2,3,4,5]

const myNames = ["Shubham", "Rathore"]


const myArr2 = new Array(1,2,3,4)

// Array

// myArr1.push(6) =>  add behind
// myArr1.pop()   =>  remove behind
// myArr1.unshift(9) => add front
// myArr1.shift() => remove front 
// includes(9) =>  check is incldue
// indexof() => index of any elements
// join() =>  convert into string
// slice => copy arry with two arrgoments not inclde last arromenst
// splice => cut from real array with two arrgoments enclude both paramiter


// console.log(myArr1);


// console.log(myArr1.push(6))
// console.log(myArr1);

// console.log(myArr1.pop(),myArr1);
// console.log(myArr1.unshift(2),myArr1);
// console.log(myArr1.shift(),myArr1);
// console.log(myArr1.includes(8),myArr1);
// console.log(myArr1.indexOf(),myArr1);
// console.log(myArr1.join());
// console.log(myArr1.slice(2,6),myArr1);
// console.log(myArr1.splice(2,3),myArr1);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++

const marval_heros = ["thor", "Ironman", "spiderman"]

const dc_heros = ["superman", "flash", "batman"]

// marval_heros.push(dc_heros)

// console.log(marval_heros);

// const all_heros = marval_heros.concat(dc_heros)
// console.log(all_heros);

// const all_heros = [...marval_heros, ...dc_heros]
// console.log(all_heros);

 const another_array = [1,2,3, [4,5,6], 7 ,[6, 7,[4,5]]]

 const real_another_array = another_array.flat(Infinity)
//  console.log(real_another_array);

// console.log(Array.isArray("shubham"))
// console.log(Array.from("shubham"))

console.log(Array.from({name: "shubbham"}));  // *** 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
 

