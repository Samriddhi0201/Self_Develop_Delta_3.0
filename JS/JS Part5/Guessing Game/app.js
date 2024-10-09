const max = prompt("Enter the maximum Number:");
console.log(max)

const num = Math.floor(Math.random() * max) +1;
console.log(num);

let guess = prompt("Guess the Number");

while(true){
    console.log(guess)
    if(guess == "quit"){
        console.log("User Quit the game");
        break;
    }
    if (guess == num){
        console.log(`User guess the correct Number. Congrats !!  Your guessed number is ${guess}.`);
        break;
    }
    else if(guess <  num){
        guess = prompt(`Hint : Your guess was too small. Please guess again ${guess}.`);
    }
    else{
        guess = prompt(`Hint: Your guess was too large. Please guess again ${guess}.`);
    }
    
}