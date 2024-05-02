const canvas = document.querySelector(".canvas");
const context = canvas.getContext('2d');
const winGif = document.getElementById("WinGif");
var exitImg = document.getElementById('exit-img');
let player = {
    x:15,
    y:5,
    width:30,
    height:15
};
let playerPosition ;

function afficherPlayer(){
    context.clearRect(0,0,canvas.width, canvas.height);
    context.fillStyle = 'black';
    context.fillRect(player.x, player.y, player.width, player.height);
}
function afficherExit(){
    context.drawImage(exitImg, 255 , 120 , 30 , 20);
};

function Maze(){
    context.beginPath();

    context.moveTo(0, 60);
    context.lineTo(60, 60);

    context.moveTo(60, 60);
    context.lineTo(60, 30);

    context.moveTo(60, 30);
    context.lineTo(120, 30);

    context.moveTo(240, 0);
    context.lineTo(240, 30);

    context.moveTo(180, 30);
    context.lineTo(180, 60);

    context.moveTo(60, 90);
    context.lineTo(120, 90);

    context.moveTo(120, 90);
    context.lineTo(120, 60);

    context.moveTo(120, 60);
    context.lineTo(240, 60);

    context.moveTo(240, 60);
    context.lineTo(240, 120);

    context.moveTo(240, 120);
    context.lineTo(300, 120);

    context.moveTo(60, 120);
    context.lineTo(180, 120);

    context.moveTo(180, 90);
    context.lineTo(180, 150);

    context.stroke();
}

function StartToReStartBtn (){
    var btn = document.querySelector(".btn");
    var restartbtn = document.querySelector(".restartbtn");

    btn.style.display = "none";
    restartbtn.style.display = "inline-block";
}

function Start(){
    StartToReStartBtn();
    afficherPlayer();
    afficherExit();
    Maze();
}

function Restart(){
    location.reload();
}

function Stay(){
    afficherPlayer();
    afficherExit();
    Maze();
}

function Win(){
    canvas.style.display = "none";
    winGif.style.display = "inline-block";

}

window.addEventListener("keydown", function(e){
    switch (e.code){
        case 'ArrowUp':
            if((player.y - 30) > 0 
            && (player.x + "," + player.y)!== ("75,35") 
            && (player.x + "," + player.y)!== ("15,65") 
            && (player.x + "," + player.y)!== ("135,65") 
            && (player.x + "," + player.y)!== ("195,65") 
            && (player.x + "," + player.y)!== ("75,95") 
            && (player.x + "," + player.y)!== ("75,125") 
            && (player.x + "," + player.y)!== ("135,125") 
            && (player.x + "," + player.y)!== ("255,125")
            
            ){
                player.y -= 30;
                afficherPlayer();
                afficherExit();
                Maze();
            }else{
                Stay()
            }
            break;

        case 'ArrowDown':
            if((player.y + player.height + 30) < canvas.height
            && (player.x + "," + player.y)!== ("75,5")
            && (player.x + "," + player.y)!== ("15,35")
            && (player.x + "," + player.y)!== ("135,35")
            && (player.x + "," + player.y)!== ("195,35")
            && (player.x + "," + player.y)!== ("75,65")
            && (player.x + "," + player.y)!== ("75,95")
            && (player.x + "," + player.y)!== ("135,95")
            && (player.x + "," + player.y)!== ("255,95")
        
            ){
                player.y += 30;
                afficherPlayer();
                afficherExit();
                Maze();
            }else{
                Stay()
            }
            break;

        case 'ArrowLeft':
            if((player.x - 60) > 0
            && (player.x + "," + player.y)!== ("255,5")
            && (player.x + "," + player.y)!== ("75,35")
            && (player.x + "," + player.y)!== ("195,35")
            && (player.x + "," + player.y)!== ("135,65")
            && (player.x + "," + player.y)!== ("255,65")
            && (player.x + "," + player.y)!== ("195,95")
            && (player.x + "," + player.y)!== ("255,95")
            && (player.x + "," + player.y)!== ("195,125")
        
            ){
                player.x -= 60;
                afficherPlayer();
                afficherExit();
                Maze();
            }else{
                Stay()
            }
            break;

        case 'ArrowRight':
            if((player.x + player.width + 60) < canvas.width
            && (player.x + "," + player.y)!== ("195,5")
            && (player.x + "," + player.y)!== ("15,35")
            && (player.x + "," + player.y)!== ("135,35")
            && (player.x + "," + player.y)!== ("75,65")
            && (player.x + "," + player.y)!== ("195,65")
            && (player.x + "," + player.y)!== ("135,95")
            && (player.x + "," + player.y)!== ("195,95")
            && (player.x + "," + player.y)!== ("135,125")
            
            
            
            ){
                player.x += 60;
                afficherPlayer();
                afficherExit();
                Maze();
            }else{
                Stay()
            }
            break;
    }

    if ((player.x + "," + player.y) === ("255,125")){
        Win();
    }
})