// show real product 
// show real popular products
// on click of the product add button it to the cart


let products = [
    {name: "Pablo Montes ", headline: "Sleeping Cough", price: "500$", image: "https://plus.unsplash.com/premium_photo-1705169612592-32610774a5d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"},
    {name: "Clarkson", headline: "Leatherette 1 Seater Sofa", price: "150$", image: "https://images.durian.in/Durian/durian/product/800x800/764031713335880.jpg?tr=w-355,pr-true,f-auto"},
    {name: "Stool", headline: "Wooden stool", price: "150$", image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"},
    {name: "Hall/Class Chair", headline: "Fully metallic", price: "800$", image: "https://images.unsplash.com/photo-1507878866276-a947ef722fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhaXJzfGVufDB8fDB8fHww"},
    {name: "White Premium Chair", headline: "Soft Like Cloud", price: "500$", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"},
    {name: "Meredith Leather ", headline: "1 Seater Power Recliner", price: "800$", image: "https://images.durian.in/Durian/durian/product/800x800/911861698239881.jpg?tr=w-355,pr-true,f-auto"},
    {name: "White Chair", headline: "Soft Like Cloud", price: "500$", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"},
    {name: "Pink Chair", headline: "Feels like foam", price: "800$", image: "https://plus.unsplash.com/premium_photo-1690971631360-c7b4f08b4f94?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNoYWlyfGVufDB8fDB8fHww"},
    {name: "Rainer", headline: "Soft Light Blue", price: "1150$", image: "https://images.durian.in/Durian/durian/product/800x800/252961737983359.jpg?tr=w-355,pr-true,f-auto"},
];
let popular = [
    {name: "Hand Bag", headline: "Soft Like Cloud", price: "70$", image: "https://plus.unsplash.com/premium_photo-1678739395192-bfdd13322d34?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHJhdmVsJTIwYmFnfGVufDB8fDB8fHww"},
    {name: "Trolley bag", headline: "Feels like foam", price: "200$", image: "https://images.unsplash.com/photo-1630573133579-75e54088eb4a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJhdmVsJTIwYmFnfGVufDB8fDB8fHww"},
    {name: "Travelling bag", headline: "Wooden stool", price: "100$", image: "https://images.unsplash.com/photo-1557160836-f3a6d1afaab2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRyYXZlbCUyMGJhZ3xlbnwwfHwwfHx8MA%3D%3D"},
    {name: "Hand Bag", headline: "Soft Like Cloud", price: "70$", image: "https://plus.unsplash.com/premium_photo-1678739395192-bfdd13322d34?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHJhdmVsJTIwYmFnfGVufDB8fDB8fHww"},
    {name: "Trolley bag", headline: "Feels like foam", price: "200$", image: "https://images.unsplash.com/photo-1630573133579-75e54088eb4a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJhdmVsJTIwYmFnfGVufDB8fDB8fHww"},
    {name: "Travelling bag", headline: "Wooden stool", price: "100$", image: "https://images.unsplash.com/photo-1557160836-f3a6d1afaab2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRyYXZlbCUyMGJhZ3xlbnwwfHwwfHx8MA%3D%3D"},
];

let cart = [];


function addProducts(){
let clutter = "";
products.forEach(function(product,index){
     clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden ">
                    <img src="${product.image}" alt="">
                </div>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-30">${product.headline}</h3>
                            <h4 class="font-semibold mt-2">${product.price}</h4>
                        </div>
                        <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400" title="Add to Cart">
                            <i data-index="${index}" class="add ri-add-line"></i>
                        </button>
                    </div>
                </div>
            </div>`;

})

document.querySelector('.products').innerHTML = clutter;

}

function addPopularProducts(){
    let clutter = "";
    popular.forEach(function(product){
        clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img class="w-full h-full object-cover"
                            src="${product.image}"
                            alt="">
                    </div>
                    <div class="data py-2 w-full">
                        <h1 class="leading-none font-semibold">${product.name}</h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headline}</h4>
                        <h4 class="mt-3 font-semibold text-zinc-500">${product.price}</h4>
                    </div>
                </div>`;
    })
    document.querySelector('.populars').innerHTML = clutter;
}

function addToCart(){
    document.querySelector(".products")
    .addEventListener("click",(details)=>{
        if(details.target.classList.contains("add")){
            cart.push(products[details.target.dataset.index])
            console.log(cart);
        }
        
    })
}

function showCart(){
    document.querySelector(".carticon")
    .addEventListener("click",()=>{
        document.querySelector(".cartexpand").style.display = "block";

        let clutter = "";
        cart.forEach(function(product, index){
            clutter += `<div class="cartproduct flex items-center gap-2 bg-white p-2 rounded-lg">
                        <div class="w-10 h-10 flex-shrink-0 rounded-lg border-4 border-white overflow-hidden">
                            <img class="w-full h-full object-cover"
                                src="${product.image}"
                                alt="">
                        </div>
                        <div class="data py-2 w-full">
                            <h1 class="leading-none font-semibold">${product.name}</h1>
                            <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headline}</h4>
                            <h4 class="mt-3 font-semibold text-zinc-500">${product.price}</h4>
                        </div>
                    </div>`;
        })
        document.querySelector(".cartexpand").innerHTML = clutter;
    })
}

showCart()
addToCart()
addPopularProducts()
addProducts()



