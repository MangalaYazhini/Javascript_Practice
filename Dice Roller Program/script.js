const rollBtn = document.getElementById("rollBtn");
const resultPara = document.getElementById("resultPara");
const resultImg = document.getElementById("resultImg");


rollBtn.onclick = function() {
  let num = Math.floor(Math.random() * 6) + 1; 
  console.log(`${num}`);
  resultImg.src = `images/dice${num}.png`;
  resultImg.width = 100;

  resultPara.innerHTML = `You Rolled ${num}!`;
  
}