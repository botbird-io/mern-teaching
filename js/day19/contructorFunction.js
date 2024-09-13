//  function Student(name1, age1) {
//     this.name = name1;
//     this.age = age1;
//     this.display = function () {
//         console.log(this.name + " " + this.age);
//     }
// }

// let student1 = new Student("John", 25);
// let student2 = new Student("Doe", 30);

// student1.display();
// student2.display();
/* 
let student1 = {
    name: "John",
    age: 25
}

let student2 = {
    name: "Doe",
    age: 30
}

*/


function MyArray(){
    this.length = 0;
    this.push = function(value){
        this[this.length] = value;
        this.length++;
    }
    this.pop = function(){
        // if(this.length === 0){
        //     return;
        // }
        this.length--;
        delete this[this.length];
    }
}

let arr = new MyArray()

arr.push(10)
arr.push(20)
arr.push(30)

console.log(arr) // MyArray { '0': 10, '1': 20, '2': 30, length: 3 }

arr.pop()
console.log(arr) // MyArray { '0': 10, '1': 20, length: 2 }