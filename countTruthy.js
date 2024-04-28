const arr = [0, null, undefined, '', NaN, false, 1, 2, 'Guru', true];

function countTruthy(arr){
    let count = 0;
    for(let value of arr){
        if(value)
            count++;           
    }

    return count;
}

console.log(countTruthy(arr));