var e_commerce = {
    products : ["earphone","headphone","earpods"],
    quantity : [4,3,2],
    price : [700, 800, 1000],
    
    total_price : function(){
        var total = 0
        for(let i=0;i<3;i++){
            total += e_commerce.price[i] * e_commerce.quantity[i]
        }
        return total
    }
};

console.log(e_commerce.total_price())

var rectangle = {
    length : 13,
    width : 10,
    area : function(){
        return rectangle.length * rectangle.width
    },
    perimeter : function (){
        return 2*(rectangle.length + rectangle.width)
    }
}

console.log(rectangle.area(), rectangle.perimeter())