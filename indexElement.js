// Find the index of an element in an array.

const numbers = [1, 5, 3, 7, 2, 9, 4, 6, 8];

const indexElement = numbers.findIndex((num) => num === 7);
const indexElement2 = numbers.indexOf(7);
const indexElement3 = numbers.reduce((index, num, i) => {
    return num === 7 ? i : index;
},0)

console.log(indexElement3); // 3