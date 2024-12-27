let area;
let circum;
let value_radius;
const PI = 3.14

document.getElementById("calculate").onclick = function(){
  value_radius = Number(document.getElementById("radius").value);
  area = PI*(value_radius*value_radius)
  circum = 2*PI*value_radius
  document.getElementById("area").textContent = `Area = ${area}`
  document.getElementById("circum").textContent = `Circumference = ${circum.toPrecision(4)}`

}
