

let h4 = document.querySelector('h4')
let btn = document.querySelector('button')
let flag = 0;

 btn.addEventListener('click', function() {
    if(flag == 0){
        h4.style.color = 'green'
        h4.innerHTML = 'Friends'
        btn.innerHTML = 'Remove'
        console.log(flag);
        
        flag = 1;
    }
    else{
    h4.style.color = 'red'
    h4.innerHTML = 'Stranger'
    btn.innerHTML = 'Add Friend'
    console.log(flag);
    flag = 0;
    }
 })


  