//Solution of Practice Q1

function poem(){
       let poem ="You get dignity, When you stop thinking wrong When you do what you learn right You can live dignified, When you live a lifestyle that, matches your vision. You can get dignity when you renounce the “ego of individuality”. and rejoice ups and downs of life. There is dignity, when you have good thoughts, in your heart and mind.";
       console.log(poem)
}
poem();

//Solution of Practice Q2

function rollDice(){
       let dice = Math.floor(Math.random() * 6) + 1;
       console.log(dice);
}
rollDice();

//Solution of Practice Q3

function average(){
       let num1 = 59;
       let num2 = 89;
       let num3 = 49;
       let avg = (num1 + num2 + num3)/3;
       console.log(`Average of three number is ${avg}`);
}

average();

// Solution of Practice Q4

function  table(){
       let num = 15;
       for(let i = 1; i <= 10 ; i++){
              let table = num *i;
              console.log(`Multiplication table of ${num} *${i} is ${table}`);
       } 
}

table();

// Solution of Q5

function returnSum() {
       n =5;
       let sum =0;
       for(let i = 1 ; i<= n; i++){
              sum = sum +i;
       }
       return sum ;
}
let sum = returnSum();
console.log(sum);
 
// Solution of Q6

function concatString(strArray){
       let sentence ="";
       for(let i = 0 ; i < strArray.length ; i++ ){
              sentence = sentence.concat(strArray[i]);
       }
       return sentence;
}
let strArray = ["This" , "is", "my", "first", "paid" ,"learning" , "course"];
let concatedString = concatString(strArray);
console.log(concatedString)

// Solution of Q7

let greet ="hello"
function changeGreet(){
let greet ="namaste";
console.log(greet);
function innerGreet() {
console.log(greet);
}
}
console.log(greet);
changeGreet();