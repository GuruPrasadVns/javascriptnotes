const arr = [15, 23, 45, 67, 89, 90];


function rightRotation(arr, rotateIndex){
    const n = arr.length;

    for(let index = 0; index < rotateIndex; index++){
          let temp = arr[0];

          for(let secIndex = 1; secIndex < n ; secIndex++){
              arr[secIndex - 1] = arr[secIndex];
          }

          arr[n - 1] = temp;
    }
}

rightRotation(arr, 3);

console.log(arr);