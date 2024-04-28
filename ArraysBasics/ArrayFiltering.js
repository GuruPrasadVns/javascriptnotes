const numbers = [23, 45, 22, 12, 56, 78, 91, 34];
console.log(numbers);

const evenNumbers = numbers.filter(num => num % 2 === 0);
const oddNumbers = numbers.filter(num => num % 2 !== 0);

console.log('Filtered Even Numbers ',evenNumbers);
console.log('Filtered Odd Numbers ', oddNumbers);