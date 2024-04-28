const numbers = [1, 2, 3, 4, 1, 1];

const output = except(numbers, [1]);

console.log(output);

function except(array, excludedArray){
    const output = [];
    for(let item of array){
        if(!excludedArray.includes(item)){
            output.push(item);
        }
    }

    return output;
}