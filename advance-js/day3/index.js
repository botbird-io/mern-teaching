// abc()

function appendScript(s){
    var script = document.createElement('script');
    script.src = s;
    document.body.appendChild(script);
    return new Promise((resolve, reject) => {
        script.onload = function(){
            resolve("Script loaded successfully");
        }
    
        script.onerror = function(){
            reject("Script load error");
        }
    })
}

// appendScript('./myScript.js').then((res) => {
//     abc(); // myScript.js
// }).catch((err) => {
//     console.log(err);
// })


// console.log('Hello'); // Hello


async function append(){
    var res = await appendScript('./mySript.js')
    abc()
}
append()