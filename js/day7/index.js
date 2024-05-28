var name = 'John';
var age = 25;
var gender = 'female'
var address = '123 Main St';

var student1 = {
    $name: 'Pooja',
    age: 20,
    _gender : 'female',
    address: 'New Subhedar',
    "25": 1
}

console.log(student1.$name);
console.log(student1["age"]);

var student2 = {
    name: 'Nayan',
    age: 20,
}

student2.age = 25;
student2.gender = "male"
// delete student2.age;
console.log(student2);

