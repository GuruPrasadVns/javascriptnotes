const employees = [
  {name : 'Guru', age : 34},
  {name : 'Gaurav', age : 32}
]

const employee1 = { name : 'Satish', age: 40};
const employee2 = { name : 'Saurabh', age: 31};

// Adding at end
employees.push(employee1, employee2);

console.log(employees);

const employee3 = { name : 'Vineet', age: 38};
const employee4 = { name : 'Vishal', age: 41};

// Adding at beginning
employees.unshift(employee3, employee4);

console.log(employees);

const employee5 = { name : 'Ataur', age: 38};
const employee6 = { name : 'Nirmal', age: 41};

employees.splice(5, 0, employee5, employee6);

console.log(employees);