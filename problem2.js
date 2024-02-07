/*
### Task-2: 
You are given an array of numbers. Count how many times the a number is repeated in the array. 

sample-input: 
numbers = [5,6,11,12,98, 5]

find: 5

output: 2
*/
const numbers = [5,6,11,12,98, 5];
let firstNumber = numbers[0];
let repeatNumber = [];
for(let number of numbers){
    if (number === firstNumber){
        repeatNumber.push(number);
    }
}
console.log('Repeated number is',repeatNumber);
console.log('Repeated',repeatNumber.length);
