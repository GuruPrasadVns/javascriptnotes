function Circle(radius){
  this.radius = radius;
  this.draw = function(){
      console.log('draw');
  }
}

const firstCircle = new Circle(1);
console.log(firstCircle.constructor);


console.log(secondCircle.constructor);