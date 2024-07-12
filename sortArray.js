// Sort an array of numbers in ascending order.

const numbers = [1, 5, 3, 7, 2, 9, 4, 6, 8];

const sortAcending = numbers.sort((a, b) => a - b);
const sortDecending = numbers.sort((a, b) => b - a);

console.log(sortAcending); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(sortDecending); // [9, 8, 7, 6, 5, 4, 3, 2, 1]