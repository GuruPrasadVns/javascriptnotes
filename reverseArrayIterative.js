const arr = [15, 23, 45, 67, 89, 90];

function reverseArrayIterative(arr){
   let left = 0;
   let right = arr.length - 1;

   while(left < right){
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;     
   }
}

reverseArrayIterative(arr);
console.log(arr);