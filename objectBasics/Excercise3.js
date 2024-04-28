function Address(street, city, zipCode){
  this.street = street;
  this.city = city;
  this.zipCode = zipCode
}

const firstAddress = new Address('Palam Vihar', 'Gurgaon', '122017');
const secondAddress = new Address('Palam Vihar', 'Gurgaon', '122017');
const thirdAddress = firstAddress;


function areSame(firstAddress, secondAddress){
    return firstAddress === secondAddress;
}

function areEqual(firstAddress, secondAddress){
    for(let key in firstAddress){
        if(firstAddress[key] !== secondAddress[key])
            return false;
    }
    return true;
}

console.log(areSame(firstAddress, thirdAddress));
console.log(areSame(firstAddress, secondAddress));

console.log(areEqual(firstAddress, thirdAddress));
console.log(areEqual(firstAddress, secondAddress));

