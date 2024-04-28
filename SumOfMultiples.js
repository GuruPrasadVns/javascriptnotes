

function sumOfMuliplesOfThreeAndFive(limit){
  let sum = 0;
  for(let index = 1; index <= limit; index++){
      if(index % 3 === 0 || index % 5 === 0)
          sum += index;
  }

  return sum;
}

console.log(sumOfMuliplesOfThreeAndFive(10));