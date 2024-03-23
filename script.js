let openBtn = document.querySelector(".bi-list");
let closeBtn = document.querySelector(".bi-x-lg");
let menu = document.querySelector(".navbar-menu");
let menuIcons = document.querySelector(".navbar-icons");
let navLinks = document.querySelectorAll(".navbar-link");

openBtn.addEventListener("click", () =>{
    openBtn.classList.toggle("hide");
    closeBtn.classList.toggle("hide");
    menu.classList.toggle("hidden");
    menu.classList.toggle("active");
    menuIcons.classList.toggle("active");
});
closeBtn.addEventListener("click", () =>{
    openBtn.classList.toggle("hide");
    closeBtn.classList.toggle("hide");
    menu.classList.toggle("hidden");
    menu.classList.toggle("active");
    menuIcons.classList.toggle("active");
});
