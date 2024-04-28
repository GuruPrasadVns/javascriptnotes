const numbers = [1 , 2, 3, 4, 5, 6];

// Iterating using for of loop

for(let number of numbers)
  console.log(number);

// Iterating using forEach method

numbers.forEach((number,index) => console.log(number, index));