// test for equality and in equality
let fruit: string = "apple";

console.log("Is fruit == `apple`? I oredict true.");
console.log(fruit == `apple`);

console.log("Is fruit == `apple`? I predict flase.");
console.log(fruit == `orange`);

// test using lower case
let uppercaseFrruit: string = "APPLE"; 
console.log("Is uppercaseFruit.toUpperCase() == `apple`? I predict true.");
console.log(uppercaseFrruit.toLocaleUpperCase()== `apple`);

// numbertical test
let num1: number = 5;
let num2: number = 15;

console.log("Is num1 == num2? I predict false.");
console.log(num1 == num2);

console.log("Is num1 != num2? I predict true.");
console.log(num1 == num2);

console.log("Is num1 < num2? I predict true.");
console.log(num1 < num2);

console.log("Is num1 > num2? I predict false.");
console.log(num1 > num2);

console.log("Is num1 >= num2? I predict false.");
console.log(num1 >= num2);

console.log("Is num1 <= num2? I predict false.");
console.log(num1 <= num2);

// test using and , or 
let X: number = 5;
let y: number = 10;

console.log("Is x > 0 or y < 0? I predict true");
console.log(X > 0 || y < 0);


console.log("Is x > 0 or y < 20? I predict true");
console.log(X > 0 && y < 20);

// test whether an item in array
let number: number[] = [1,2,3,4,5,];
let searchNumber: number = 3;

console.log("Is seachNumber in numbers? I predict true");
console.log(number.includes(searchNumber));

// test wheather an item in not in array
let fruits: string [] = ["appple", "banana", "orange", ];
let searchFruit: string = "grape";

console.log("Is seachFruit not in fruits ? I predict true");
console.log(!fruits.includes(searchFruit));
