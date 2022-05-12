const userName = document.querySelector('#name');
const desc = document.querySelector('#description');
const price1 = document.querySelector('#price');
const complition = document.querySelector('#iscom');
const getbutton = document.querySelector('#getbttn').addEventListener('click', requestAxiosData);
const  postbutton = document.querySelector('#postbttn').addEventListener('click', postAxiosData);

function postAxiosData(){
    axios.post(`http://api.bryanuniversity.edu/${userName.value}/list`,{
        description : desc.value,
        price: price1.value,
        isComplete : false
    })
    
}


function requestAxiosData(){
    axios.get(`http://api.bryanuniversity.edu/${userName.value}/list`)
        .then(response => displayData(response))
        
        .catch(error => console.log(error))
}



function displayData(response) {
    for(i = 0; i < response.data.length; i++){ 
        const h1 = document.createElement('h1')
        h1.textContent = response.data[i].name
        document.body.appendChild(h1)
    }
}




// CORS-anywhere
// https://cors-anywhere.herokuapp.com/