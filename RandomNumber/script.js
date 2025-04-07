
let btn = document.querySelector("button");
let h1 = document.querySelector("h1");

btn.addEventListener("click", function () {
    let randomNumber = Math.floor(Math.random() * 100 )+1;
    h1.innerText = randomNumber;
})