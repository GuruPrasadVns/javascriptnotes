const numbers = [23, 45, 7, 18, 2, 89, 37];

console.log('Before Sorting ->');
console.log(numbers);

// Sort method by default converts numbers into string and then sort.
numbers.sort();

console.log('After Sorting alphabetically->');
console.log(numbers);

// For actual sorting

numbers.sort((a, b)=>{
  if(a < b) return -1;
  if(a > b ) return 1;
  return 0;
});

console.log('After Sorting->');
console.log(numbers);

// reverse sorting
numbers.reverse();
console.log('After Sorting reversing->');
console.log(numbers);