

let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')
let btn3 = document.querySelector('#btn3')
let btn4 = document.querySelector('#btn4')
let h1 = document.querySelector('h1')

let count = 0;

btn1.addEventListener('click', function() {
    count++;
    h1.innerHTML = count;
    if(count % 5 == 0 ){

        h1.style.backgroundColor = 'lightgreen'
    }
    else{
        h1.style.backgroundColor = 'antiquewhite'
    }
})
btn2.addEventListener('click', function() {
    if(count > 0){
        count--;
    }
    h1.innerHTML = count;
})

btn3.addEventListener('click', function() {
    count += 5
    h1.innerHTML = count;
})
btn4.addEventListener('click', function() {
    if(count > 0 && count >= 5){
        count -= 5
    }
    h1.innerHTML = count;
})
