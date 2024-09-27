fetch('https://jsonplaceholder.typicode.com/posts/110').then(response => {
    console.log(response);
    return response.json();
}).then(data => {
    console.log(data);
}).catch(error => { 
    console.log(error)
})

// fetch('https://www.google.com')