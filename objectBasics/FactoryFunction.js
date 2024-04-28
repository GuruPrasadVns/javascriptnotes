function createCircle(radius){
  return {
      radius,
      draw(){
          console.log('draw');
      }
  };
}

const secondCircle = createCircle(2);