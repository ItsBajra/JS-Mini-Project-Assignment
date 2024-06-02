function findNumber(numbers) {
    return numbers.find(function(number) {
      return number > 15;
    });
  }
  
  const numbers = [5, 12, 8, 21, 16, 7];
  console.log(findNumber(numbers));
  