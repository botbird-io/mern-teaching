let car = {
    wheels: 4,
    speed: 100,
    doors: 4,
    color: 'red',
    engine: 'V8',
}


let car2 = Object.create(car);

// console.log(car2.wheels); // 4

car2.wheels = 6;
// car2.speed = 200;
// car2.doors = 2;
// car2.color = 'blue';

console.log(car2); // 6