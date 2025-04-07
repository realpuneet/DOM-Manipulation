let btn = document.querySelector('button')
let p = document.querySelector('p')
let url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,political,racist,sexist&type=twopart'

let getJoke = ()=> {
    fetch(url)
    .then(data => data.json())
    .then(item => {
        p.textContent = item.setup
    })
}

btn.addEventListener('click', getJoke)