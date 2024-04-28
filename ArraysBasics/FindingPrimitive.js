const numbers = [ 1, 2, 3, 4, 2, 5];

console.log(numbers);

console.log("Index of 2 ->",numbers.indexOf(2));
console.log("Index of 2 with starting index 3 ->" , numbers.indexOf(2, 3));
console.log("Last Index of 2 ->", numbers.lastIndexOf(2));

console.log("Is numbers includes 3 ->", numbers.includes(3));
console.log("Is numbers includes 7 ->", numbers.includes(7));