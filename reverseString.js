//write function to reverse a string.

const str='hello world';

function reverseString(str) {
        let reversedStr = '';
        for (let i = str.length - 1; i >= 0; i--) {
            reversedStr += str[i];
        }
        return reversedStr;
}

const reverseStr=()=>{
    const rev=[...str];
    let reversed=''
    while(rev.length){
        reversed+=rev.pop();
    }
    return reversed;
}

console.log(reverseString(str)); // dlrow olleh
console.log(reverseStr(str)); // dlrow olleh