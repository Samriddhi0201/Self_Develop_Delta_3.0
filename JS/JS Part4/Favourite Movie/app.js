let favouriteMovie = "Jawan";
let guess = prompt("Enter my Favourite Movie:");
while((guess != favouriteMovie) && (guess != 'quit'))
{
    console.log("Wrong Guess")
    guess = prompt("Your Guess Incorrect .Try Again !");
}
if( guess == favouriteMovie){
    console.log("Congratulations,You guess Correct Movie.");
}
else{
    console.log("User Quit the Movie Game.");
}