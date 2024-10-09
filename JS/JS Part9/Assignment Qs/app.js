// Solution of Q1

let input = document.createElement("input");
let button = document.createElement("button");
button.innerText ="Click Me";
document.querySelector("body").append(input);
document.querySelector("body").append(button);

// Solution of Q2

button.setAttribute("id","btn");
input.setAttribute("placeholder" , "username");


// Solution of Q3

let btn = document.querySelector("#btn");
btn.classList.add("button");


// Solution of Q4

let h1=document.createElement("h1");
h1.innerHTML=" <u> DOM Practice </u> "; 
document.querySelector("body").append(h1);


// Solution of Q5

let p=document.createElement("p"); 
p.innerHTML="Apna College <b> Delta</b> Practice";
 document.querySelector("body").append(p);