"use strict";
/*
const studentName = "Likhon"
const studentAge = 20
const studentEmail = "likhon@gmail.com"

const studentName2 = "Shohag"
const studentAge2 = 21
const studentEmail2 = "shohag@gmail.com"

const lihon= {
    name: 'Likhon',
    age: 20,
    email: 'likhon@gmail.com'
}
const shohat= {
    name: 'Shohag',
    age: 21,
    email: 'shohag@gmail.com'
}

console.log(lihon.name);
*/
Object.defineProperty(exports, "__esModule", { value: true });
/* const createStudent = (
  name: string,
  age: number,
  email: string,
  marks: number,
) => {
  const obj = { name, age, email, marks, forgetPass() {} };
  return obj;
};

const rafi = createStudent("Rafi", 18, "rafi@Gmail.com", 100);
const sadia = createStudent("Sadia", 18, "sadia@Gmail.com", 200);
// console.log(rafi);
// console.log(sadia);
*/
class Student {
    name;
    email;
    age;
    marks;
    // constructor ---> special method
    constructor(name, email, age, marks) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.marks = marks;
    }
}
// instantiate
// instance
const rafi = new Student("Rafi", "rafi@Gmail.com", 20, 100);
const sadia = new Student("Sadia", "sadia@Gmail.com", 18, 200);
class Emoloyee {
    name;
    position;
    id;
    age;
    salary;
    constructor(name, position, id, age, salary) {
        this.name = name;
        this.position = position;
        this.age = age;
        this.id = id;
        this.salary = salary;
    }
}
const employee1 = new Emoloyee("Likhon", "Senior Developer", 20, 204590, 30000);
console.log(employee1);
//# sourceMappingURL=object.js.map