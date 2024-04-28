const numbers = [1, 2, 3,4, 5, 6];

console.log('Before Removing ' , numbers);

//Removing from end
console.log(numbers.pop());

console.log('After Removing from end ', numbers);

//Removing from start

console.log(numbers.shift());

console.log('After Removing from beginning ', numbers);

// Removing from middle

console.log(numbers.splice(0, 2));

console.log('After Removing from middle ', numbers);

