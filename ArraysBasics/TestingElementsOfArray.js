const numbers = [23, 5, -6, 2, 1];

console.log(numbers);

const isEveryNumberPositive = numbers.every(num => num > 0);
console.log('isEveryNumberPositive ->',isEveryNumberPositive);

const isAtleastOnePositive =  numbers.some(num => num > 0);
console.log('isAtleastOnePositive ->',isAtleastOnePositive);