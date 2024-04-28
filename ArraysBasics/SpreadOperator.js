const numbers = [1, 2, 3, 4, 5, 6];
const secondNumbers = [7, 8, 9];

const combinedNumbers = [...numbers, 23, ...secondNumbers, 46];

console.log(combinedNumbers);

// To make a copy of array

const duplicateNumbers = [...secondNumbers];

console.log(duplicateNumbers);