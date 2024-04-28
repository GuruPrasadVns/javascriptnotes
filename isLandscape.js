function isLandScape(width, height){
  return width > height;
}

console.log('width 700 and height 400 is Landscape ->', isLandScape(700, 400));
console.log('width 400 and height 700 is Landscape ->', isLandScape(400, 700));