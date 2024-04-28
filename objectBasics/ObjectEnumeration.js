const circle = {
  radius : 1,
  location : {
      x : 2,
      y : 3
  },
  isVisible : true,
  draw(){
      console.log('draw');
  }
}

for(let key in circle){
  console.log(key, circle[key]);
}

const circleKeys = Object.keys(circle);
console.log(circleKeys);

for(let circleKey of circleKeys){
   console.log(circleKey, circle[circleKey]);

}

const entries = Object.entries(circle);

console.log(entries);

for(let entry of entries){
  console.log(entry);
}

if('radius' in circle){
  console.log('radius exists in circle');
}