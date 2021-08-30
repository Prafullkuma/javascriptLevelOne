/*
 indexOf()
 slice()

 toUpperCase() //converts to uppercase
 toLowerCase()  //converts to lowercase

 lastIndexOf() //return index but goes from rigth to left
 trim()  //remove space around the string
 includes()   //true or false
 split()   // return Array

*/

const name="asif"

//toUppercase

console.log(name.toUpperCase())

const upperCaseName=name.toUpperCase()

console.log("stored in to variable",upperCaseName)


console.log(name)

//toLowerCase()

console.log("converiting to lowerCase",upperCaseName.toLowerCase())


//lastIndexOf()

const location="Bangalore"


/*
 B   a  n   g    a   l  o  r  e
 
 0   1  2   3    4   5  6  7  8

                         <=====
*/

console.log(location.lastIndexOf('a'))
console.log(location.lastIndexOf('n'))


// trim()

const userName="   admin"

/*
  _ _ _ _  a d m i n
   trim()
  admin   

*/


console.log("length",userName.length)

const userNameChange=userName.trim()

console.log(userNameChange.length)


const data="    my city is bangalore       "

console.log("before trim()")
console.log(data)
console.log("After trim()")
console.log(data.trim())


//includes()  //true or flase


const course="frontend"

console.log(course.includes('a'))

console.log(course.includes('end'))

console.log(course.includes('f'))



const sentence="I am going to Goa"

const result=sentence.split(' ') //[ 'I', 'am', 'going', 'to', 'Goa' ]
console.log(result)

const result2=sentence.split()   //[ 'I am going to Goa' ]
console.log(result2)

const resutl3=sentence.split('i')// [ 'I am go', 'ng to Goa' ]

console.log(resutl3)


const email="prafull.kumar.45@gmail.com"

const result4=email.split('@')// [ 'prafull.kumar.45', 'gmail.com' ]
console.log(result4)


const Obj={
    name:'prafull',
    age:12,
    company:'xyz',
    salary:3000
}
console.log(Obj.name) //prafull

console.log(Obj.salary)  //3000

console.log(Obj.age)   //12


/*
input :
const Obj={
    name:'prafull',
    age:12,
    company:'xyz',
    salary:3000
}

output:
 My name is prafull and my age is 12 my company name is xyz and i get salary 3000

*/






