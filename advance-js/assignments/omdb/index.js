const API_KEY = "1454ca9"

document.querySelector('form').addEventListener('submit',function(e){
    e.preventDefault()
    var movie = document.getElementById('Movies').value

    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${movie}`)
    .then(function(res){
        return res.json()
    })
    .then(function(res){
        console.log(res)
        displayPoster(res)
    })
    .catch(function(e){
        console.log(e)
    })
})

function displayPoster(res){
    var img = document.querySelector('img')

    img.setAttribute('src',res.Poster)
    img.setAttribute('alt',res.Title)

    document.querySelector('h3').innerText = res.Title + "(" + res.Year + ")"

    document.querySelector('p').innerText = res.Plot
}