"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const studentName = "Likhon";
const studentAge = 20;
const studentEmail = "likhon@gmail.com";
const studentName2 = "Shohag";
const studentAge2 = 21;
const studentEmail2 = "shohag@gmail.com";
const lihon = {
    name: 'Likhon',
    age: 20,
    email: 'likhon@gmail.com'
};
const shohat = {
    name: 'Shohag',
    age: 21,
    email: 'shohag@gmail.com'
};
console.log(lihon.name);
const createStudent = (name, age, email) => {
    const obj = { name, age, email };
    return obj;
};
const rafi = createStudent("Rafi", 18, 'rafi@Gmail.com');
console.log(rafi);
//# sourceMappingURL=object.js.map