/*
class Student {
  name: string;
  email: string;
  age: number;
  marks: number;

  // constructor ---> special method
  constructor(name: string, email: string, age: number, marks: number) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.marks = marks;
  }

  getInfo(): string {
    const info = `Name: ${this.name}\n Email: ${this.email} `;
    return info;
  }
}

// instantiate
// instance
const rafi = new Student("Rafi", "rafi@Gmail.com", 20, 100);
const sadia = new Student("Sadia", "sadia@Gmail.com", 18, 200);
console.log(rafi.getInfo());
console.log(sadia.getInfo()); 
*/

/*
 *title
 *soldItems
 * */

class TeaShop {
  title: string;
  soldItems = [];

  constructor(title: string, ){
    this.title = title
  }
}
const shop1 = new TeaShop("Dhaka Tea house")
console.log(shop1);