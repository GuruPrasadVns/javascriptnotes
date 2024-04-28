function showStars(number){
  for(let index = 1; index <= number; index++){
      let pattern = '';
      for(secondIndex = 0; secondIndex < index; secondIndex++){
          pattern += '*'
      }
      console.log(pattern);
  }
}

showStars(5);