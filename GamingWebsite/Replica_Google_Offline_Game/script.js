var char = document.getElementById("char");
var obs = document.getElementById("obs");

function jump(){
    if (char.classList != "animate"){
        char.classList.add("animate");
    }
    setTimeout(function(){
        char.classList.remove("animate");
    },500)
}

var death = setInterval(function() {
    var charTop = parseInt(window.getComputedStyle(char).getPropertyValue("top"));
    var obsLeft = parseInt(window.getComputedStyle(obs).getPropertyValue("left"));

    if (obsLeft < 100 && obsLeft > 0 && charTop >=250){
        obs.style.animation = "none";
        obs.style.display = "none";

        char.style.animation = "none";
        char.style.display = "none";

        document.getElementById("gameover").style.display="block";
    }
},10);

function reload(){
    location.reload()
}