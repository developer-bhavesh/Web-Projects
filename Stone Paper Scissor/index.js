const username = document.getElementById("userName");
username.textContent = prompt("Enter Your Name: ");
const userImage = document.getElementById("userImage");
const userScore = document.getElementById("userScore");
const computerScore = document.getElementById("oppScore");
const computerImage = document.getElementById("computerImage");
const oppImage = document.getElementById("oppImg");
const annocText = document.getElementById("annoc");

let userS = 0;
let compS = 0;

//variable to store consecutive wins for changing computer image
let userCons,CompCons = 0;



function game(userChoice){

  const randomNumber = Math.floor(Math.random()*3)+1;
  console.log(randomNumber);
  const computerchoice = randomNumber;

  if(userCons>=5){
    oppImage.src="images/opp_mad.png"
  }else if(userCons>=3){
    oppImage.src="images/opp_shocked.png"
  }else if(userCons>=2){
    oppImage.src="images/opp_cry.png"
  }

  if(CompCons>=1){
    oppImage.src="images/opp.png"
  }else if(CompCons>2){
    oppImage.src="images/opp_happy.png"
  }

  if(computerchoice==1){
    computerImage.src="images/stone.jpeg"
  }else if(computerchoice==2){
    computerImage.src="images/paper.jpeg"
  }else if(computerchoice==3){
    computerImage.src="images/scissor.jpeg"
  }
  if(userChoice==1){
    userImage.src="images/stone.jpeg"
  }else if(userChoice==2){
    userImage.src="images/paper.jpeg"
  }else if(userChoice==3){
    userImage.src="images/scissor.jpeg"
  }
  
  //if random number => 1 - stone , 2 - paper, 3 - scissor
 
  if(userChoice==1 && computerchoice==1){
    
    annocText.textContent = "Tie"
    
  }else if(userChoice==1 && computerchoice==2){

    compS++;
    computerScore.textContent = compS;
    annocText.textContent = "Computer Wins!"
    CompCons++;
    userCons=0;

  }else if(userChoice==1 && computerchoice==3){

    userS++;
    userScore.textContent = userS;
    annocText.textContent = `${username.textContent} Wins!`
    userCons++;
    CompCons=0;

  }else if(userChoice==2 && computerchoice==1){
    
    userS++;
    userScore.textContent = userS;
    annocText.textContent = `${username.textContent} Wins!`
    userCons++;
    CompCons=0;

  }else if(userChoice==2 && computerchoice==2){

    annocText.textContent = "Tie"
    
    
  }else if(userChoice==2 && computerchoice==3){
    compS++;
    computerScore.textContent = compS;
    annocText.textContent = "Computer Wins!"
    CompCons++;
    userCons=0;

  } else if(userChoice==3 && computerchoice==1){
    
    compS++;
    computerScore.textContent = compS;
    annocText.textContent = "Computer Wins!"
    CompCons++;
    userCons=0;

  }else if(userChoice==3 && computerchoice==2){

    userS++;
    userScore.textContent = userS;
    annocText.textContent = `${username.textContent} Wins!`
    userCons++;
    CompCons=0;
    
  }else if(userChoice==3 && computerchoice==3){

    annocText.textContent = "Tie"
    
    
  } 

  

}