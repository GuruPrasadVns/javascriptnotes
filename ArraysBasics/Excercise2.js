const numbers = [1, 2, 3, 4];

function includes(arr, searchElement){
    for(let element of arr){
        if(element === searchElement)
            return true;
    }

    return false;
}

console.log('Array Includes 1', includes(numbers, 1));
console.log('Array Includes 5', includes(numbers, 5));