import navbar,{fetchData, displayData} from "./navbar.js";

document.getElementById("navbar").innerHTML = navbar();

const cardList = document.getElementById("cardList");

function display (data){
    const newData = displayData(data);

    newData.forEach((item)=>{
        cardList.appendChild(item);
    })
}


fetchData('https://fakestoreapi.com/products/category/jewelery')
    .then(json=>display(json))

