function createAddress(street, city, zipCode){
  return {
    street,
    city,
    zipCode
  };
}

function Address(street, city, zipCode){
  this.street = street;
  this.city = city;
  this.zipCode = zipCode
}

const currentAddress = createAddress('Palam Vihar', 'Gurgaon', '122017');
const permanentAddress = new Address('Badi Gaibi', 'Varanasi', '221010');

console.log(currentAddress);
console.log(permanentAddress);