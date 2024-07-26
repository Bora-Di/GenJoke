const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,explicit&type=single";

let getJoke = () => {
    jokeContainer.classList.remove("fade");
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);  // Log the entire response to check its structure
        if (data && data.joke) {
            jokeContainer.innerText = `${data.joke}`;
        } else {
            jokeContainer.innerText = "No joke found!";
        }
        jokeContainer.classList.add("fade");
    })
    .catch(error => {
        console.error("Error fetching joke:", error);
        jokeContainer.innerText = "Failed to fetch a joke.";
    });
}

btn.addEventListener("click", getJoke);
getJoke();
