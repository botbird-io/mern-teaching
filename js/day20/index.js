let obj1 = {
    name: "Sanket",
    age: 24,
    func : function(){
        console.log(this.name)
    }
}
// obj1.func()

let obj2 = {
    name: "Payal",
    age: 20,
    func : obj1.func
}

// obj2.func()
// console.log(this)

var func = obj1.func

func()