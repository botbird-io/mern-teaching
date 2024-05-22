// str = "1"
// str += "*"
// console.log(str);

for(var i=1;i<=4;i++){
    let str = '';
    for(j=i;j<=4;j++){
        str += "*";
    }
    console.log(str);
}
for(var i=2;i<=4;i++){
    let str = '';
    for(j=1;j<=i;j++){
        str += "*";
    }
    console.log(str);
}