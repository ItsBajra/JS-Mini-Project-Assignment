// Define the Person class
class Person {
    constructor(name, age) {
      this.name = name; 
      this.age = age;   
    }
    describe() {
      return `Name: ${this.name}, Age: ${this.age}`; 
    }
  }

  class Student extends Person {
    constructor(name, age, grade) {
      super(name, age); 
      this.grade = grade; 
    }
    study() {
      return `${this.name} is studying.`; 
    }
  }

  const student1 = new Student('Bajra', 21); 
  console.log(student1.describe());               
  console.log(student1.study());                  
  
  const student2 = new Student('Sandip', 32);   
  console.log(student2.describe());               
  console.log(student2.study());                  