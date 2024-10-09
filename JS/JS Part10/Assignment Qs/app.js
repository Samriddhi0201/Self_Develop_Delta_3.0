// Solution of Q1

const test = document.getElementById("test");
test.addEventListener("mouseout",( event) => {
        event.target.style.color = "orange";
        setTimeout(() => {
        event.target.style.color = "";
      }, 500);
    },
    false,
  );
const inp = document.querySelector("#input");
inp.addEventListener("keypress",  function () {
    console.log("keypressed inside input")
})

const element = document.querySelector("div#scroll-box");
const output = document.querySelector("p#output");

element.addEventListener("scroll", (event) => {
  output.innerHTML = "Scroll event fired!";
  setTimeout(() => {
    output.innerHTML = "Waiting on scroll events...";
  }, 1000);
});

window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
  });

  
// Solution of Q2

let button = document.createElement('button');
button.innerText ="Click Me";
button.id = 'btn';
console.log(button)
button.addEventListener('click', changeColor);
document.querySelector("body").append(button);

function changeColor() {
    var button = document.getElementById('btn');
    button.style.backgroundColor = 'green';
}


// Solution of Q3

var input = document.createElement('input');
input.type = 'text';
input.id = 'username';
input.placeholder = 'Enter your name';
input.addEventListener('input', updateHeading); // Add event listener for input event
document.querySelector("body").append( input);

var h2 = document.createElement('h2');
h2.id = 'output';
document.body.append(h2);

function updateHeading() {
    var value = document.getElementById('username').value;

    // Regular expression to match only letters (a-z, A-Z) and space
    var regex = /^[a-zA-Z\s]*$/;

    // Check if the input matches the regex
    if (regex.test(value)) {
        document.getElementById('output').textContent =  value;
    } else {
        // If input contains invalid characters, remove them and update the heading
        var sanitizedValue = value.replace(/[^a-zA-Z\s]/g, '');
        document.getElementById('output').textContent = "User Name: " + sanitizedValue;
    }
}