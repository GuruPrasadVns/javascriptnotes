// linear Search

const arr = [23, 45, 67, 89, 90, 15];

function linearSearch(arr, searchKey){
   const n = arr.length;

   for(let i = 0; i < n; i++){
      if(arr[i] === searchKey)
        return i;
   }

   return -1;
}


console.log(linearSearch(arr, 23));
console.log(linearSearch(arr, 45));
console.log(linearSearch(arr, 67));
console.log(linearSearch(arr, 89));
console.log(linearSearch(arr, 90));
console.log(linearSearch(arr, 15));
console.log(linearSearch(arr, 18));
