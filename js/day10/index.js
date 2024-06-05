// var data2 = {
//     name : "Kaleen Bhaiyya",
//     age : 45,
//     gender : "male",
//     city : "Mirzapur",
//     hobbies : ["Making Guns"]
//     };
    
//     for(var key in data2)
//     {
//     console.log(key," --- ",data2[key]);
//     }

var arr = ["Ramesh", "Suresh", "Ramesh", "Kamlesh", "Suresh", "Rupak"];

var party = [];
var present = false;
for(var i = 0; i<arr.length; i++){
    
    for(var j=0; j<party.length; j++){
        if(arr[i] == party[j]){
            present= true;
            break;
        }
    }
    if(present == false){
        party.push(arr[i]);
    }else{
        present = false;
    }
}
console.log(party);