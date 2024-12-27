function rollDice(){

  const noDice = document.getElementById("numberOfDice").value;
  const diceText = document.getElementById("diceVales");
  const imageDiv = document.getElementById("imagesDiv");
  let diceValue;
  let Values = [];
  let images = [];

  for(i=1; i<=Number(noDice); i++){
    diceValue = Math.floor(Math.random()*6)+1;
    Values.push(diceValue);
    images.push(`<img src="images/${diceValue}.png">`)
  }

  imageDiv.innerHTML = images.join('')
  diceText.textContent = Values.join(" , ")
  
}