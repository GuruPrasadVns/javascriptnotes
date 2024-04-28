function createAddress(street, city, zipCode){
  return {
    street,
    city,
    zipCode
  };
}

function showAddress(address){
    console.log('Street', address.street);
    console.log('City', address.city);
    console.log('ZipCode', address.zipCode);
}

function showAddressFirstWay(address){
  for (let key in address)
    console.log(key, address[key]);
}

function showAddressSecondWay(address){
    for(let key of Object.keys(address)){
      console.log(key, address[key]);
    }
}

function showAddressThirdWay(address){
   for(let entry of Object.entries(address))
      console.log(entry)
}

const address = createAddress('Palam Vihar', 'Gurugram', '122017');

showAddress(address);
showAddressFirstWay(address);
showAddressSecondWay(address);
showAddressThirdWay(address);
