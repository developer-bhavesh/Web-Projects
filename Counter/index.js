const increase = document.getElementById("up");
const reset = document.getElementById("reset");
const decrease = document.getElementById("down");
const counter = document.getElementById("counter");
let count = 0;

increase.onclick = function(){
  count++;
  counter.textContent = count;
}
reset.onclick = function(){
  count=0;
  counter.textContent = count;
}
decrease.onclick = function(){
  count--;
  counter.textContent = count;
}