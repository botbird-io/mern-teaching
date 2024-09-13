// function Student(name,age){
//     this.name = name,
//     this.age = age
// }

// let stu1 = new Student("Sanket",24)
// let stu2 = new Student("Payal",20)

// let stu3 = new Student("Nayan")

// console.log(stu1)
// console.log(stu2)
// console.log(stu3)

function MyArray(){
    this.length = 0
    this.push = function(value){
        this[this.length] = value
        this.length++
    }
}

let arr = new MyArray()

arr.push(10)
console.log(arr)

arr.push(20)
console.log(arr)

arr.push(30)

console.log(arr)