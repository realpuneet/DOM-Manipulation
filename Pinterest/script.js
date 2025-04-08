
let arr = [
    {img: "https://media.istockphoto.com/id/2194781030/photo/hamilton-harbor-summer-sunset-bermuda.jpg?s=612x612&w=0&k=20&c=QC-2hlwm8rc2bf9nrg2pTPRKuqno5mC2UqUO805n72E=",title: "First Part"},
    {img: "https://plus.unsplash.com/premium_photo-1664300077703-e5477c0e8f3d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3F1YXJlJTIwcGhvdG98ZW58MHx8MHx8fDA%3D",title: "Second Part"},
    {img: "https://media.istockphoto.com/id/172677409/photo/quad-2.jpg?s=612x612&w=0&k=20&c=H5z29UWTaDzaPadHTZYuJiwR5fbgOgqtvoQguvtGVA4=",title: "Third Part"},
    {img: "https://media.istockphoto.com/id/479037543/photo/tiger.jpg?s=612x612&w=0&k=20&c=VXJXu1oRAQb45zmH03u21nJCrFWHRqHPaJo3ZqIP3AQ=",title: "Fourth Part"},
    {img: "https://media.istockphoto.com/id/178574885/photo/spotted-deer-male-corbett-india.jpg?s=612x612&w=0&k=20&c=uB9pGwuoTlUHFo3n3bqJtdagBwRl0vOT639tmqN03Ac=",title: "Fifth Part"},
    {img: "https://media.istockphoto.com/id/1408291706/photo/european-brown-bear.jpg?s=612x612&w=0&k=20&c=SnHOL8-TATbYTFNllatOJPDMgF-83o1xYlTedVne5Ac=",title: "Sixth Part"},
   
    {img: "https://media.istockphoto.com/id/1492714647/photo/young-caucasian-woman-artist-painting-sidewalk-mural.jpg?s=612x612&w=0&k=20&c=eNaH7tRMIjMLDw8jzdSmnKDgycgXG8tcnZm5i984F5g=",title: "First Part"},
    {img: "https://media.istockphoto.com/id/483723091/photo/indian-street-artists.jpg?s=612x612&w=0&k=20&c=hBDYfOEQLWA4AZsmoS_AnWh7ksscCDfd-HzqlYUbNYY=",title: "Second Part"},
    {img: "https://media.istockphoto.com/id/1167587221/photo/holy-cow-streetart.jpg?s=612x612&w=0&k=20&c=1Ow2bockjEJHWmG_4XonLo-Brn3Bepg_sTozPkVMU_g=",title: "Third Part"},
    {img: "https://media.istockphoto.com/id/159757082/photo/stairway-tunnel-filled-with-graffiti-in-university-of-sydney.jpg?s=612x612&w=0&k=20&c=oqSWZhoHRw7qXn2fGq8Ga7434weR10uEhHXRXRFartE=",title: "Fourth Part"},
    {img: "https://media.istockphoto.com/id/2184643404/photo/urban-decay-highlights-natures-persistence-on-mumbais-streets-during-the-day.jpg?s=612x612&w=0&k=20&c=cDF8S8cFn-a181nKkq94HhLeDoIobldxhLJ2RUc0jQk=",title: "Fifth Part"},
    {img: "https://media.istockphoto.com/id/1352968008/photo/female-artist-painting-on-wall.jpg?s=612x612&w=0&k=20&c=hR7jk0IjOn0SCCgeCoFenGcsQKsFVSDZLnQGVNC8jLs=",title: "Sixth Part"},
   
    {img: "https://media.istockphoto.com/id/475835332/photo/beautiful-blond-woman-in-a-black-latex-swimsuit-pin-up-pose.jpg?s=612x612&w=0&k=20&c=6EpcTUvFJY7PL0n0KwerU-U3LwGv3xNFAXQ_jru5xOM=",title: "First Part"},
    {img: "https://media.istockphoto.com/id/1309526551/photo/hair-colour.jpg?s=612x612&w=0&k=20&c=UxIs-b-wAw_60SCNZEu-3psd6CK9ZH7W0gbBsLx5lTo=",title: "Second Part"},
    {img: "https://media.istockphoto.com/id/2145248010/photo/smiling-woman-in-floral-dress-and-straw-hat-enjoys-tropical-beach-at-sunset-summer-fashion.jpg?s=612x612&w=0&k=20&c=r9MYQpgf4ebpitMnUMKBuVkqi3ZdUfL9lI-yRmyhnGw=",title: "Third Part"},
    {img: "https://media.istockphoto.com/id/2185664295/photo/a-cute-cheerful-woman-in-a-stylish-coat-walks-alone-in-the-city-on-a-spring-sunny-day.jpg?s=612x612&w=0&k=20&c=N26Ek9xc8_bRnmA1qOOhuKvIx0HxqL4udq-aHr0FROo=",title: "Fourth Part"},
    {img: "https://media.istockphoto.com/id/2191258980/photo/young-happy-indian-woman-wearing-warm-white-sweater-and-black-woolen-hat-outdoor-at-park.jpg?s=612x612&w=0&k=20&c=Dhj4ILgFUeDxUkvGKzg-M4gy-KoxJWTcFyYmRvD14xc=",title: "Fifth Part"},
    {img: "https://media.istockphoto.com/id/2156949779/photo/smiling-woman-in-straw-hat-enjoying-sunny-day-in-scenic-countryside.jpg?s=612x612&w=0&k=20&c=gA5DFvZ3KABtXNiqD3-MEFoOwDRNK5Zi4HsUrtJhGN4=",title: "Sixth Part"},

    {img: "https://media.istockphoto.com/id/1178923470/photo/from-all-sides.jpg?s=612x612&w=0&k=20&c=8DDr1iYlFcquAC4TP8-9sAtW0M4fBzFP5CO45uLc87Q=", title: "First Part"},
    {img: "https://media.istockphoto.com/id/1146673398/photo/close-up-photo-of-pretty-attractive-optimistic-lovely-she-her-lady-raising-fists-hands-up.jpg?s=612x612&w=0&k=20&c=mnTsd9oRLo_QYVz01xFU70kaqBvXTv2WVh4ygr5kP38=", title: "First Part"},
    {img: "https://media.istockphoto.com/id/1213233967/photo/beautiful-woman-with-blue-eyes-lies-in-a-blue-lagoon.jpg?s=612x612&w=0&k=20&c=MwuytfauNCa2mn5gXJtFusuPO7pnPGlXUCSIKeOt7o0=", title: "First Part"},
    {img: "https://media.istockphoto.com/id/524897008/photo/happy-young-indian-girl-college-graduate.jpg?s=612x612&w=0&k=20&c=J20bxGQDGlYtU0zgKyytQu9hXmNsaaHbdFKk8YpnXsI=", title: "First Part"},
    {img: "https://media.istockphoto.com/id/495857313/photo/young-man-playing-with-soccer-ball.jpg?s=612x612&w=0&k=20&c=h8d8wgHoVECWrsisBxSNuFI7lLQiAeQrhaWmotzZt-M=", title: "First Part"},
    {img: "https://media.istockphoto.com/id/679271216/photo/rear-view-of-friends-watching-game-in-sports-bar-on-screens.jpg?s=612x612&w=0&k=20&c=_XkA_cMFgMKP-zrPNFKmB0jHDRol1RQbIKVcmPi_UCc=", title: "First Part"},
    {img: "https://media.istockphoto.com/id/1055451684/photo/islamic-woman-doing-yoga-in-the-room.jpg?s=612x612&w=0&k=20&c=goHkgemDzvQK3XXo06_77aIcP-8CY082PU_MV3IdEwM=", title: "First Part"},
    {img: "https://media.istockphoto.com/id/497710038/photo/beautiful-brunette-girl-sexy-buttocks.jpg?s=612x612&w=0&k=20&c=eNbdg4MHn8ua9Ey-I2eriGrNUI8m25Wvq4Gu7B3jC8s=", title: "First Part"},
    {img: "https://media.istockphoto.com/id/500961294/photo/ladies-surfers.jpg?s=612x612&w=0&k=20&c=LpvXvji5G7lSHV0Xm6W5mHyLhwgvd0V7BhLy3-1ly9s=", title: "First Part"},
    {img: "https://media.istockphoto.com/id/518841734/photo/eating-and-enjoying-watermelon.jpg?s=612x612&w=0&k=20&c=5j1N3-BYBpuQOXNxhEq1MjlBoLJLbGe8msI2yxc1zTw=", title: "First Part"},
    {img: "https://media.istockphoto.com/id/2150388400/photo/happy-women-in-bikinis-enjoy-fresh-coconuts-on-sunny-beach-friends-share-exotic-vacation-by.jpg?s=612x612&w=0&k=20&c=iezgtg0kYtVll50DqC-kw4UKUfBmVOKOfELocWH_yZM=", title: "First Part"},
    {img: "https://media.istockphoto.com/id/1138786199/photo/woman-model-posing-in-bikini-on-the-beach.jpg?s=612x612&w=0&k=20&c=yK4cD3ZwjRqklsWSxzeXvw9wDvALxQlOQzfwK4971kI=", title: "First Part"},
    {img: "https://media.istockphoto.com/id/910859542/photo/boy-and-girl-playing-on-the-beach.jpg?s=612x612&w=0&k=20&c=cD51FG7Oycw10qQ2wXOvudc4gW-lh6YaJFAXWrgY3LU=", title: "First Part"},
    {img: "https://media.istockphoto.com/id/1148836976/photo/a-couple-sitting-at-a-beach-shack-distracted-by-their-phone-and-missing-out-on-a-beautiful.jpg?s=612x612&w=0&k=20&c=pO_HL4RehTQJftqUCFUdfi_V1QmHV7snzRzzZ1ZxKM8=", title: "First Part"},
    {img: "https://media.istockphoto.com/id/1160835180/photo/newlyweds-kiss-on-a-swing-under-a-big-palm-tree.jpg?s=612x612&w=0&k=20&c=AQEEc33XCYpjErtW1ukwuWto0y2VxXiFy09FxrbSypA=", title: "First Part"},
    {img: "https://media.istockphoto.com/id/535720847/photo/sensual-couple.jpg?s=612x612&w=0&k=20&c=e6yl6VebPMAQWc_KKOGsXsPv0jmWaxd2GAdNHtYHJ-M=", title: "First Part"},
    {img: "https://media.istockphoto.com/id/1059028024/photo/little-girl-drinking-water.jpg?s=612x612&w=0&k=20&c=fvLeudgoEHj6JOQ4PGTgrL55wnXQHHCzN67TOCLlYeA=", title: "First Part"},
    {img: "https://media.istockphoto.com/id/179357732/photo/beautiful-woman-with-wreath-of-flowers.jpg?s=612x612&w=0&k=20&c=Ci0VzqySZz_SBThAWaEiLpyQfgFhOEo1fM3xudU7-T8=", title: "First Part"},

]


function showCards(){
    let clutter = "";
    arr.forEach((obj)=>{
        clutter += `<div id="card">
        <div id="card-header">
        <img src="${obj.img}" alt="">
        <h4>${obj.title}</h4>
        <button>Like</button>
        <button>Comment</button>
        </div>
        </div>`
        document.querySelector(".container")
        container.innerHTML = clutter;
    })
}

function handleSearch(){
    let input = document.querySelector("#searchinput")
    // let searchdata = document.querySelector("#searchdata")
    
    input.addEventListener("focus",function(){
        document.querySelector("#overlay").style.display = "block";
    })
    input.addEventListener("blur",function(){
        document.querySelector("#overlay").style.display = "none";
    })

    input.addEventListener("input",function(){
        const filteredArr = arr.filter(obj => obj.title.toLowerCase().startsWith(input.value));
        let clutter = "";
        filteredArr.forEach((obj)=>{
            clutter += `<div id="searchdata">
                    <h4><i class="ri-search-line"></i>${obj.title}</h4>
                </div>`
            })
            
            document.querySelector("#searchdata").innerHTML = clutter;
            document.querySelector("#searchdata").style.display = "block";

    })
}

handleSearch()
showCards()