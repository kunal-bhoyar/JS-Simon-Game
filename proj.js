let gameseq = [];
let userseq = [];

let btns = ["red", "yellow", "green", "purple"];
let h2 = document.querySelector("h2");

let started = false;
let level = 0;

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game is Started");
        started = true;

        levelup();
    }
});



function gameflash(btn){

    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },1000);

}

function userflash(btn){

    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    },500);

}


function levelup(){
   
    userseq = [];

    level++;
    h2.innerText = `Level ${level}`;

    let randIndx = Math.floor(Math.random()*btns.length);
    let randColor = btns[randIndx];
    let randBtn = document.querySelector(`.${randColor}`);

    //console.log(randIndx);
    //console.log(randColor);
    //console.log(randBtn);

    gameseq.push(randColor);
    console.log(gameseq);
    gameflash(randBtn);

}

function checkans(idx){
    // console.log(" current Level", level);

    if(userseq[idx] === gameseq[idx]){
        if( userseq.length == gameseq.length){
            setTimeout( levelup , 1000);
        }
    } else {
        h2.innerHTML = `Game over! Your Score Was :-  <b>${ level }</b>  <br> <br> Press Any Key To Start Again.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor="white";
        },200);
        reset();  
    }
}


function btnpress() {
    // console.log(this);
    let btn = this;
    userflash(btn);

    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);

    checkans(userseq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click" , btnpress);
}

function reset(){
    started = false;
    gameseq = []; 
    userseq = [];
    level = 0;
}