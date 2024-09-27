function Car (make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.numWheels = 4;
    this.doors = 4;
}

let car1 = new Car('Toyota', 'Camry', 2020);
car1.numWheels = 6;
console.log(car1); // Toyota