const numbers = [1, 2, 3, 4];

const output = move(numbers, 1, 1);

console.log(output);

function move(array, index, offset){
    const output = [...array];
    const length = output.length;

    if(index + offset > length - 1 || index + offset < 0){
        console.error('Invalid offset');
        return;
    }
    
    for(let i = 0; i < index + offset; i++){
        let temp = output[index + i + 1];
        output[index + i + 1] = output[index + i];
        output[index + i] = temp;
    }

    return output;
}