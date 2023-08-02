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

const btnDetail1 = document.getElementById("btnDetail1");
const detail1 = document.getElementById("detail1");
let doubleKlik = 0;

btnDetail1.addEventListener("click", () => {
    doubleKlik++;
    setTimeout(() => {
        if (doubleKlik === 1){
            detail1.style.display = "unset";
            document.getElementById("paragrafProduk1").style.textAlign = "left";
            btnDetail1.innerText = "Sembunyikan";
        }if (doubleKlik === 2){
            detail1.style.display = "none";
            document.getElementById("paragrafProduk1").style.textAlign = "center";
            btnDetail1.innerText = "Detail";
            doubleKlik = 0;
        }
    }, 300);
    
});

// const audio = new Audio('nama_file_audio.mp3');
// let doubleClickCount = 0;

// document.getElementById('tombol-audio').addEventListener('click', () => {
// doubleClickCount++;
// setTimeout(() => {
// if (doubleClickCount === 1) {
// // Jika hanya satu klik, putar audio
// audio.play();
// } else if (doubleClickCount === 2) {
// // Jika dua kali klik, hentikan audio
// audio.pause();
// audio.currentTime = 0;
// doubleClickCount = 0;
// }
// }, 300); // Tambahkan suatu waktu delay sebelum mengecek jumlah