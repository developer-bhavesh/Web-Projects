const pass_length = document.getElementById("length");
const capital_letters = document.getElementById("capital_letters");
const small_letters = document.getElementById("small_letters");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const output = document.getElementById("output_password");

function password(){

  let allowedCharacters=""
  let password=""
  random_index=null
  
  if(capital_letters.checked){
    allowedCharacters+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }else{
    allowedCharacters+=""
  }

  if(small_letters.checked){
    allowedCharacters+="abcdefghijklmnopqrstvuwxyz"
  }else{
    allowedCharacters+=""
  }

  if(numbers.checked){
    allowedCharacters+="0123456789"
  }else{
    allowedCharacters+=""
  }

  if(symbols.checked){
    allowedCharacters+="!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
  }else{
    allowedCharacters+=""
  }

  if(pass_length.value<=7){
    alert("Password Length must be greater than 7");
  }

  if(allowedCharacters.length<=0){
    alert("Select any of below Character Set")
  }

  for(i=0; i<pass_length.value; i++){
    random_index = Math.floor(Math.random()*allowedCharacters.length);
    password += allowedCharacters[random_index]
  }

  if(pass_length.value>7 && allowedCharacters.length>0){
  output.textContent=password
  }else{
    output.textContent="Make valid choice!"
  }
  
  
}