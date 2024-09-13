let obj1 = {
    name: "John",
   
}

obj1.__proto__.sdkflaksd = function() {
    return "sdkflaksd called"
}
// let obj2 = Object.create(obj1)

console.log(obj1 )
console.log("sdkflaksd function",obj1.sdkflaksd() )



function Car(name, maxAcceleration, maxVelocity) {
    this.name = name
    this.maxAcceleration = maxAcceleration,
    this.maxVelocity = maxVelocity,
    this.accelerate = function() {
        console.log("Accelerating")
    }
}

let porche = new Car("Porche", 10, 200)

let ferrari = new Car("Ferrari", 20, 300)

let car = new Car("Car", 5, 100)

// car.__proto__.deaccelerate = function() {
//     console.log(this.name + " Deaccelerating")
// }
Car.prototype.deaccelerate = function() {
    console.log(this.name + " Deaccelerating")
}
// let obj2 = {
//     name: "John",
//     age: 20
// }
ferrari.deaccelerate()
car.deaccelerate()
porche.deaccelerate()


let car1 = {
    name: "Prototype 1",
    maxAcceleration: 10,
    maxVelocity: 200,
    accelerate: function() {
        console.log(this.name + " Accelerating")
    },
    deaccelerate: function() {
        console.log(this.name + " Deaccelerating")
    }
}

let creta = Object.create(car1)

creta.name = "Creta"
creta.maxAcceleration = 15
creta.maxVelocity = 150

console.log("creta : " , creta)

creta.accelerate()

console.log("creta : " , creta.name)