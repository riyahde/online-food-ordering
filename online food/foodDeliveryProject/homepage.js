let ordernow = document.querySelector(".ordernow")
let targetcart= document.querySelector(".cart")
let menu = document.getElementById("menu")
let targetaddress = document.querySelector(".address")
let service = document.getElementById("service")
let register = document.getElementById("register")
let backtotop = document.getElementById("backtop")
let home = document.getElementById("home")
let carthome = document.querySelector(".cart-home")
let trolleyCart = document.querySelector("#trolley")


ordernow.addEventListener("click",()=>{
    targetcart.scrollIntoView({behavior : "smooth"})
})

menu.addEventListener("click",()=>{
    targetcart.scrollIntoView({behavior : "smooth"})
})

service.addEventListener("click",()=>{
    targetaddress.scrollIntoView({behavior : "instant"})
})

register.addEventListener("click",()=>{
    window.location.href="register.html"
})

backtotop.addEventListener("click",()=>{
    document.querySelector(".nav").scrollIntoView({behavior : "smooth"})
})

home.addEventListener("click",()=>{
    document.querySelector(".nav").scrollIntoView({behavior : "smooth"})
})

carthome.addEventListener("click",()=>{
    document.querySelector(".nav").scrollIntoView({behavior:"smooth"})
})

trolleyCart.addEventListener("click",(c)=>{
      c.preventDefault();
      window.location.href="cart.html"
})

function ATC(id, name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    showNotification(`Item added to cart!`);
}


// let addtoCart = document.querySelectorAll(".add-to-cart")
// addtoCart.forEach((ad)=>{
//     ad.addEventListener("click",(adc)=>{
//         showNotification("Item added to cart!");
//     })
// })

 //message box
function showNotification(message) {
    const container = document.querySelector(".alert-container") || createAlertContainer();
    
    const alert = document.createElement("div");
    alert.classList.add("alert");
    alert.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()">×</button>
    `;
    
    container.appendChild(alert);

    
    setTimeout(() => {
        alert.remove();
    }, 3000);
}

function createAlertContainer() {
    const container = document.createElement("div");
    container.classList.add("alert-container");
    document.body.appendChild(container);
    return container;
}
//message box end

let rightmenucart1 = document.querySelector(".rightMenu1")
let rightmenucart2 = document.querySelector(".rightMenu2")
let rightmenucart3 = document.querySelector(".rightMenu3")
let rightmenucart4 = document.querySelector(".rightMenu4")
let rightmenucart5 = document.querySelector(".rightMenu5")
let rightmenucart6 = document.querySelector(".rightMenu6")
let rightmenucart7 = document.querySelector(".rightMenu7")
let rightmenucart8 = document.querySelector(".rightMenu8")
let rightmenucart9 = document.querySelector(".rightMenu9")
let burger=document.querySelector("#burg")
let pizza = document.querySelector("#pizz")
let fd = document.querySelector("#foodcombo")
let cake = document.querySelector("#cake")
let sandwich = document.querySelector("#Sandwich")
let spring = document.querySelector("#Spring")
let beans = document.querySelector("#Green")
let Vegpuff = document.querySelector("#puff")
let salad = document.querySelector("#salad")

rightmenucart1.addEventListener("click",()=>{
    burger.scrollIntoView({behavior:"smooth"})
    burger.classList.add("highlight")
    // burger.style.backgroundColor="rgb(212, 202, 202)"
    setTimeout(() => {
        burger.classList.remove("highlight")
        //  burger.style.backgroundColor="white"
   }, 2000);
})
rightmenucart2.addEventListener("click",()=>{
    fd.scrollIntoView({behavior:"smooth"})
    fd.classList.add("highlight")
    // fd.style.backgroundColor="rgb(212, 202, 202)"
    setTimeout(() => {
        fd.classList.remove("highlight")
        //  fd.style.backgroundColor="white"
   }, 2000);
})

rightmenucart3.addEventListener("click",()=>{
    pizza.scrollIntoView({behavior:"smooth"})
    pizza.classList.add("highlight")
    //  pizza.style.backgroundColor="rgb(212, 202, 202)"
   setTimeout(() => {
    pizza.classList.remove("highlight")
    //    pizza.style.backgroundColor="white"
   }, 2000);
})
rightmenucart4.addEventListener("click",()=>{
    cake.scrollIntoView({behavior:"smooth"})
    cake.classList.add("highlight")
    //  cake.style.backgroundColor="rgb(212, 202, 202)"
   setTimeout(() => {
    cake.classList.remove("highlight")
    //    cake.style.backgroundColor="white"
   }, 2000);
})
rightmenucart5.addEventListener("click",()=>{
    sandwich.scrollIntoView({behavior:"smooth"});
    sandwich.classList.add("highlight")
    setTimeout(() => {
        sandwich.classList.remove("highlight")
        //    cake.style.backgroundColor="white"
       }, 2000);

})
rightmenucart6.addEventListener("click",()=>{
    spring.scrollIntoView({behavior:"smooth"});
    spring.classList.add("highlight")
    setTimeout(() => {
        spring.classList.remove("highlight")
        //    cake.style.backgroundColor="white"
       }, 2000);
})
rightmenucart7.addEventListener("click",()=>{
    beans.scrollIntoView({behavior:"smooth"});
    beans.classList.add("highlight")
    setTimeout(() => {
        beans.classList.remove("highlight")
        //    cake.style.backgroundColor="white"
       }, 2000);
})
rightmenucart8.addEventListener("click",()=>{
    Vegpuff.scrollIntoView({behavior:"smooth"});
    Vegpuff.classList.add("highlight")
    setTimeout(() => {
        Vegpuff.classList.remove("highlight")
        //    cake.style.backgroundColor="white"
       }, 2000);
})
rightmenucart9.addEventListener("click",()=>{
    salad.scrollIntoView({behavior:"smooth"});
    salad.classList.add("highlight")
    setTimeout(() => {
        salad.classList.remove("highlight")
        //    cake.style.backgroundColor="white"
       }, 2000);
})

let searchIcon = document.querySelector(".searchicon")
let darkmode = document.querySelector("#dark")
let logo = document.querySelector(".logo")
darkmode.addEventListener("click",()=>{
    darkmode.innerText="Light"
    darkmode.classList.toggle("invert")
    searchIcon.classList.toggle("invert")
    logo.classList.toggle("invert")
    document.body.classList.toggle("dark-mode")
    document.querySelector(".menu").classList.toggle("whitecolor")
})

let searchbar = document.querySelector("#searchbar")
let items = document.querySelectorAll(".card")

searchbar.addEventListener("keyup",function(){
    let datafilter = this.value.toLowerCase();

    items.forEach((a)=>{
        let itemflter = a.textContent.toLowerCase();

        if(itemflter.includes(datafilter)){
            a.style.display="";
        }
        else{
            a.style.display="none";
        }
    });
});

document.querySelector(".orderprocess").addEventListener("click",()=>{
    window.location.href="cart.html"
})


let searchico = document.querySelector(".searchicon")
searchico.addEventListener("click",()=>{
         document.querySelector(".right").scrollIntoView({behavior:"smooth"})
})