// Write a function that takes an array of numbers and returns the sum of all the even numbers in the array.

const numbers = [1, 5, 3, 7, 2, 9, 4, 6, 8];

function sumOfEven(numbers){
    return numbers.reduce((sum, num) => {
        return num % 2 === 0 ? sum + num : sum;
    },0);
}

function sumOfEven2(numbers){
    let sum = 0;
    for(let i=0;i<numbers.length;i++){
        if(numbers[i] % 2 === 0){
            sum+=numbers[i];
        }
    }
    return sum;
};

console.log(sumOfEven(numbers)); // 20