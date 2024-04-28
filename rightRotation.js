const arr = [15, 23, 45, 67, 89, 90];

// output = [90, 15, 23, 45, 67, 89];


function rightRotation(arr, rotateIndex){
    const n = arr.length;

    for(let index = 0; index < rotateIndex; index++){
          let temp = arr[n - 1];

          for(let secIndex = n - 2; secIndex >=0; secIndex--){
              arr[secIndex + 1] = arr[secIndex];
          }

          arr[0] = temp;
    }
}

rightRotation(arr, 2);

console.log(arr);

