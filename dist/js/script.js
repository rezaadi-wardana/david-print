const menubar = document.querySelector(".menu-bar");
const menunav = document.querySelector(".menu");
const pesan1 = document.getElementById("pesan1");
const pesan1After = document.getElementById("pesan1After");
const pesan2 = document.getElementById("pesan2");
const pesan2After = document.getElementById("pesan2After");


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

const btnDetail1 = document.getElementById("btnDetail1");
const detail1 = document.getElementById("detail1");
let doubleKlik = 0;
pesan1After.classList.add("hide");

btnDetail1.addEventListener("click", () => {
    pesan1After.classList.add("hide");
    doubleKlik++;
    setTimeout(() => {
        if (doubleKlik === 1){
            detail1.style.display = "unset";
            document.getElementById("paragrafProduk1").style.textAlign = "left";
            btnDetail1.innerText = "Sembunyikan";
            pesan1.classList.add("hide");
            pesan1After.classList.remove("hide");
        }if (doubleKlik === 2){
            detail1.style.display = "none";
            document.getElementById("paragrafProduk1").style.textAlign = "center";
            btnDetail1.innerText = "Detail";
            pesan1.classList.remove("hide");            
            doubleKlik = 0;
        }
    }, 300);
    
});

const btnDetail2 = document.getElementById("btnDetail2");
const detail2 = document.getElementById("detail2");
pesan2After.classList.add("hide");


btnDetail2.addEventListener("click", () => {
    pesan2After.classList.add("hide");
    doubleKlik++;
    setTimeout(() => {
        if (doubleKlik === 1){
            detail2.style.display = "unset";
            document.getElementById("paragrafProduk2").style.textAlign = "left";
            btnDetail2.innerText = "Sembunyikan";
            pesan2.classList.add("hide");
            pesan2After.classList.remove("hide");
        }if (doubleKlik === 2){
            detail2.style.display = "none";
            document.getElementById("paragrafProduk2").style.textAlign = "center";
            btnDetail2.innerText = "Detail";
            pesan2.classList.remove("hide");            
            doubleKlik = 0;
        }
    }, 300);
    
});

