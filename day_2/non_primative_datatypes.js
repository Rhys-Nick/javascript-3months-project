let nums = [1,2,3];
nums[0] = 10 ;
console.log(nums); //[10,2,3] 
//you can't redeclare same variable name using block-scope like 'let' and 'const' . 
let num1 = [1,2,3]; 
let num2 = [1,2,3];
console.log(num1 == num2); //false

let userOne= {
    firstname : "Thae",
    lastname : "San"
}
let userTwo = {
    firstname :"Chang",
    lastname : "Chang"
}
let usertwo = {
    firstname : "Thae",
    lastname :"San"
}
console.log(userOne == userTwo); //false
console.log(userOne == usertwo); //false cause object are not the same even their data are same.

//but 
let userone = userOne ;
console.log(userOne == userone); //true cause of same object



