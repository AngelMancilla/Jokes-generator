const jokeGen = document.getElementById("generate")

//Funciones
const jokeSettings = () => {
    
}

function JokeGen() {
    fetch('https://v2.jokeapi.dev/joke')
    .then(res => res.json())
    .then(data => {
       console.log(data)
       let jokeText = document.getElementById("text")
       jokeText.innerHTML = `<p>${data.message}<p/>` 
    })
}

jokeGen.addEventListener("click", e => {
    
    JokeGen()
}) 



