const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
let prev=0;
btn.addEventListener("click", () => {
  let randomNumber = getRandomNumber();
  while(randomNumber===prev)
  {
    randomNumber=getRandomNumber();
  }
  prev=randomNumber;
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

getRandomNumber = () => {
    return Math.floor(Math.random()*4);
};
