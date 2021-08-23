//hoisting with var,function 
//hoisting is not posible with let and const  

//var or function keyword 

// console.log(address)

// var address="Bangalore"

// console.log(address)


// console.log(name)

// let name="prafull"  //global scope

// console.log(name)


// for(let i=0;i<3;i++){
//     //Block scope
//     //let and const are block
// }


// function getName(){
//     //function scope
//   // var keyword are in fucntion scope
// }

console.log(name)  // undefined

var name="prafull"

console.log(name) //prafull



function Display(){
    console.log("inside Function scope",name)
    var name="asif"
    console.log("inside function",name)
}
// Display()




Greet()

function Greet(){
    console.log("Welcome to JS")
}

//Greet()

const userInfo="user is working"

const loggedIn=false



