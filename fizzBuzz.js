// Divisible by 3 : Fizz
// Divisible by 5 : Buzz
// Divisible by 3 and 5 both : FizzBuzz
// Not divisible by 3 or 5 : print the number
// if input is not a number : print Not a number

function fizzBuzz(input){
    
  if(typeof input !== 'number')
      return "Not a number";
  
  if(input % 3 === 0 && input % 5 === 0)
      return "FizzBuzz"

  if(input % 3 === 0)
      return "Fizz";

  if(input % 5 === 0)
      return "Buzz";

  return input;
}

console.log(fizzBuzz(9));
console.log(fizzBuzz(10));
console.log(fizzBuzz(30));
console.log(fizzBuzz(7));
console.log(fizzBuzz(false));
console.log(fizzBuzz('7'));