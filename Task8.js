function sumNumbers(numbers) {
    return numbers.reduce(function(total, number) {
      return total + number;
    }, 0);
  }
  const numbers = [1, 2, 3, 4, 5];
  console.log(sumNumbers(numbers));
  