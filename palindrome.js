// Write a function to check if a string is a palindrome

const str='level level';
function isPalindrome(str){
    return str === str.split('').reverse().join('');
}
console.log(isPalindrome(str)); // true

