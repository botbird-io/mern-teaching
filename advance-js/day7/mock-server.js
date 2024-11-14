// fetch('http://localhost:3001/posts/2')
//     .then(response => response.json())
//     .then(data => console.log(data))
var id 
fetch('http://localhost:3001/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        views: 10,
    }),
}).then(response => response.json())
.then(data => {
    console.log(data)
    id = data.id
    
    setTimeout(() => {
        fetch('http://localhost:3001/posts/' + id, {
            method: 'DELETE',
        })
        .then((response) =>{
            console.log(response);
            return response.json()
        }
        )
        .then(data => console.log(data))
    }, 1000)
})
