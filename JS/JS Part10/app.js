// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function (){
//     alert("button was clicked");
// }

// let btns = document.querySelectorAll("button");
// for(btn of btns)
// {
//     // btn.onclick =sayHello
//     // console.dir(btn);
//     // btn.onmouseenter = function () {
//     //     console.log("You Entered over a button");

//     // }

//     btn.addEventListener("click", sayHello);
//     btn.addEventListener("click", sayName);
//     btn.addEventListener("dblclick", function(){
//         console.log("you double clicked me")
//     });

// }
// function sayHello(){
//     alert("hello");
// }

// function sayName(){
//     alert("Samriddhi Mishra")
// }

//btn.onclick = sayHello;


let p =document.querySelector("p");
p.addEventListener("click" , function () {
    console.log("para is clicked")
})


let box =document.querySelector(".box");
box.addEventListener("mouseenter" , function () {
    console.log("mouse inside box")
})


let button =document.querySelector(".button");
button.addEventListener("click" , changeColor)


let h3 =document.querySelector("h3");
h3.addEventListener("click" , changeColor
)
let h1 =document.querySelector("h1");
h1.addEventListener("click" ,changeColor)


let para =document.querySelector(".para");
para.addEventListener("click" ,changeColor)

function changeColor(){
    console.log(this.innerText);
    this.style.backgroundColor = "Blue";
}

let newButton =document.querySelector(".btn");

newButton.addEventListener("click" , function(event){
    console.log(event);
    console.log("buttonClicked")
})



let inp = document.querySelector("input");
inp.addEventListener("keydown" , function(event){
    console.log("key =", event.key);
    console.log("code =" ,event.code); //Arrowup ,Arrowdown , Arrowleft , Arrowright
    console.log("key is pressed")
    if(event.code == "Arrowup"){
        console.log("character moves forward");
    }
    else if(event.code == "Arrowdown"){
        console.log("character moves backward");
    }
    else if(event.code == "Arrowleft"){
        console.log("character moves left");
    }
    else if(event.code == "Arrowright"){
        console.log("character moves right");
    }
})


let form = document.querySelector("form")

form.addEventListener("submit", function (event){
    event.preventDefault();
 // console.log("form Submitted");

  let user = this.elements[0]; //form.elements[0]
//   console.log(user);
//   console.dir(user);
  console.log(user.value); 
  let password = this.elements[1];
//   console.log(password);
//   console.dir(password);
  console.log(password.value);
console.dir(form);
  alert(`Hi ${user.value}, your password is set to ${pass.value}`);
});

let inputs = document.querySelector("#text");
let paragraph = document.querySelector("#p");

inputs.addEventListener("input", function(){
    console.log(inputs.value)
    paragraph.innerText =inputs.value
})






















