//Aithmetic = + ,- * , / ,%

// console.log(2+7) // 9
// console.log(1+2) // 3 
// console.log(3-2)  //1

// console.log(2*2) //4
// console.log(2/2)//1

// console.log(4%2)  //0
// console.log(3%2)  //1

// const a=90
// const b=100
// console.log("wtih varibale",a+b)


//Assignmetn


const a = 90 

const sum=a+12

console.log(sum)

//Combined

let value =12
    value +=1
console.log(value)



let value1 =12
    value1 -=1
console.log(value1)



let value2 =12
    value2 *=1
console.log(value2)



let value3 =12
    value3 /=1
console.log(value3)


let value4 =12
    value4 %=1
console.log(value4)


function Sum(){
  let sum=0
  
  for(let i=0;i<3;i++){
        sum+=i
  }
  return sum
}

console.log(Sum())

/*step=1
  sum=0
    i=0   0<3 true   i++
    sum+=0   ==> 0+=0 

sum=0 

step =2
    i=1   1<3  true  i++
    0+=1  
    sum=1

step 3 
sum=1
    1=2 2<3 true  i++
    1+=2
    sum=3 
 
 sum=3
  step 4 
  i=3  3 < 3 false
  
  return 
  sum=3
*/



