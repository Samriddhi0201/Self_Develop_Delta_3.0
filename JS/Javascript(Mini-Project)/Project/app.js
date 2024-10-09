let gameSeq = [];
let userSeq = [];

let btns = ['one' , 'two' , 'three' , 'four']


let started = false;
let level = 0;
let h2 = document.querySelector('h2');

document.querySelector('body').addEventListener("keypress" , function(){
   if (started == false){
    console.log("game is started")
    started = true;
    
    levelUp();
   } 

});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function () { 
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function (){
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++; 
    console.log("level" , level)
    h2.innerText =`Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`); 
    //  console.log(randIdx);
    //  console.log(randColor);
    //  console.log(randBtn);
    gameSeq.push(randColor)
    console.log("game",gameSeq)
    gameFlash(randBtn);
}

function checkButton(idx){
 //  console.log("curr level :" ,level)
    // let idx = level - 1;
    console.log("index :" , idx)
    console.log("in :" , userSeq[idx])
    console.log("inde :" , gameSeq[idx])
    if (userSeq[idx] === gameSeq[idx]){
        console.log("same value")
        console.log("abc",userSeq.length)
        console.log("def" ,gameSeq.length)
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp ,1000);
        }
    }
    else{
        h2.innerHTML = `Game Over! Your Score was <b>${level}</b>. <br> Press any key to start.`
        document.querySelector('body').style.backgroundColor ="red";
        setTimeout(function () {
            document.querySelector('body').style.backgroundColor ="white";
        }, 150);
        reset();
    }
}

function btnPress(){
    //console.log(this)
    let btn = this;
    userFlash(btn);
    
     userColor = btn.getAttribute("id");
  //  console.log("id" , userColor)
    userSeq.push(userColor)
    console.log("user" ,userSeq)
    console.log("lenv",userSeq.length-1)
   checkButton(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click" , btnPress);
}


function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level= 0;
}