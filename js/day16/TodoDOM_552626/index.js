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
    // localStorage.setItem('task',JSON.stringify(obj))

    let arr = JSON.parse(localStorage.getItem('task'))

    if(arr == null)
        arr = []

    arr.push(obj)

    localStorage.setItem('task',JSON.stringify(arr))
    var td1 = document.createElement('td')
    var td2 = document.createElement('td')
    var td3 = document.createElement('td')

    td1.innerText = input.value 
    td2.innerText = select.value

    if(select.value == 'High')
        td2.style.backgroundColor = 'red'
    else if(select.value == 'Low')
        td2.style.backgroundColor = 'green'


    var tr = document.createElement('tr')

    tr.append(td1,td2,td3)

    tbody.append(tr)


})


function oldTasks(){
    let arr = JSON.parse(localStorage.getItem('task'))

    if (arr == null)
        return

    arr.forEach(function(e,i){
        console.log(e)
        var td1 = document.createElement('td')
        var td2 = document.createElement('td')
        var td3 = document.createElement('td')

        td1.innerText = e.task
        td2.innerText = e.priority

        if(e.priority == 'High')
            td2.style.backgroundColor = 'red'
        else if(e.priority == 'Low')
            td2.style.backgroundColor = 'green'


        var tr = document.createElement('tr')

        tr.append(td1,td2,td3)

        tbody.append(tr)
    })
}

oldTasks()