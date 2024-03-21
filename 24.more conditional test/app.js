"use strict";
// test for equality and in equality
let fruit = "apple";
console.log("Is fruit == `apple`? I oredict true.");
console.log(fruit == `apple`);
console.log("Is fruit == `apple`? I predict flase.");
console.log(fruit == `orange`);
// test using lower case
let uppercaseFrruit = "APPLE";
console.log("Is uppercaseFruit.toUpperCase() == `apple`? I predict true.");
console.log(uppercaseFrruit.toLocaleUpperCase() == `apple`);
// numbertical test
let num1 = 5;
let num2 = 15;
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
let X = 5;
let y = 10;
console.log("Is x > 0 or y < 0? I predict true");
console.log(X > 0 || y < 0);
console.log("Is x > 0 or y < 20? I predict true");
console.log(X > 0 && y < 20);
// test whether an item in array
let number = [1, 2, 3, 4, 5,];
let searchNumber = 3;
console.log("Is seachNumber in numbers? I predict true");
console.log(number.includes(searchNumber));
// test wheather an item in not in array
let fruits = ["appple", "banana", "orange",];
let searchFruit = "grape";
console.log("Is seachFruit not in fruits ? I predict true");
console.log(!fruits.includes(searchFruit));
