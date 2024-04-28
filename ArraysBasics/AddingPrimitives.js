const numbers = [3, 4];

// Adding at last 

numbers.push(5, 6);

console.log(numbers);

// Adding in the beginning

numbers.unshift(1, 2);

console.log(numbers);

// Adding in the middle

numbers.splice(2, 0, 23, 45);

console.log(numbers);