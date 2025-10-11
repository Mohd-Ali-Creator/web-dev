const max = prompt("Enter a maximum number :");
console.log(max);

// generate  a random number
let randomNumber = Math.floor(Math.random() * max) + 1;


let guessNumber = prompt("Enter your guess Number :");
console.log(guessNumber);

while(true){
  // for quitting the game
  if(guessNumber == "quit" ){
    console.log("Game Over! you quit the game.");
    break;
  }

  if(randomNumber == guessNumber){
    console.log("Congratulations! You guessed the random number correctly.", randomNumber);
    break;
  }else if(randomNumber > guessNumber){

    guessNumber = prompt("Enter your guess Number as your guess is to low :");
  }else{

    guessNumber = prompt("Enter your guess Number as your guess is to high :");
  }
}
