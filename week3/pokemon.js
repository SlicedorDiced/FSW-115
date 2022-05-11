const  xhr = new XMLHttpRequest()

xhr.open('GET', "https://pokeapi.co/api/v2/berry/", true)
xhr.send()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        let data = JSON.parse(xhr.responseText)
        showData(data.result)
    } else if (xhr.readyState === 4 && xhr.status !== 200) {
        console.log(xhr.responseText)
    }
}

function showData(data){
    console.log(data)
    for(i = 0; i < data.lenght; i++){
        const pokemon = document.createElement('P')
        pokemon.textContent = data[i].name
        document.body.appendChild(pokemon)
    }
}