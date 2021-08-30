/*
 builtd in method
  .indexOf() // takes charater and return index if not found -1
    // when passed charater found 
    
*/

const name="prafull"

console.log(name.indexOf('p'))
console.log(name.indexOf('z'))

const location="bangalore"

console.log(location.indexOf('b')) //0
console.log(location.indexOf('o')) //6
console.log(location.indexOf('a')) //1

console.log(location[4])


/*

  .slice()  // the character want access it
  2 argumaent
  start index = 
  last index  =  end index indicates the without includes that character

*/


const userName="admin is Asif"

console.log(userName.slice(0,3)) //adm

console.log(userName.slice(0)) //admin
console.log(userName.slice(0,5)) //adm
