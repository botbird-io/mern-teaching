var form = document.querySelector('form')
var input = document.getElementById('task')
var select = document.getElementById('priority')


var tbody = document.querySelector('tbody')


form.addEventListener('submit',function(e){
    e.preventDefault()
    let obj = {
        task : input.value,
        priority : select.value
    }

    let arr = JSON.parse(localStorage.getItem('task'))
    
    if(arr == null)
        arr = []

    arr.push(obj)

    localStorage.setItem('task',JSON.stringify(arr))

    allTasks()
    

    
    
})


function allTasks(){
    let arr = JSON.parse(localStorage.getItem('task'))
    
    if (arr == null)
        return
    
    tbody.innerHTML = ""
    
    arr.forEach(function(e,i){
        // console.log(e)
        var td1 = document.createElement('td')
        var td2 = document.createElement('td')
        var td3 = document.createElement('td')
        
        td1.innerText = e.task
        td2.innerText = e.priority
        td3.innerHTML = '<img src="./trash.png"/>'
        
        td3.addEventListener('click',function () {
            deleteRow(i)
        })

        if(e.priority == 'High')
            td2.style.backgroundColor = 'red'
        else if(e.priority == 'Low')
            td2.style.backgroundColor = 'green'


        var tr = document.createElement('tr')

        tr.append(td1,td2,td3)

        tbody.append(tr)
    })
}

allTasks()

function deleteRow(index){
    console.log('delete',index)
    let arr = JSON.parse(localStorage.getItem('task'))

    arr.splice(index,1)

    localStorage.setItem('task',JSON.stringify(arr))

    allTasks()

}