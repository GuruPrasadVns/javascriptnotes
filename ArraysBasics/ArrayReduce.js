// Array Reducing
const numbers = [23, 45, 67, 89];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

const secondSum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(sum);

console.log(secondSum); // Explain both the reduce method calls.