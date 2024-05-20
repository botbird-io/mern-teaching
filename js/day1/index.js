const a =1
const b = "Hi"
const c = true
const d = [1, 2, "f"]
const e = {name: 'John', age: 20}
const f = function() {
  console.log('Hello')
}
const g = null
const h = undefined
const i = 1.1


function test() {
  console.log('test')
}

function add(a, b) {
  return a + b
}

var subtract = function(a, b) {
    return a - b
}

console.log(subtract(1, 2))


let marks = {}

marks['John'] = 80
marks['Jane'] = 90
marks["Pooja"] = 100


console.log(marks)

console.log(marks['John'])