function filterNumbers(numbers) {
    return numbers.filter(function(number) {
      return number >= 10;
    });
  }
  
  const numbers = [5, 12, 8, 21, 16, 7];
  console.log(filterNumbers(numbers));
  