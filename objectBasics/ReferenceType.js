let person1 = {
  name : 'Guru',
  age : 32
};

let person2 = person1;

person1.name = 'Satish';

console.log('person1', person1);
console.log('person2', person2);

// Second Example

let person ={
  name : 'Guru',
  age : 35
}

function changeAge(person){
  person.age = 48;
}

changeAge(person);

console.log(person);