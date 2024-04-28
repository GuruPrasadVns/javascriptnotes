// Array Mapping

const numbers = [23, 45, 56, 78];
const items = numbers.map(n => { value : n});
console.log(items); // This will produces [undefined, undefined, undefined, undefined] Why??

const secondItems = numbers.map(n => ({ value : n}));

console.log(secondItems);

// Filtering with mapping

const thirdItems = numbers
                      .filter(n => n % 2 === 0)
                      .map(n => ({ value : n}));

console.log(thirdItems);