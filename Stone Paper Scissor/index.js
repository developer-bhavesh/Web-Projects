const username = document.getElementById("userName");
username.textContent = prompt("Enter Your Name: ");
const userImage = document.getElementById("userImage");

function stonegame(){
  let userChoice="stone"
  game(userChoice)
}
function papergame(){
  let userChoice="paper"
  game(userChoice)
}
function scissorgame(){
  let userChoice="scissor"
  game(userChoice)
}

function game(userChoice){
  console.log(`user choice is ${userChoice}`);
  
}