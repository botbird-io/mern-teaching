let str = 'coding room'

// {c: 1, o: 3, d: 1, i: 1, n: 1, g: 1, r: 1, m: 1}

let obj = {}
console.log(obj)
for (let i = 0; i < str.length; i++) {
    obj[str[i]]++
}
console.log(obj)
