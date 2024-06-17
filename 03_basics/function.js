// function sayname() {
//     console.log("Shubham");
// }
// sayname()

function addnum(num1, num2){
    // console.log(num1 + num2);
    // let result = num1 +num2;
    // return result;

    // return num1+ num2; 
 }
//  const result = addnum(2,3)
//  console.log(result);

function loginmessage(username) {
    // if(username === undefined)
    if(!username) {
        console.log("Please enter name");
        return
    }
    return `${username} just logged in`
}
// console.log(loginmessage());


 function claculatevalue(...num1) {
    return num1
 }
//  console.log(claculatevalue(200, 100, 2));

let user ={
    name: "shubham",
    price: 199
}

function handObject(anyobject){
  console.log(`username is ${anyobject.name} and price is ${anyobject.price}`);
}

// console.log(handObject(user));
handObject({
    name:"Samm",
    price:399
})

const myarr = [200, 300, 100, 400]
function  secondvalue(getaary){
    return getaary[0]
}
console.log(secondvalue(myarr))

