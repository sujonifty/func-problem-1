/*

### Task-4: 
Write a function to find the longest word in a given string.

sample-input: 
I am learning Programming to become a programmer

sample-output: Programming

----
*/
const  sentence = 'I am learning Programming to become a programmer';
let words = sentence.split(' ');
// console.log(words);
let maxWord = words[0];
for(let word of words ){
    if(word.length > maxWord.length){
        maxWord = word;
    }
}
console.log(maxWord);