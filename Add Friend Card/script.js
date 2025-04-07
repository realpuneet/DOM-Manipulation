let btn = document.querySelector("button");
let p = document.querySelector("p");

let flag = 0;

btn.addEventListener("click", function () {
    p.innerHTML = "wait..";
    p.style.color = "gainsboro";

    if (flag == 0) {
        btn.innerHTML = "Adding...";
    } else {
        btn.innerHTML = "Removing...";
    }

    setTimeout(() => {
        if (flag == 0) {
            p.innerHTML = "Request Sent";
            p.style.color = "orange";
            btn.innerHTML = "Pending"

            setTimeout(() => {
                p.innerHTML = "Friends";
                p.style.color = "lightgreen";
                btn.innerHTML = "Remove";
                flag = 1;
            }, 4000);
        } else {
            p.innerHTML = "Stranger";
            p.style.color = "gainsboro";
            btn.innerHTML = "Add Friend";
            flag = 0;
        }
    }, 3000);
});