const btn = document.getElementById("rollDiceBtn");
const image = document.getElementById("diceImage");
const text = document.getElementById("diceText");

let diceValue;

function rollDice(){
  diceValue = Math.floor(Math.random()*6)+1;
  image.src=`images/${diceValue}.png`
  text.textContent = diceValue
}
