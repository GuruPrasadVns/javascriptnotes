const simpleCircle = {
  radius : 1,
  draw(){
      console.log('draw');
  }
}

const anotherSimpleCircle = {};

for(let key in simpleCircle)
  anotherSimpleCircle[key] = simpleCircle[key];

console.log(anotherSimpleCircle);

// Another way using Object.assign

const complexCircle = Object.assign({ color : 'red'}, simpleCircle, { location : { x : 1, y : 2}});

console.log(complexCircle);

// Another way using Spread Operator

const anotherComplexCircle = {...complexCircle};

console.log(anotherComplexCircle);