
const navbar = function(){
    return `<a href="./index.html"><h4>Home</h4></a>
        <a href="./electronics.html"><h4>Electronics</h4></a>
        <a href="./jewelery.html"><h4>Jewelery</h4></a>
        <a href="./login.html"><h4>Login</h4></a>`
}

export default navbar;

const fetchData = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

const displayData = (data) => {
    return data.map((item)=>{
        let card = document.createElement("div");
        card.className = "card";
        let img = document.createElement("img");
        img.src = item.image;
        let title = document.createElement("h2");
        title.innerText = item.title;
        let price = document.createElement("p");
        price.innerText = "$ " + item.price;
        card.append(img, title,price);

        return card;
    })
}

export {
    fetchData,
    displayData
};
