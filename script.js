let bubbleOne1 = document.querySelector(".bubbleOne1");
let bubbleOne1Img = document.querySelector(".bubbleOne1 img");

let bubbleTwo1 = document.querySelector(".bubbleTwo1");
let bubbleTwo1Img = document.querySelector(".bubbleTwo1 img");

let linksOne = document.querySelector(".designs-links");
let linksTwo = document.querySelector(".games-links");

let bubbleOneState = 1;
let bubbleTwoState = 1;

function popOpenOrCloseOne() {
    const bubbleOneClosedStyle = {
        height: "50px",
        width: "50px",
        animationPlayState: "paused",
    };
    
    const bubbleOneOpenStyle = {
        height: "200px",
        width: "200px",
        animationPlayState: "running",
    };

    const bubbleTwoStyle = {
        height: "200px",
        width: "200px",
        animationPlayState: "running",
    };

    if (bubbleOneState === 1) {
        applyTransition(bubbleOne1, bubbleOneClosedStyle);
        applyTransition(bubbleTwo1, bubbleOneOpenStyle);
        bubbleOne1Img.style.display = "block";
        bubbleOneState = 2;
        linksOne.style.display = "block";
    } else if (bubbleOneState === 2) {
        applyTransition(bubbleOne1, bubbleOneOpenStyle);
        applyTransition(bubbleTwo1, bubbleTwoStyle);
        bubbleOne1Img.style.display = "none";
        bubbleOneState = 1;
        linksOne.style.display = "none";
    }

    if (bubbleTwoState === 2) {
        popOpenOrCloseTwo();
    }
}
function popOpenOrCloseTwo() {
    const bubbleTwoClosedStyle = {
        height: "50px",
        width: "50px",
        animationPlayState: "paused",
    };
    
    const bubbleTwoOpenStyle = {
        height: "200px",
        width: "200px",
        animationPlayState: "running",
    };

    const bubbleOneStyle = {
        height: "200px",
        width: "200px",
        animationPlayState: "running",
    };

    if (bubbleTwoState === 1) {
        applyTransition(bubbleTwo1, bubbleTwoClosedStyle);
        applyTransition(bubbleOne1, bubbleTwoOpenStyle);
        bubbleTwo1Img.style.display = "block";
        bubbleTwoState = 2;
        linksTwo.style.display = "block";
    } else if (bubbleTwoState === 2) {
        applyTransition(bubbleTwo1, bubbleTwoOpenStyle);
        applyTransition(bubbleOne1, bubbleOneStyle);
        bubbleTwo1Img.style.display = "none";
        bubbleTwoState = 1;
        linksTwo.style.display = "none";
    }

    if (bubbleOneState === 2) {
        popOpenOrCloseOne();
    }
}
function applyTransition(element, style) {
    element.style.transition = "all 0.5s ease-in-out"; 
    Object.assign(element.style, style);
}

let diaporamaPays = "rome";
let slideActive = document.querySelector(".diaporama-picture img")
let slide1 = document.querySelector(".slide1 img");
let slide2 = document.querySelector(".slide2 img");
let slide3 = document.querySelector(".slide3 img");
let slide4 = document.querySelector(".slide4 img");
let slide5 = document.querySelector(".slide5 img");
let slide6 = document.querySelector(".slide6 img");
let slidePosition = 1 ;

