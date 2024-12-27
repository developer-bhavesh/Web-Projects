const ftoc = document.getElementById("ftoc");
const ctof = document.getElementById("ctof");
const result = document.getElementById("result");



function convert(){

    if(ftoc.checked){
      const temp = document.getElementById("inputTemp").value;
      result.textContent = `${temp} F = ${(Number(temp)-32)*(5/9)} C`

    }else if(ctof.checked){
      const temp = document.getElementById("inputTemp").value;
      result.textContent = `${temp} C = ${(Number(temp)*9/5)+32} F`;

    }else{
      result.textContent = `Choose from above Scale`
    }
}