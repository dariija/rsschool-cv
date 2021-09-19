const burgerMenu = document.querySelector(".burger");
const navMenu = document.querySelector(".nav__inner");  
const body = document.querySelector("body");
const linkParent = document.querySelector(".nav__link").parentElement;

burgerMenu.addEventListener("click", function() {
    navMenu.classList.toggle("nav__inner--show");
    body.classList.toggle("no-scroll");
});

linkParent.addEventListener("click", function(event) {
    if ( event.target.classList.contains("nav__link")) {
        navMenu.classList.remove("nav__inner--show");
        body.classList.remove("no-scroll");
    }
})

