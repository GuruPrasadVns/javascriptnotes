const arr = [15, 23, 45, 67, 89, 90];

function reverseArrayRecursive(arr, left, right){
    if(left < right){
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        return reverseArrayRecursive(arr, ++left, --right);
    }

    else
      return arr;
}

reverseArrayRecursive(arr, 0, 6);

console.log(arr);

