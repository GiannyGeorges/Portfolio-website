let Container = document.querySelector(".container");

let player1Text = document.querySelector(".player1-text");
let player2Text = document.querySelector(".player2-text");

let player1Arrow = document.querySelector(".player1-arrow");
let player2Arrow = document.querySelector(".player2-arrow");

let animations = document.querySelector(".animated-playboard");
let playboard = document.querySelector(".playboard");

let Img1 = document.querySelector(".img1");
let Img2 = document.querySelector(".img2");
let Img3 = document.querySelector(".img3");
let Img4 = document.querySelector(".img4");
let Img5 = document.querySelector(".img5");
let Img6 = document.querySelector(".img6");
let Img7 = document.querySelector(".img7");
let Img8 = document.querySelector(".img8");
let Img9 = document.querySelector(".img9");

let YouWin = document.querySelector(".youWin");
let StartBtn = document.querySelector(".btn-start");
let RestartBtn = document.querySelector(".Restart-btn");


let none = ["img1Value","img2Value","img3Value","img4Value","img5Value","img6Value","img7Value","img8Value","img9Value"];


function start (){
    player1Text.style.display = "block";
    player2Text.style.display = "block";
    player1Arrow.style.display = "block";

    animations.style.display = "none";
    playboard.style.display = "grid";
};

function FindNumberClickedandErase(index){
    let IndexOfValue = none.indexOf(index);
    if (IndexOfValue != -1){
        spliceNoneArray(IndexOfValue);
    };
}

function spliceNoneArray(index){
    none.splice(index,1);
};

function CheckWin() {

    var SrcImg1Boolean = Img1.src.includes("croix");
    var SrcImg2Boolean = Img2.src.includes("croix");
    var SrcImg3Boolean = Img3.src.includes("croix");
    var SrcImg4Boolean = Img4.src.includes("croix");
    var SrcImg5Boolean = Img5.src.includes("croix");
    var SrcImg6Boolean = Img6.src.includes("croix");
    var SrcImg7Boolean = Img7.src.includes("croix");
    var SrcImg8Boolean = Img8.src.includes("croix");
    var SrcImg9Boolean = Img9.src.includes("croix");
    
    if (  SrcImg1Boolean === true && SrcImg2Boolean === true && SrcImg3Boolean === true ){
        Container.style.display="none";
        YouWin.style.display = "block";

    }
    else if (  SrcImg4Boolean === true && SrcImg5Boolean === true && SrcImg6Boolean === true ){
        Container.style.display="none";
        YouWin.style.display = "block";

    }
    else if (  SrcImg7Boolean === true && SrcImg8Boolean === true && SrcImg9Boolean === true ){
        Container.style.display="none";
        YouWin.style.display = "block";

    }
    else if (  SrcImg1Boolean === true && SrcImg4Boolean === true && SrcImg7Boolean === true ){
        Container.style.display="none";
        YouWin.style.display = "block";

    }
    else if (  SrcImg2Boolean === true && SrcImg5Boolean === true && SrcImg8Boolean === true ){
        Container.style.display="none";
        YouWin.style.display = "block";

    }
    else if (  SrcImg3Boolean === true && SrcImg6Boolean === true && SrcImg9Boolean === true ){
        Container.style.display="none";
        YouWin.style.display = "block";

    }
    else if (  SrcImg1Boolean === true && SrcImg5Boolean === true && SrcImg9Boolean === true ){
        Container.style.display="none";
        YouWin.style.display = "block";

    }
    else if (  SrcImg3Boolean === true && SrcImg5Boolean === true && SrcImg7Boolean === true ){
        Container.style.display="none";
        YouWin.style.display = "block";

    }
}    

function ComputerTurn (){
    player1Arrow.style.display = "none";
    player2Arrow.style.display = "block";
}
function PlayerTurn (){
    player1Arrow.style.display = "block";
    player2Arrow.style.display = "none";
}

