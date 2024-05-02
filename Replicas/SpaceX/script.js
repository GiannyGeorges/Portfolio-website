window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;

    const toggle = 200;
    const fixed = 1140 ;
    const section3 = document.querySelector('.section3');

    if (Math.ceil(scrolled) >= 200 && Math.ceil(scrolled) <=220){
        animateValue1('value1-number', 100 , 310 ,1000);
        animateValue2('value2-number', 100 , 268 ,1000);
        animateValue3('value3-number', 100 , 241 ,1000);
    }
    
    if (Math.ceil(scrolled) >= 1195 && Math.ceil(scrolled) <= 1750) {
        section3.style.backgroundAttachment = "fixed";
    } else {
        section3.style.backgroundAttachment = "scroll";
    }
    console.log(scrolled , section3.style.backgroundAttachment);
});


function animateValue1(id, start, end, duration) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById("value1-number");
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}
function animateValue2(id, start, end, duration) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById("value2-number");
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}
function animateValue3(id, start, end, duration) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById("value3-number");
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-carousel' ).mount();
  } );

function overviewClick(){
    document.querySelector(".overview").style.display = "block";
    document.querySelector(".overview-tab").style.color = "white";
    document.querySelector(".engines").style.display = "none";
    document.querySelector(".engines-tab").style.color = "grey";
    document.querySelector(".landing").style.display = "none";
    document.querySelector(".landing-tab").style.color = "grey";
}
function enginesClick(){
    document.querySelector(".overview").style.display = "none";
    document.querySelector(".overview-tab").style.color = "grey";
    document.querySelector(".engines").style.display = "block";
    document.querySelector(".engines-tab").style.color = "white";
    document.querySelector(".landing").style.display = "none";
    document.querySelector(".landing-tab").style.color = "grey";
}
function landingClick(){
    document.querySelector(".overview").style.display = "none";
    document.querySelector(".overview-tab").style.color = "grey";
    document.querySelector(".engines").style.display = "none";
    document.querySelector(".engines-tab").style.color = "grey";
    document.querySelector(".landing").style.display = "block";
    document.querySelector(".landing-tab").style.color = "white";
}
function fairingClick(){
    document.querySelector(".fairing").style.display = "block";
    document.querySelector(".fairing-tab").style.color = "white";
    document.querySelector(".dragon").style.display = "none";
    document.querySelector(".dragon-tab").style.color = "grey";
}
function dragonClick(){
    document.querySelector(".fairing").style.display = "none";
    document.querySelector(".fairing-tab").style.color = "grey";
    document.querySelector(".dragon").style.display = "block";
    document.querySelector(".dragon-tab").style.color = "white";
}
function sealevelClick(){
    document.querySelector(".sealevel-txt-grid").style.display = "block";
    document.querySelector(".vacuum-txt-grid").style.display = "none";
    document.querySelector(".imgMerlin").src= "../SpaceX/images/Merlin1.png";
    document.querySelector(".sealevel-tab").style.color ="white";
    document.querySelector(".vacuum-tab").style.color ="grey";
}
function vacuumClick(){
    document.querySelector(".sealevel-txt-grid").style.display = "none";
    document.querySelector(".vacuum-txt-grid").style.display = "block";
    document.querySelector(".imgMerlin").src= "../SpaceX/images/Merlin2.png";
    document.querySelector(".sealevel-tab").style.color ="grey";
    document.querySelector(".vacuum-tab").style.color ="white";
}

const diapo = document.querySelector(".diapo")

let elements;
elements = document.querySelector(".elements")

let slides;
slides = Array.from(elements.children)

let next = document.querySelector("#nav-droite")
let prev = document.querySelector("#nav-gauche")

let compteur = 0 
let timer

let slideWidth
slideWidth = diapo.getBoundingClientRect().width

document.querySelector("#nav-droite").addEventListener("click", slideNext)
document.querySelector("#nav-gauche").addEventListener("click", slidePrev)

function slideNext(){
    compteur++

    if(compteur == slides.length){
        compteur = 0
    }

    let decal = -slideWidth * compteur
    elements.style.transform = `translateX(${decal}px)`
}

function slidePrev(){
    compteur--

    if(compteur < 0){
        compteur = slides.length - 1
    }

    let decal = -slideWidth * compteur
    elements.style.transform = `translateX(${decal}px)`
}


