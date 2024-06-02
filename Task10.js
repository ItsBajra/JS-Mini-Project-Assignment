class Person {
    constructor(name, age) {
      this.name = name; 
      this.age = age;   
    }
    describe() {
      return `Name: ${this.name}, Age: ${this.age}`; 
    }
  }
  
  const person1 = new Person('Bajra', 21); 
  console.log(person1.describe());         
  
  const person2 = new Person('Aditya', 42);   
  console.log(person2.describe());         