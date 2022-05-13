const userName = document.querySelector('#username');
const desc = document.querySelector('#description');
const price1 = document.querySelector('#price');
const complition = document.querySelector('#iscom');
// const getbutton = document.querySelector('#getbttn').addEventListener('click', requestAxiosData);
const  postbutton = document.querySelector('#postbttn').addEventListener('click', postAxiosData);

function postAxiosData(){
    axios.post(`http://api.bryanuniversity.edu/Joshua-Luna-Perez/list`,{
        name: userName.value,
        description : desc.value,
        price: price1.value,
        isComplete : complition.value
    })
    .then(response => window.location.reload(response))

    .catch(error => console.log(error))
}

    axios.get(`http://api.bryanuniversity.edu/Joshua-Luna-Perez/list`)
        .then(response => displayData(response))
        
        
        .catch(error => console.log(error))


function displayData(response) {
    for(i = 0; i < response.data.length; i++){ 
        var cBox = document.createElement('INPUT');
        cBox.setAttribute('type', 'checkbox');
        cBox.checked = response.data[i].isComplete
        document.body.appendChild(cBox);

        console.log(response.data[i]._id)

            const dt = response.data[i]

        cBox.onclick = (e) => {
            putrequest(dt)
        }
        
        function putrequest (data) {
            axios.put(`http://api.bryanuniversity.edu/Joshua-Luna-Perez/list/${data._id}`,
            {"isComplete": !data.isComplete})
            .then(response => window.location.reload(response),console.log(response))
            

            .catch(error => console.log(error))
        }

        const h1 = document.createElement('h1')
        h1.textContent = response.data[i].name
        document.body.appendChild(h1)

        const h3 = document.createElement('h3')
        h3.textContent = response.data[i].price
        document.body.appendChild(h3)

        const des = document.createElement('h3')
        des.textContent = response.data[i].description
        document.body.appendChild(des)

    if(response.data[i].isComplete == true){
            h1.style.textDecoration = "line-through"
       
        }
    // var editBtn = document.createElement('button');
    // editBtn.setAttribute('value', 'edit');
    var delBtn = document.createElement('button');
    delBtn.setAttribute('value', 'delete')
    delBtn.innerHTML = "Delete" 
    document.body.appendChild(delBtn)

    delBtn.onclick = (e) => {
        removeItem(dt)
    }
    function removeItem (data) {
        axios.delete(`http://api.bryanuniversity.edu/Joshua-Luna-Perez/list/${data._id}`)

        .then(response => window.location.reload(response))

        .catch(error => console.log(error))
    }
    }
}


axios.get(`https://swapi.dev/api/people/`)
.then(response => showInfo(response))


.catch(error => console.log(error))
 
function showInfo(response) {
    userName.options[0] = new Option("Please Select Name")
    console.log(response)
    for(i=0; i < 5; i++) {
        userName.options[i+1] = new Option(response.data.results[i].name)
    
    }
}

// CORS-anywhere
// https://cors-anywhere.herokuapp.com/