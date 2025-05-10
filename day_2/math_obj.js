const PI = Math.PI;
console.log(PI); //3.142
console.log(Math.round(PI)); // 3 
console.log(Math.round(9.8)); // 10 
//.round means to get value to the nearest number
console.log(Math.floor(PI)); //3 rounding down
console.log(Math.ceil(PI)); //4 rounding up

//random number
const randomNumber = Math.random(); // that create a number netween 0 to 0.999999 
console.log(randomNumber);

//make single random number
const num = Math.round(Math.random() * 10);
console.log(num);

//absolute value
console.log (Math.abs(-10)); //10

//logarithm 
console.log(Math.log(2));
console.log(Math.log(10));

//power
console.log(Math.pow(2,3)); // 8 

//square root 
console.log(Math.sqrt(2)) //1.41421
console.log(Math.sqrt(100)) //10

//trigonometry

console.log(Math.sin(0));
console.log(Math.cos(0));