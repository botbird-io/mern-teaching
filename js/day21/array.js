function MyArray(){
    // this.length = 0;
}

MyArray.prototype.push = function(value){
    this[this.length] = value
    this.length++
}

MyArray.prototype.pop = function(){
    this.length--
    delete this[this.length]
}

MyArray.prototype.top = function(){
    return this[this.length - 1]
}

MyArray.prototype.length = 0

let arr = new MyArray()

arr.push(10)
arr.push(20)
arr.push(30)
arr.push(40)

console.log(arr)

console.log(arr.top())

arr.pop()

console.log(arr.top())

let arr1 = new MyArray()

arr1.push(100)

console.log(arr1)
console.log(arr)