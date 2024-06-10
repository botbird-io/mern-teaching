
// function factorial (n){
//     let ans = 1
//     for(let i=1;i<=n;i++){
//         ans *= i
//     }
//     return ans
// }

// console.log(factorial(5) * factorial(4))
// factorial(10)

// factorial(4)
// factorial()

// function lowerToUpper (str , f){
//     if(f)
//         console.log(f(),'this is f')
//     var output = ""
//     var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     var lower = "abcdefghijklmnopqrstuvwxyz"

//     for(var i=0;i<str.length;i++){
//         var flag = true
//         for(var j=0;j<upper.length;j++){
//             if(str[i] == lower[j]){
//                 flag = false
//                 output += upper[j]
//                 break
//             }
//         }
//         if(flag){
//             output += str[i]
//         }
//     }
//     console.log(output) 
// }

// lowerToUpper('jhfhjfgjhf')
// lowerToUpper('Sanket')
// let a = ['a']
// console.log('ghg',4,a+'')
// lowerToUpper('136',factorial)

// let sweets = ['khova', 'gulabjamun', 'jalebi', 'ladoo', 'kajukatli']

// let pack = []
// sweets.forEach(function(elem,index){
//     pack.push(elem)
//     console.log(elem,index)
// })

// console.log(pack)


// let pack1 = sweets.map(function(elem,index){
//     console.log(elem,index)
//     return elem
// })

// console.log(pack1)

// let pack2 = sweets.filter(function(elem,index){
//     return elem[0] == 'k'
// })

// console.log(pack2)


let arr = [1,2,3,4,5,6]

arr.forEach(function(ele){
    console.log(ele * 2)
})

let double = arr.map(function(elem){
    return elem*elem
})

console.log(double)


let even = arr.filter(function(elem){
    return elem % 2 == 0
})
let greaterThan3 = arr.filter(function(e){
    return e > 3
})
console.log(even,greaterThan3)