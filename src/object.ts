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

const createStudent = (
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
console.log(rafi);
console.log(sadia);