document.getElementsByClassName('highlight1')[0]
        .addEventListener('click', function (event) {
            diaporamaPays = "rome"
            console.log(diaporamaPays);
            slideActive.src = "/images/diaporama/Rome/1.JPG";
            slide1.src = "/images/diaporama/Rome/1.JPG";
            slide2.src = "/images/diaporama/Rome/2.JPG";
            slide3.src = "/images/diaporama/Rome/3.JPG";
            slide4.src = "/images/diaporama/Rome/4.JPG";
            slide5.src = "/images/diaporama/Rome/5.JPG";
            slide6.src = "/images/diaporama/Rome/6.JPG";
});
document.getElementsByClassName('highlight2')[0]
        .addEventListener('click', function (event) {
            diaporamaPays = "lourdes"
            console.log(diaporamaPays);
            slideActive.src = "/images/diaporama/Lourdes/1.JPG";
            slide1.src = "/images/diaporama/Lourdes/1.JPG";
            slide2.src = "/images/diaporama/Lourdes/2.JPG";
            slide3.src = "/images/diaporama/Lourdes/3.JPG";
            slide4.src = "/images/diaporama/Lourdes/4.JPG";
            slide5.src = "/images/diaporama/Lourdes/5.JPG";
            slide6.src = "/images/diaporama/Lourdes/6.JPG";
            
});
document.getElementsByClassName('highlight3')[0]
        .addEventListener('click', function (event) {
            diaporamaPays = "martinique"
            console.log(diaporamaPays);
            slideActive.src = "/images/diaporama/Martinique/1.JPG";
            slide1.src = "/images/diaporama/Martinique/1.JPG";
            slide2.src = "/images/diaporama/Martinique/2.JPG";
            slide3.src = "/images/diaporama/Martinique/3.JPG";
            slide4.src = "/images/diaporama/Martinique/4.JPG";
            slide5.src = "/images/diaporama/Martinique/5.JPG";
            slide6.src = "/images/diaporama/Martinique/6.jpeg";
});
document.getElementsByClassName('highlight4')[0]
        .addEventListener('click', function (event) {
            diaporamaPays = "guadeloupe"
            console.log(diaporamaPays);
            slideActive.src = "/images/diaporama/Guadeloupe/1.JPG";
            slide1.src = "/images/diaporama/Guadeloupe/1.JPG";
            slide2.src = "/images/diaporama/Guadeloupe/2.JPG";
            slide3.src = "/images/diaporama/Guadeloupe/3.JPG";
            slide4.src = "/images/diaporama/Guadeloupe/4.JPG";
            slide5.src = "/images/diaporama/Guadeloupe/5.JPG";
            slide6.src = "/images/diaporama/Guadeloupe/6.JPG";
            
});
document.getElementsByClassName('highlight5')[0]
        .addEventListener('click', function (event) {
            diaporamaPays = "bn"
            console.log(diaporamaPays);
            slideActive.src = "/images/diaporama/BretagneNormandie/1.JPG";
            slide1.src = "/images/diaporama/BretagneNormandie/1.JPG";
            slide2.src = "/images/diaporama/BretagneNormandie/2.JPG";
            slide3.src = "/images/diaporama/BretagneNormandie/3.JPG";
            slide4.src = "/images/diaporama/BretagneNormandie/4.JPG";
            slide5.src = "/images/diaporama/BretagneNormandie/5.JPG";
            slide6.src = "/images/diaporama/BretagneNormandie/6.JPG";
});
document.getElementsByClassName('highlight6')[0]
        .addEventListener('click', function (event) {
            diaporamaPays = "occi"
            console.log(diaporamaPays);
            slideActive.src = "/images/diaporama/Occitanie/1.JPG";
            slide1.src = "/images/diaporama/Occitanie/1.JPG";
            slide2.src = "/images/diaporama/Occitanie/2.JPG";
            slide3.src = "/images/diaporama/Occitanie/3.JPG";
            slide4.src = "/images/diaporama/Occitanie/4.JPG";
            slide5.src = "/images/diaporama/Occitanie/5.JPG";
            slide6.src = "/images/diaporama/Occitanie/6.JPG";
});

document.getElementsByClassName('slide1')[0]
        .addEventListener('click', function (event) {
            slideActive.src = slide1.src;
});
document.getElementsByClassName('slide2')[0]
        .addEventListener('click', function (event) {
            slideActive.src = slide2.src;
});
document.getElementsByClassName('slide3')[0]
        .addEventListener('click', function (event) {
            slideActive.src = slide3.src;
});
document.getElementsByClassName('slide4')[0]
        .addEventListener('click', function (event) {
            slideActive.src = slide4.src;
});
document.getElementsByClassName('slide5')[0]
        .addEventListener('click', function (event) {
            slideActive.src = slide5.src;
});
document.getElementsByClassName('slide6')[0]
        .addEventListener('click', function (event) {
            slideActive.src = slide6.src;
});

function nextPicture(){
    if (slidePosition === 1){
        slideActive.src = slide2.src;
        slidePosition = 2
    } else if (slidePosition === 2){
        slideActive.src = slide3.src;
        slidePosition = 3
    } else if (slidePosition === 3){
        slideActive.src = slide4.src;
        slidePosition = 4
    } else if (slidePosition === 4){
        slideActive.src = slide5.src;
        slidePosition = 5
    } else if (slidePosition === 5){
        slideActive.src = slide6.src;
        slidePosition = 6
    } else if (slidePosition === 6){
        slideActive.src = slide1.src;
        slidePosition = 1
    }
}
function previousPicture(){
    if (slidePosition === 1){
        slideActive.src = slide6.src;
        slidePosition = 6
    } else if (slidePosition === 2){
        slideActive.src = slide1.src;
        slidePosition = 1
    } else if (slidePosition === 3){
        slideActive.src = slide3.src;
        slidePosition = 3
    } else if (slidePosition === 4){
        slideActive.src = slide3.src;
        slidePosition = 3
    } else if (slidePosition === 5){
        slideActive.src = slide4.src;
        slidePosition = 4
    } else if (slidePosition === 6){
        slideActive.src = slide5.src;
        slidePosition = 5
    }
}
const bubbles = document.querySelector(".bubbles-list");

const bottomHeight = window.innerHeight / 5 * 4;
window.addEventListener('scroll' , checkBubbles);

function checkBubbles(){
    var bubblesTop = bubbles.getBoundingClientRect().top;
    console.log (bubblesTop);
    if (bubblesTop < bottomHeight){
        bubbles.classList.add('show');
    } else {
        bubbles.classList.remove('show');
    }
}

checkBubbles();