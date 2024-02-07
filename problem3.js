/*
### Task-3: 
Write a function to count the number of vowels in a string.
*/
const str = 'Education is the backbone of a nation';
function countVowel(str){
    let texts =str.split('');
    console.log(texts);
    let count = 0;
    let vowels='aeiou';
    for(let text of texts){
        if(vowels.toLowerCase().includes(text)){
            count++;
        }
    }
    // console.log(count);
    return count
}
console.log(countVowel(str));