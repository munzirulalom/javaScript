// Exercise 1: Guess the number
// Prize Amount: Rs 500 Amazon voucher
let number = Math.floor(Math.random() * 200) // Generate random number between 0 to 100
let chances = 0
// Keep asking for the number until the correct number is guessed
// Increment the chances variable

// Eventually after the game is over, display the (100 - Number of chances) and the actual number
let guess
do{
    guess = prompt("Guess the number: ")
    if(guess > number){
        console.log("Your guess "+guess+" is getter then the actual number!")
    }else if(guess < number){
        console.log("Your guess "+guess+" is less then the actual number!")
    }
    chances++
}while(guess != number && chances<100)
console.log("The number is: ", number)
console.log("Your Score is: ", 100-chances+1)