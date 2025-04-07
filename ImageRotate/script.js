

let img = document.querySelector("img");
let btn = document.querySelector("button");

 btn.addEventListener("click", function() {
    let X = Math.floor(Math.random() * 100);
    let Y = Math.floor(Math.random() * 100);
    let rot = Math.floor(Math.random() * 360);

    img.style.left = X + "%";
    img.style.top = Y + "%";
    img.style.rotate = rot + "deg";
    
});