function Clicked1(){
    Img1.src="../TicTacToe/images/croix.png";
    Img1.style.display = "block";

    ComputerTurn ();

    FindNumberClickedandErase('img1Value');

    setTimeout (Clicked1ComputerTurn , 500);

    setTimeout (setTimeout (CheckWin(), 500), 500);
}
function Clicked1ComputerTurn (){
    let RandomNumber = Math.random() * (none.length);
        RandomNumber = Math.floor(RandomNumber);
        RandomNumber = RandomNumber + 1;

    let RandomValueOfArray = none [RandomNumber]
    if (RandomValueOfArray === "img6Value" ){
        Img6.src="../TicTacToe/images/rond.png";``
        Img6.style.display = "block";
        FindNumberClickedandErase('img6Value');
    }else if (RandomValueOfArray === "img2Value" ){
        Img2.src="../TicTacToe/images/rond.png";``
        Img2.style.display = "block";
        FindNumberClickedandErase('img2Value');
    }else if (RandomValueOfArray === "img3Value" ){
        Img3.src="../TicTacToe/images/rond.png";``
        Img3.style.display = "block";
        FindNumberClickedandErase('img3Value');
    }else if (RandomValueOfArray === "img4Value" ){
        Img4.src="../TicTacToe/images/rond.png";``
        Img4.style.display = "block";
        FindNumberClickedandErase('img4Value');
    }else if (RandomValueOfArray === "img5Value" ){
        Img5.src="../TicTacToe/images/rond.png";``
        Img5.style.display = "block";
        FindNumberClickedandErase('img5Value');
    }else if (RandomValueOfArray === "img7Value" ){
        Img7.src="../TicTacToe/images/rond.png";``
        Img7.style.display = "block";
        FindNumberClickedandErase('img7Value');
    }else if (RandomValueOfArray === "img8Value" ){
        Img8.src="../TicTacToe/images/rond.png";``
        Img8.style.display = "block";
        FindNumberClickedandErase('img8Value');
    }else if (RandomValueOfArray === "img9Value" ){
        Img9.src="../TicTacToe/images/rond.png";``
        Img9.style.display = "block";
        FindNumberClickedandErase('img9Value');
    }

    PlayerTurn ();
}
function Clicked2(){
    Img2.src="../TicTacToe/images/croix.png";
    Img2.style.display = "block";

    ComputerTurn ();

    FindNumberClickedandErase('img2Value');

    setTimeout (Clicked2ComputerTurn , 500);

    setTimeout (CheckWin(), 500);
}
function Clicked2ComputerTurn(){
    let RandomNumber = Math.random() * (none.length);
    RandomNumber = Math.floor(RandomNumber);
    RandomNumber = RandomNumber + 1;  

    let RandomValueOfArray = none [RandomNumber]

    if (RandomValueOfArray === "img6Value" ){
        Img6.src="../TicTacToe/images/rond.png";``
        Img6.style.display = "block";
        FindNumberClickedandErase('img6Value');
    } else if (RandomValueOfArray === "img1Value" ){
        document.querySelector(".img1").src="../TicTacToe/images/rond.png";``
        document.querySelector(".img1").style.display = "block";
        FindNumberClickedandErase('img1Value');
    }else if (RandomValueOfArray === "img3Value" ){
        Img3.src="../TicTacToe/images/rond.png";``
        Img3.style.display = "block";
        FindNumberClickedandErase('img3Value');
    }else if (RandomValueOfArray === "img4Value" ){
        Img4.src="../TicTacToe/images/rond.png";``
        Img4.style.display = "block";
        FindNumberClickedandErase('img4Value');
    }else if (RandomValueOfArray === "img5Value" ){
        Img5.src="../TicTacToe/images/rond.png";``
        Img5.style.display = "block";
        FindNumberClickedandErase('img5Value');
    }else if (RandomValueOfArray === "img7Value" ){
        Img7.src="../TicTacToe/images/rond.png";``
        Img7.style.display = "block";
        FindNumberClickedandErase('img7Value');
    }else if (RandomValueOfArray === "img8Value" ){
        Img8.src="../TicTacToe/images/rond.png";``
        Img8.style.display = "block";
        FindNumberClickedandErase('img8Value');
    }else if (RandomValueOfArray === "img9Value" ){
        Img9.src="../TicTacToe/images/rond.png";``
        Img9.style.display = "block";
        FindNumberClickedandErase('img9Value');
    }

    PlayerTurn ();
}
function Clicked3(){
    Img3.src="../TicTacToe/images/croix.png";
    Img3.style.display = "block";

    ComputerTurn ();

    FindNumberClickedandErase('img3Value');

    setTimeout (Clicked3ComputerTurn , 500);

    setTimeout (CheckWin(), 500);
}
function Clicked3ComputerTurn(){
    let RandomNumber = Math.random() * (none.length);
        RandomNumber = Math.floor(RandomNumber);
        RandomNumber = RandomNumber + 1;   

    let RandomValueOfArray = none [RandomNumber]
    
    if (RandomValueOfArray === "img6Value" ){
        Img6.src="../TicTacToe/images/rond.png";``
        Img6.style.display = "block";
        FindNumberClickedandErase('img6Value');
    } else if (RandomValueOfArray === "img2Value" ){
        Img2.src="../TicTacToe/images/rond.png";``
        Img2.style.display = "block";
        FindNumberClickedandErase('img2Value');
    }else if (RandomValueOfArray === "img1Value" ){
        document.querySelector(".img1").src="../TicTacToe/images/rond.png";``
        document.querySelector(".img1").style.display = "block";
        FindNumberClickedandErase('img1Value');
    }else if (RandomValueOfArray === "img4Value" ){
        Img4.src="../TicTacToe/images/rond.png";``
        Img4.style.display = "block";
        FindNumberClickedandErase('img4Value');
    }else if (RandomValueOfArray === "img5Value" ){
        Img5.src="../TicTacToe/images/rond.png";``
        Img5.style.display = "block";
        FindNumberClickedandErase('img5Value');
    }else if (RandomValueOfArray === "img7Value" ){
        Img7.src="../TicTacToe/images/rond.png";``
        Img7.style.display = "block";
        FindNumberClickedandErase('img7Value');
    }else if (RandomValueOfArray === "img8Value" ){
        Img8.src="../TicTacToe/images/rond.png";``
        Img8.style.display = "block";
        FindNumberClickedandErase('img8Value');
    }else if (RandomValueOfArray === "img9Value" ){
        Img9.src="../TicTacToe/images/rond.png";``
        Img9.style.display = "block";
        FindNumberClickedandErase('imgValue');
    }
    PlayerTurn ();
}
function Clicked4(){
    Img4.src="../TicTacToe/images/croix.png";
    Img4.style.display = "block";

    ComputerTurn ();

    FindNumberClickedandErase('img4Value');

    setTimeout (Clicked4ComputerTurn , 500);

    setTimeout (CheckWin(), 500);
}
function Clicked4ComputerTurn(){
    let RandomNumber = Math.random() * (none.length);
        RandomNumber = Math.floor(RandomNumber);
        RandomNumber = RandomNumber + 1;    

    let RandomValueOfArray = none [RandomNumber]
    
    if (RandomValueOfArray === "img6Value" ){
        Img6.src="../TicTacToe/images/rond.png";``
        Img6.style.display = "block";
        FindNumberClickedandErase('img6Value');
    } else if (RandomValueOfArray === "img2Value" ){
        Img2.src="../TicTacToe/images/rond.png";``
        Img2.style.display = "block";
        FindNumberClickedandErase('img2Value');
    }else if (RandomValueOfArray === "img3Value" ){
        Img3.src="../TicTacToe/images/rond.png";``
        Img3.style.display = "block";
        FindNumberClickedandErase('img3Value');
    }else if (RandomValueOfArray === "img1Value" ){
        document.querySelector(".img1").src="../TicTacToe/images/rond.png";``
        document.querySelector(".img1").style.display = "block";
        FindNumberClickedandErase('img1Value');
    }else if (RandomValueOfArray === "img5Value" ){
        Img5.src="../TicTacToe/images/rond.png";``
        Img5.style.display = "block";
        FindNumberClickedandErase('img5Value');
    }else if (RandomValueOfArray === "img7Value" ){
        Img7.src="../TicTacToe/images/rond.png";``
        Img7.style.display = "block";
        FindNumberClickedandErase('img7Value');
    }else if (RandomValueOfArray === "img8Value" ){
        Img8.src="../TicTacToe/images/rond.png";``
        Img8.style.display = "block";
        FindNumberClickedandErase('img8Value');
    }else if (RandomValueOfArray === "img9Value" ){
        Img9.src="../TicTacToe/images/rond.png";``
        Img9.style.display = "block";
        FindNumberClickedandErase('img9Value');
    }
    PlayerTurn ();
}
function Clicked5(){
    Img5.src="../TicTacToe/images/croix.png";
    Img5.style.display = "block";

    ComputerTurn ();

    FindNumberClickedandErase('img5Value');

    setTimeout (Clicked5ComputerTurn , 500);

    setTimeout (CheckWin(), 500);
}
function Clicked5ComputerTurn(){
    let RandomNumber = Math.random() * (none.length);
    RandomNumber = Math.floor(RandomNumber);
    RandomNumber = RandomNumber + 1;    

    let RandomValueOfArray = none [RandomNumber]   

    if (RandomValueOfArray === "img6Value" ){
        Img6.src="../TicTacToe/images/rond.png";``
        Img6.style.display = "block";
        FindNumberClickedandErase('img6Value');
    } else if (RandomValueOfArray === "img2Value" ){
        Img2.src="../TicTacToe/images/rond.png";``
        Img2.style.display = "block";
        FindNumberClickedandErase('img2Value');
    }else if (RandomValueOfArray === "img3Value" ){
        Img3.src="../TicTacToe/images/rond.png";``
        Img3.style.display = "block";
        FindNumberClickedandErase('img2Value');
    }else if (RandomValueOfArray === "img4Value" ){
        Img4.src="../TicTacToe/images/rond.png";``
        Img4.style.display = "block";
        FindNumberClickedandErase('img4Value');
    }else if (RandomValueOfArray === "img1Value" ){
        document.querySelector(".img1").src="../TicTacToe/images/rond.png";``
        document.querySelector(".img1").style.display = "block";
        FindNumberClickedandErase('img1Value');
    }else if (RandomValueOfArray === "img7Value" ){
        Img7.src="../TicTacToe/images/rond.png";``
        Img7.style.display = "block";
        FindNumberClickedandErase('img7Value');
    }else if (RandomValueOfArray === "img8Value" ){
        Img8.src="../TicTacToe/images/rond.png";``
        Img8.style.display = "block";
        FindNumberClickedandErase('img8Value');
    }else if (RandomValueOfArray === "img9Value" ){
        Img9.src="../TicTacToe/images/rond.png";``
        Img9.style.display = "block";
        FindNumberClickedandErase('img9Value');
    }
    PlayerTurn ();
}
function Clicked6(){
    Img6.src="../TicTacToe/images/croix.png";
    Img6.style.display = "block";

    ComputerTurn ();

    FindNumberClickedandErase('img6Value');

    setTimeout (Clicked6ComputerTurn , 500);  

    setTimeout (CheckWin(), 500);
}
function Clicked6ComputerTurn(){
    let RandomNumber = Math.random() * (none.length);
        RandomNumber = Math.floor(RandomNumber);
        RandomNumber = RandomNumber + 1;

    let RandomValueOfArray = none [RandomNumber]
    
    if (RandomValueOfArray === "img1Value" ){
        document.querySelector(".img1").src="../TicTacToe/images/rond.png";``
        document.querySelector(".img1").style.display = "block";
        FindNumberClickedandErase('img1Value');
    } else if (RandomValueOfArray === "img2Value" ){
        Img2.src="../TicTacToe/images/rond.png";``
        Img2.style.display = "block";
        FindNumberClickedandErase('img2Value');
    }else if (RandomValueOfArray === "img3Value" ){
        Img3.src="../TicTacToe/images/rond.png";``
        Img3.style.display = "block";
        FindNumberClickedandErase('img3Value');
    }else if (RandomValueOfArray === "img4Value" ){
        Img4.src="../TicTacToe/images/rond.png";``
        Img4.style.display = "block";
        FindNumberClickedandErase('img4Value');
    }else if (RandomValueOfArray === "img5Value" ){
        Img5.src="../TicTacToe/images/rond.png";``
        Img5.style.display = "block";
        FindNumberClickedandErase('img5Value');
    }else if (RandomValueOfArray === "img7Value" ){
        Img7.src="../TicTacToe/images/rond.png";``
        Img7.style.display = "block";
        FindNumberClickedandErase('img7Value');
    }else if (RandomValueOfArray === "img8Value" ){
        Img8.src="../TicTacToe/images/rond.png";``
        Img8.style.display = "block";
        FindNumberClickedandErase('img8Value');
    }else if (RandomValueOfArray === "img9Value" ){
        Img9.src="../TicTacToe/images/rond.png";``
        Img9.style.display = "block";
        FindNumberClickedandErase('img9Value');
    }
    PlayerTurn ();
}
function Clicked7(){
    Img7.src="../TicTacToe/images/croix.png";
    Img7.style.display = "block";

    ComputerTurn ();

    FindNumberClickedandErase('img7Value');

    setTimeout (Clicked7ComputerTurn , 500);

    setTimeout (CheckWin(), 500);
}
function Clicked7ComputerTurn(){
    let RandomNumber = Math.random() * (none.length);
        RandomNumber = Math.floor(RandomNumber);
        RandomNumber = RandomNumber + 1;

    let RandomValueOfArray = none [RandomNumber]
    
    if (RandomValueOfArray === "img6Value" ){
        Img6.src="../TicTacToe/images/rond.png";``
        Img6.style.display = "block";
        FindNumberClickedandErase('img6Value');
    } else if (RandomValueOfArray === "img2Value" ){
        Img2.src="../TicTacToe/images/rond.png";``
        Img2.style.display = "block";
        FindNumberClickedandErase('img2Value');
    }else if (RandomValueOfArray === "img3Value" ){
        Img3.src="../TicTacToe/images/rond.png";``
        Img3.style.display = "block";
        FindNumberClickedandErase('img3Value');
    }else if (RandomValueOfArray === "img4Value" ){
        Img4.src="../TicTacToe/images/rond.png";``
        Img4.style.display = "block";
        FindNumberClickedandErase('img4Value');
    }else if (RandomValueOfArray === "img5Value" ){
        Img5.src="../TicTacToe/images/rond.png";``
        Img5.style.display = "block";
        FindNumberClickedandErase('img5Value');
    }else if (RandomValueOfArray === "img1Value" ){
        document.querySelector(".img1").src="../TicTacToe/images/rond.png";``
        document.querySelector(".img1").style.display = "block";
        FindNumberClickedandErase('img1Value');
    }else if (RandomValueOfArray === "img8Value" ){
        Img8.src="../TicTacToe/images/rond.png";``
        Img8.style.display = "block";
        FindNumberClickedandErase('img8Value');
    }else if (RandomValueOfArray === "img9Value" ){
        Img9.src="../TicTacToe/images/rond.png";``
        Img9.style.display = "block";
        FindNumberClickedandErase('img9Value');
    }
    PlayerTurn ();
}
function Clicked8(){
    Img8.src="../TicTacToe/images/croix.png";
    Img8.style.display = "block";

    ComputerTurn ();

    FindNumberClickedandErase('img8Value');

    setTimeout (Clicked8ComputerTurn , 500);

    setTimeout (CheckWin(), 500);
}
function Clicked8ComputerTurn(){
    let RandomNumber = Math.random() * (none.length);
        RandomNumber = Math.floor(RandomNumber);
        RandomNumber = RandomNumber + 1;

    let RandomValueOfArray = none [RandomNumber]
    
    if (RandomValueOfArray === "img6Value" ){
        Img6.src="../TicTacToe/images/rond.png";``
        Img6.style.display = "block";
        FindNumberClickedandErase('img6Value');
    } else if (RandomValueOfArray === "img2Value" ){
        Img2.src="../TicTacToe/images/rond.png";``
        Img2.style.display = "block";
        FindNumberClickedandErase('img2Value');
    }else if (RandomValueOfArray === "img3Value" ){
        Img3.src="../TicTacToe/images/rond.png";``
        Img3.style.display = "block";
        FindNumberClickedandErase('img3Value');
    }else if (RandomValueOfArray === "img4Value" ){
        Img4.src="../TicTacToe/images/rond.png";``
        Img4.style.display = "block";
        FindNumberClickedandErase('img4Value');
    }else if (RandomValueOfArray === "img5Value" ){
        Img5.src="../TicTacToe/images/rond.png";``
        Img5.style.display = "block";
        FindNumberClickedandErase('img5Value');
    }else if (RandomValueOfArray === "img7Value" ){
        Img7.src="../TicTacToe/images/rond.png";``
        Img7.style.display = "block";
        FindNumberClickedandErase('img7Value');
    }else if (RandomValueOfArray === "img1Value" ){
        document.querySelector(".img1").src="../TicTacToe/images/rond.png";``
        document.querySelector(".img1").style.display = "block";
        FindNumberClickedandErase('img1Value');
    }else if (RandomValueOfArray === "img9Value" ){
        Img9.src="../TicTacToe/images/rond.png";``
        Img9.style.display = "block";
        FindNumberClickedandErase('img9Value');
    }
    PlayerTurn ();
}
function Clicked9(){
    Img9.src="../TicTacToe/images/croix.png";
    Img9.style.display = "block";

    ComputerTurn ();

    FindNumberClickedandErase('img9Value');

    setTimeout (Clicked9ComputerTurn , 500);  
    
    setTimeout (CheckWin(), 500);
}
function Clicked9ComputerTurn(){
    let RandomNumber = Math.random() * (none.length);
        RandomNumber = Math.floor(RandomNumber);
        RandomNumber = RandomNumber + 1;

    let RandomValueOfArray = none [RandomNumber]
    
    if (RandomValueOfArray === "img6Value" ){
        Img6.src="../TicTacToe/images/rond.png";``
        Img6.style.display = "block";
        FindNumberClickedandErase('img6Value');
    } else if (RandomValueOfArray === "img2Value" ){
        Img2.src="../TicTacToe/images/rond.png";``
        Img2.style.display = "block";
        FindNumberClickedandErase('img2Value');
    }else if (RandomValueOfArray === "img3Value" ){
        Img3.src="../TicTacToe/images/rond.png";``
        Img3.style.display = "block";
        FindNumberClickedandErase('img3Value');
    }else if (RandomValueOfArray === "img4Value" ){
        Img4.src="../TicTacToe/images/rond.png";``
        Img4.style.display = "block";
        FindNumberClickedandErase('img4Value');
    }else if (RandomValueOfArray === "img5Value" ){
        Img5.src="../TicTacToe/images/rond.png";``
        Img5.style.display = "block";
        FindNumberClickedandErase('img5Value');
    }else if (RandomValueOfArray === "img7Value" ){
        Img7.src="../TicTacToe/images/rond.png";``
        Img7.style.display = "block";
        FindNumberClickedandErase('img7Value');
    }else if (RandomValueOfArray === "img8Value" ){
        Img8.src="../TicTacToe/images/rond.png";``
        Img8.style.display = "block";
        FindNumberClickedandErase('img8Value');
    }else if (RandomValueOfArray === "img1Value" ){
        document.querySelector(".img1").src="../TicTacToe/images/rond.png";``
        document.querySelector(".img1").style.display = "block";
        FindNumberClickedandErase('img1Value');
    }
    PlayerTurn ();
}

function Restart(){
    location.reload();
}
