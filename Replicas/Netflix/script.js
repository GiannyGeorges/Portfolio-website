function FirstLogin(){
    const homePage = document.querySelector(".home-page");
    const profilePicking = document.querySelector(".profile-picking");

    profilePicking.style.display = "none";
    homePage.style.display = "block";
}

document.addEventListener( 'DOMContentLoaded', function() {
    var splide1 = new Splide( '#splide1' );
    var splide2 = new Splide('#splide2');
    var splide3 = new Splide('#splide3');
    splide1.mount();
    splide2.mount();
    splide3.mount();
    }
);

document.querySelector(".reponse1").style.display = "none";
document.querySelector(".reponse2").style.display = "none";
document.querySelector(".reponse3").style.display = "none";
document.querySelector(".reponse4").style.display = "none";
document.querySelector(".reponse5").style.display = "none";
document.querySelector(".reponse6").style.display = "none";

function toggle1(){
    const reponse1 = document.querySelector(".reponse1")
    const reponse2 = document.querySelector(".reponse2");
    const reponse3 = document.querySelector(".reponse3");
    const reponse4 = document.querySelector(".reponse4");
    const reponse5 = document.querySelector(".reponse5");
    const reponse6 = document.querySelector(".reponse6");
    if (reponse1.style.display === "none"){
        reponse1.style.display = "block";
        reponse1.style.height = "25vh";
        reponse2.style.display = "none";
        reponse3.style.display = "none";
        reponse4.style.display = "none";
        reponse5.style.display = "none";
        reponse6.style.display = "none";
    }else if(reponse1.style.display === "block") {
        reponse1.style.display = "none";
    };
};
function toggle2(){
    const reponse1 = document.querySelector(".reponse1")
    const reponse2 = document.querySelector(".reponse2");
    const reponse3 = document.querySelector(".reponse3");
    const reponse4 = document.querySelector(".reponse4");
    const reponse5 = document.querySelector(".reponse5");
    const reponse6 = document.querySelector(".reponse6");
    if (reponse2.style.display === "none"){
        reponse2.style.display = "block";
        reponse2.style.height = "18vh";
        reponse1.style.display = "none";
        reponse3.style.display = "none";
        reponse4.style.display = "none";
        reponse5.style.display = "none";
        reponse6.style.display = "none";
    }else if(reponse2.style.display === "block") {
        reponse2.style.display = "none";
    };
};
function toggle3(){
    const reponse1 = document.querySelector(".reponse1")
    const reponse2 = document.querySelector(".reponse2");
    const reponse3 = document.querySelector(".reponse3");
    const reponse4 = document.querySelector(".reponse4");
    const reponse5 = document.querySelector(".reponse5");
    const reponse6 = document.querySelector(".reponse6");
    if (reponse3.style.display === "none"){
        reponse3.style.display = "block";
        reponse3.style.height = "30vh";
        reponse1.style.display = "none";
        reponse2.style.display = "none";
        reponse4.style.display = "none";
        reponse5.style.display = "none";
        reponse6.style.display = "none";
    }else if(reponse3.style.display === "block") {
        reponse3.style.display = "none";
    };
};
function toggle4(){
    const reponse1 = document.querySelector(".reponse1")
    const reponse2 = document.querySelector(".reponse2");
    const reponse3 = document.querySelector(".reponse3");
    const reponse4 = document.querySelector(".reponse4");
    const reponse5 = document.querySelector(".reponse5");
    const reponse6 = document.querySelector(".reponse6");
    if (reponse4.style.display === "none"){
        reponse4.style.display = "block";
        reponse4.style.height = "18vh";
        reponse1.style.display = "none";
        reponse2.style.display = "none";
        reponse3.style.display = "none";
        reponse5.style.display = "none";
        reponse6.style.display = "none";
    }else if(reponse4.style.display === "block") {
        reponse4.style.display = "none";
    };
};
function toggle5(){
    const reponse1 = document.querySelector(".reponse1")
    const reponse2 = document.querySelector(".reponse2");
    const reponse3 = document.querySelector(".reponse3");
    const reponse4 = document.querySelector(".reponse4");
    const reponse5 = document.querySelector(".reponse5");
    const reponse6 = document.querySelector(".reponse6");
    if (reponse5.style.display === "none"){
        reponse5.style.display = "block";
        reponse5.style.height = "18vh";
        reponse1.style.display = "none";
        reponse2.style.display = "none";
        reponse3.style.display = "none";
        reponse4.style.display = "none";
        reponse6.style.display = "none";
    }else if(reponse5.style.display === "block") {
        reponse5.style.display = "none";
    };
};
function toggle6(){
    const reponse1 = document.querySelector(".reponse1")
    const reponse2 = document.querySelector(".reponse2");
    const reponse3 = document.querySelector(".reponse3");
    const reponse4 = document.querySelector(".reponse4");
    const reponse5 = document.querySelector(".reponse5");
    const reponse6 = document.querySelector(".reponse6");
    if (reponse6.style.display === "none"){
        reponse6.style.display = "block";
        reponse6.style.height = "25vh";
        reponse1.style.display = "none";
        reponse2.style.display = "none";
        reponse3.style.display = "none";
        reponse4.style.display = "none";
        reponse5.style.display = "none";
    }else if(reponse6.style.display === "block") {
        reponse6.style.display = "none";
    };
};

function ShowProfileBox() {
    const ProfileBox = document.querySelector(".changeProfileBox");
    const arrow = document.querySelector(".arrow");
    const NewsBox = document.querySelector(".newsBox");

    if (NewsBox.style.display == "block"){
        NewsBox.style.display = "none";
        ProfileBox.style.display = "block";
        arrow.style.rotate = "180deg";
    } else {
        ProfileBox.style.display = "block";
        arrow.style.rotate = "180deg";
    }
}
function HideProfileBox(){
    const ProfileBox = document.querySelector(".changeProfileBox");
    const arrow = document.querySelector(".arrow");

    ProfileBox.style.display = "none";
    arrow.style.rotate = "0deg";
}
function ShowNewsBox() {
    const ProfileBox = document.querySelector(".changeProfileBox");
    const arrow = document.querySelector(".arrow");
    const NewsBox = document.querySelector(".newsBox");

    if (ProfileBox.style.display == "block"){
        ProfileBox.style.display = "none";
        arrow.style.rotate = "0deg";
        NewsBox.style.display = "block";
    } else {
        NewsBox.style.display = "block";
    }
}
function HideNewsBox(){
    const NewsBox = document.querySelector(".newsBox");
    
    NewsBox.style.display = "none";
}