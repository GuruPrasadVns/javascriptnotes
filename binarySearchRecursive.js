const arr = [15, 23, 45, 67, 89, 90];
// array must be sorted for binary search


function binarySearchRecursive(arr, left, right, searchKey){
    if(left <= right){
        let mid = Math.floor(left + (right - left) / 2);
        
        if(arr[mid] === searchKey)
          return mid;

        if(arr[mid] < searchKey)
          return binarySearchRecursive(arr, mid + 1, right, searchKey);

        else 
          return binarySearchRecursive(arr, left, mid - 1, searchKey);
    }

    return -1;
}

console.log(binarySearchRecursive(arr, 0, 5, 15));
console.log(binarySearchRecursive(arr, 0, 5, 23));
console.log(binarySearchRecursive(arr, 0, 5, 45));
console.log(binarySearchRecursive(arr, 0, 5, 67));
console.log(binarySearchRecursive(arr, 0, 5, 89));
console.log(binarySearchRecursive(arr, 0, 5, 90));
console.log(binarySearchRecursive(arr, 0, 5, 92));