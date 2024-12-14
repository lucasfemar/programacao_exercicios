// Atribuição de referência
const anotherStudent = student;
const studentNotReferenced = {};

Object.assign(studentNotReferenced, student);

//Alteração em anotherStudent
anotherStudent.age = 23;
anotherStudent.course = 'Mathematics';
studentNotReferenced.age = 99;
studentNotReferenced.course = 'History';
Exibição;
console.log(studentNotReferenced);
console.log(student);
console.log(anotherStudent);
