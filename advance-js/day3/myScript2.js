function def(){
    console.log('myScript2.js');
}

(new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolved');
    }, 2000);
})).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})