const employees = [
  {name : 'Guru', age : 34},
  {name : 'Gaurav', age : 32}
]

const employee1 = { name : 'Satish', age: 40};
const employee2 = { name : 'Saurabh', age: 31};

// Adding at end
employees.push(employee1, employee2);

const employee3 = { name : 'Vineet', age: 38};
const employee4 = { name : 'Vishal', age: 41};

// Adding at beginning
employees.unshift(employee3, employee4);

const employee5 = { name : 'Ataur', age: 38};
const employee6 = { name : 'Nirmal', age: 41};

employees.splice(5, 0, employee5, employee6);

console.log(employees);


// Sort employees By name

employees.sort((emp1, emp2)=>{
    if(emp1.name.toUpperCase() < emp2.name.toUpperCase())
      return -1;
    if(emp1.name.toUpperCase() > emp2.name.toUpperCase())
      return 1;
    return 0;
});

console.log('After Sorting by name :');
console.log(employees);

// sort employees by age

employees.sort((emp1, emp2)=>{
  if(emp1.age < emp2.age)
    return -1;
  if(emp1.age > emp2.age)
    return 1;
  return 0;
});

console.log('After Sorting by age :');
console.log(employees);