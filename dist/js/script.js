const menubar = document.querySelector(".menu-bar");
const menunav = document.querySelector(".menu");

menubar.addEventListener("click", () => {
    menunav.classList.toggle("menu-active");
});

const navBar= document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    const windowPosition = window.scrollY > 0;
    navBar.classList.toggle("scrolling-active", windowPosition);
    menunav.classList.remove("menu-active");
});