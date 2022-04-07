const jsonObj = [
    {
    "name": "Biggs Darklighter",
    "height": "183",
    "mass": "84",
    "hair_color": "black",
    "skin_color": "light",
    "eye_color": "brown",
    "birth_year": "24BBY",
    "gender": "male",
    "homeworld": "https://swapi.dev/api/planets/1/",
    "films": [
        "https://swapi.dev/api/films/1/"
    ],
    "species": [],
    "vehicles": [],
    "starships": [
        "https://swapi.dev/api/starships/12/"
    ],
    "created": "2014-12-10T15:59:50.509000Z",
    "edited": "2014-12-20T21:17:50.323000Z",
    "url": "https://swapi.dev/api/people/9/"
}]

var json = JSON.stringify(jsonObj);

document.body.innerHTML += json

fetch("https://swapi.dev/api/people/9").then(
    resource=>{
        resource.json().then(
            data=>{
                console.log(data)
            }
        )
    }
)

//----- Please advice me on what I should really do here,
// ---- i am confused as to what form and way to display this  Thank you Prof Thakkar