

// for(var i =1 ;i<10;i++){
//     if(i==5){
//         break
//         continue
//     }
//     console.log(i)
// }

// var movies = ["Tezz", "RRR","Poshpa", "PK"]
// movies.push("Dhoom")
// // movies.push("KGF 2")
// movies.push("Poshpa")

// console.log(movies);

// for(var i=0 ; i<movies.length ; i++){
//     if(movies[i] == "Poshpa"){
//         movies[i] = "Pushpa"
//     }
// }
    
// console.log(movies);


// var name = "Sunket"
// name[1] = "a"
// name = "Sanket"
// console.log(name[2])
// name[3]


var str = "Cat"

// console.log()
var output = ""

var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lower = "abcdefghijklmnopqrstuvwxyz"
// str = ""
for(var i=0;i<str.length;i++){
    var flag = true
    for(var j=0;j<upper.length;j++){
        if(str[i] == lower[j]){
            flag = false
            output += upper[j]
            break
        }
        console.log(i,j)
    }
    if(flag){
        output += str[i]
    }
}

console.log(output)