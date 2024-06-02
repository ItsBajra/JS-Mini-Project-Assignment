function processData(numbers, callback) {
    let processedNumbers = [];
    function processEachNumber() {
      for (let i = 0; i < numbers.length; i++) {
        let processed = callback(numbers[i]);
        processedNumbers.push(processed);
      }
    }
    processEachNumber();
    return processedNumbers;
  }
  
  function square(num) {
    return num * num;
  }
  
  const numbers = [1, 2, 3, 4, 5];
  const squaredNumbers = processData(numbers, square);
  console.log(squaredNumbers); 
  