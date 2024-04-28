function arrayFromRange(min, max){
  const arr = [];
  let j = 0;
  for(let i = min ; i <= max; i++){
      arr[j++] = i;
  }
  return arr;
}

const numbers = arrayFromRange(-10, -4);
console.log(numbers);