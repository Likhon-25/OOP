"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    getInfo() {
        const info = `Name: ${this.name}\n Email: ${this.email} `;
        return info;
    }
}
// instantiate
// instance
const rafi = new Student("Rafi", "rafi@Gmail.com", 20, 100);
const sadia = new Student("Sadia", "sadia@Gmail.com", 18, 200);
console.log(rafi);
//# sourceMappingURL=method.js.map