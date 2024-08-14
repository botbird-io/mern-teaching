let arr = [
    {
        name: 'John',
        age: 25
    },{
        name: 'Jane',
        age: 22
    },{
        name: 'Doe',
        age: 30
    },{
        name: 'Smith',
        age: 28
    },{
        name: 'Alex',
        age: 20
    },{
        name: 'Doe',
        age: 25
    }
]
 
// Sort by age
arr.sort(function(a, b) {
    return a.age - b.age
})

console.log(arr)

// Sort by name
arr.sort((a, b) => {
    if(a.name < b.name) return -1
    if(a.name > b.name) return 1
    return 0
})

console.log(arr)
