const arr = [15, 23, 45, 67, 89, 90];
// array must be sorted for binary search


function binarySearchIterative(arr, searchKey){
  let left = 0;
  let right = arr.length - 1;

  while(left <= right){
     let mid = Math.floor((right - left) / 2 + left);

     if(arr[mid] === searchKey)
       return mid;

     if(arr[mid] < searchKey)
       left = mid + 1;

     else 
         right = mid - 1;
  }

  return -1;
}

console.log(binarySearchIterative(arr, 15));
console.log(binarySearchIterative(arr, 23));
console.log(binarySearchIterative(arr, 45));
console.log(binarySearchIterative(arr, 67));
console.log(binarySearchIterative(arr, 89));
console.log(binarySearchIterative(arr, 90));
console.log(binarySearchIterative(arr, 92));