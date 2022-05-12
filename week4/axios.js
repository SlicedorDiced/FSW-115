const userName = document.querySelector('#name');
const button = document.querySelector('#bttn').addEventListener('click', requestAxiosData)

function requestAxiosData(){

    axios.get(`http://api.bryanuniversity.edu/${userName.value}/list`)
.then(response => {
    for(i = 0; i < response.data.length; i++){ 
        const h1 = document.createElement('h1')
        h1.textContent = response.data[i].name
        document.body.appendChild(h1)
    }
})
.catch(error => console.log(error))
}




// CORS-anywhere
// https://cors-anywhere.herokuapp.com/