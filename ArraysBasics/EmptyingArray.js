let numbers = [1, 2, 3, 4, 5, 6];

console.log(numbers);

//First Solution

//numbers = [];

// Second Solution

//numbers.length = 0;

// Third Solution

//numbers.splice(0, numbers.length);

// Fouth Solution

while(numbers.length > 0)
  numbers.pop();

console.log(numbers);