let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    let h3 =document.querySelector("h3");
    let randomColor =getRandomcolor();
    h3.innerText = randomColor;
    console.log("Generate random color")
    let div =document.querySelector("div");
    div.style.backgroundColor = randomColor;
})

function getRandomcolor(){
    let redColor = Math.floor(Math.random() *255);
    let blueColor = Math.floor(Math.random() *255);
    let greenColor = Math.floor(Math.random() *255);
let color = `rgb(${redColor} , ${blueColor} , ${greenColor})`;
    return color;
}