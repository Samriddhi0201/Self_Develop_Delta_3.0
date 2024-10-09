// Solution of  (i.)

let para1 = document.createElement('p');
para1.innerText = "Hey I'm red!";
document.querySelector("body").append(para1);
para1.classList.add("red");


// Solution of  (ii.)

let h3 = document.createElement('h3');
h3.innerText = "I'm blue h3!";
document.querySelector("body").append(h3);
h3.classList.add("blue");


// Solution of  (iii.)

let div = document.createElement('div');
let h1 = document.createElement('h1');
let para = document.createElement('p');
h1.innerText = "I'm in a div"
para.innerText = "MEE TOO";
div.append(h1);
div.append(para);
document.querySelector("body").append(div);
div.classList.add("box");