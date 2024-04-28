const numbers = [1, 2, 3, 4, 1];

const count = countOccurrences(numbers, -1);

console.log(count);

function countOccurrences(array, searchElement){
    let count = 0;
    for(let item of array)
      if(item === searchElement)
        count++;

    return count;
}

function countOccrrenceUsingReduce(numbers, searchElement){
    console.log('Function called', numbers);
    console.log('Function called', searchElement);
    return numbers.reduce((accumulator, currentValue) =>{
        console.log('Inside reduce accumulator', accumulator);
        console.log('Inside reduce currentValue', currentValue);
        if(currentValue === searchElement)
          return accumulator++;
    });
}

const count2 = countOccrrenceUsingReduce(numbers, 1);

console.log(count2);