let num = [2,8,6,1,6,4,5,3]

// num.forEach(function(elem){
//     console.log(elem*elem)
// })

// let double = num.map(function(elem,index){
//     return 2*elem
// })

// console.log(double)

// let odd = num.filter(function(elem){
//     return elem%2 == 1
// })

// console.log(odd)


// let sum = num.reduce(function(abc,elem,index){
//     return abc + elem
// },10)

// let product = num.reduce(function(abc,elem){
//     return abc * elem
// },1)
// console.log(sum,product)
// [2,8,6,1,6,4,5,3]
// acc=2

// addition of square of only even elements

// let evenAddition = num.filter(function(elem){
//     return elem % 2 == 0
// }).map(function(elem){
//     return elem * elem
// }).reduce(function(acc,elem){
//     return acc + elem
// },0)

// console.log(evenAddition)

// [2,8,6,1,6,4,5,3]
// 

let product =  [1,2,3,4].reduce(function(acc,elem){
    return acc * elem
},1)

console.log(product)