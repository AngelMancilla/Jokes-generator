const genButton = document.getElementById("generate")
const jokeText = document.getElementById("text")

genButton.addEventListener("click", () => {
  fetch("https://v2.jokeapi.dev/joke/Any?lang=es&type=single")
    .then(res => res.json())
    .then(data => {
      jokeText.value = `${data.joke}`
    })
    .catch(e => {
      console.error(e)
    })
});

