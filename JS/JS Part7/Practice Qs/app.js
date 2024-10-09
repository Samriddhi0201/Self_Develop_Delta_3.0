// Solution of Q1
const square =  (n) =>{
    return n *n;
}
let Square = square(8);
console.log(Square);

//2nd way
const squares = (n) => n*n;
console.log(squares(11));

//Solution of Q2

let id = setInterval( () =>{
    console.log("Hello World");
    
}, 2000);
setTimeout( () =>{
    clearInterval(id);
    console.log("setInterval run Completely")
},10000);