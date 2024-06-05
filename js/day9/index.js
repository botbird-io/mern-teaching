// let str = 'coding roomhkkjhkjhgkyguyrdred'

// // {c: 1, o: 3, d: 1, i: 1, n: 1, g: 1, r: 1, m: 1}

// let obj = {}
// console.log(obj)
// for (let i = 0; i < str.length; i++) {
//     if(obj[str[i]] ==undefined){
//         obj[str[i]] = 1
//     }else{
//         obj[str[i]]++
//     }
// }
// console.log(obj)


const products = [
    {
        name: 'laptop',
        price: 1000,
        quantity: 10
    },
    {
        name: 'desktop',
        price: 1500,
        quantity: 5
    },
    {
        name: 'phone',
        price: 500,
        quantity: 20
    },
    {
        name: 'tablet',
        price: 800,
        quantity: 15
    }
]
let total = 0
for(let i = 0; i < products.length; i++){
    total += products[i].price * products[i].quantity
}
console.log(total)

for(let i=0;i<products.length;i++){
    if(products[i].price>=600 && products[i].price<=2000){
        console.log(products[i].name)
    }
}

