function doubleNumbers(numbers) {
    return numbers.map(function(number) {
      return number * 2;
    });
  }
  
  let numbers = [1, 2, 3, 4, 5];
  console.log(doubleNumbers(numbers));
  