function removeSmallest(numbers) {
  let lowest = 0 
  
  for (let i = 0; i < numbers.length; i++) {
    if (i === 0) {
      lowest = numbers[i]
    }
    if ( lowest > numbers[i]) {
      lowest = numbers[i]
    }
  }
  console.log(lowest)
  for ( let i = 0 ; i < numbers.length; i++ ) {
    if ( numbers[i] === lowest) {
      numbers.splice(i, 1)
      return numbers
    }
  }
  return [];
}