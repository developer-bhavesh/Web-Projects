let age;
const textvalue = document.getElementById("ageText");
const btn = document.getElementById("ageBtn");

btn.onclick = function(){
  console.log('executing')
  age = Number(textvalue.value)

  if(age>=18){

    window.alert('You are 18+ and you can access site!')

  }else{

    window.alert('You aren`t 18+ and can`t access site!')

  }
}