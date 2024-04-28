const first = [1, 2, 3, 4, 5, 6];
const second = [7, 8, 9];

// concatenation
const combined = first.concat(second);

console.log(combined);

// slicing

const firstSlice = first.slice(); // to generate duplicate of array

console.log(firstSlice);

const secondSlice = first.slice(2);

console.log(secondSlice);

const thirdSlice = first.slice(2, 4);

console.log(thirdSlice);