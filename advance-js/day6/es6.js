// arrow function
// function sum (a, b) {
//   return a + b;
// }

// var sum = function(a,b){
//     console.log(this);
//     return a + b;
// }

// var sum = (a,b)=>{
//     console.log(this);
//     return a + b;
// }

// console.log(sum(1,2));

// scope - global, function/local, block


// let a = 10;

// if(true){
//     let a = 20;
//     let b = 30;
//     console.log(a);
// }
// for(let i = 0; i < 10; i++){
//     console.log(i);
// }

// try {} catch (error) {}

// console.log(a);


// template literals

// let name1 = "John";

// console.log("Hello " + name1 + " how are you?");

// console.log(`Hello ${name1} how are you?`);

// console.log(`Hello ${name1}
// how are you?`);


// destructuring array

// let arr = [1,2,3,4,5];

// let a = arr[0];
// let b = arr[1];
// let c = arr[2];

// let [a,b,c,d,e] = arr;

// console.log(b);

// destructuring object
// let age = 40;
// let obj = {
//     name: "John",
//     age: 30,
//     city: "New York"
// }
// obj.number = 123456;
// let name = obj.name;
// let age = obj.age;
// let city = obj.city;

// let {age:age1, city, name:name10, number} = obj;

// console.log(name10,age1,city,number,age);


// object property assignement

// let age = 30;
// let city = "New York";
// let obj = {
//     name: "John",
//     age,
//     city,
// }

// console.log(obj);


// object function assignement


// let obj = {
//     name: "John",
//     age: 30,
//     city: "New York",
//     display: function(){
//         console.log(this.name);
//     },
//     married : null,
//     greet(){
//         console.log("Hello");
//     }
// }

// obj.display();

// obj.greet();

// spread operator

// let arr = [1,2,3,4,5];

// let arr1 = [6,7,8,9,10];

// let arr2 = [...arr,5.1,...arr1]

// console.log(arr2);

// object assign

// let obj = {
//     name: "John",
//     age: 30,
//     city: "New York",
// }

// let obj1 = {
//     email: "123@example.com",
// }

// let obj3 = {
//     number : 123456,
// }
// let obj2 = Object.assign(obj3,obj,obj1);

// console.log(obj2,obj,obj1,obj3);


