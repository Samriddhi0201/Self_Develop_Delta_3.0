let smalllImages = document.getElementsByClassName("oldImg");

for(let i = 0 ; i < smalllImages.length ; i++){
    console.log(smalllImages[i]);
    console.log(smalllImages[i].src);

}


console.log(document.querySelector("h1"));

console.log(document.querySelector("#description"));

console.log(document.querySelector(".oldImg"));

console.log(document.querySelectorAll("div a"));


let para = document.querySelector('#description');
console.log("para.innerText",para.innerText);
console.log("para.innerHTML",para.innerHTML);
console.log("para.textContent",para.textContent);  


let links = document.querySelectorAll(".box a");
for( let i = 0 ; i< links.length ;i++){
    links[i].style.color = "yellow";
}
