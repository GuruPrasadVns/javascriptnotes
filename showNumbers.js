function showNumbers(number){
  for(let index = 0; index <= number; index++){
      index % 2 === 0 ? console.log(index, "EVEN") : console.log(index, "ODD");
  }
}

showNumbers(100);