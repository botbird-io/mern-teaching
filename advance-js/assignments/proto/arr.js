function MyArray() {
  this.length = 0;
}

MyArray.prototype.push = function(value){
    this[this.length] = value
    this.length++
}

MyArray.prototype.pop = function(){
    if(this.length<=0){
        return
    }
    this.length--
    delete this[this.length]
}

MyArray.prototype.print = function(){
    var str = ""
    for(let i=0;i<this.length;i++){
        str+= this[i] + " "
    }
    console.log(str)
}

MyArray.prototype.map = function(callback){
    let ans = new MyArray()
    for(let i=0;i<this.length;i++){
        ans.push(callback(this[i],i,this))
    }
    return ans
}



let arr = new MyArray()
console.log(arr)
arr.push(30)
console.log(arr)
arr.push(40)
console.log(arr)
arr.push(50)
console.log(arr)
arr.print()
arr.pop()
console.log(arr)