// const box1 = document.getElementById("box1");
// const button = document.getElementById("generateBtn");

// function getRandomColor() {
//   return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
// }

// button.addEventListener("click", () => {
//   box1.style.backgroundColor = getRandomColor();
// });

// let box=document.querySelector(".box");
// let generateBtn=document.querySelector(".btn");
// let colors=["red","blue","orange","purple","red","pink","grey","olive"]
// let stopbtn=document
// function randomcolor(){
//   let index=Math.floor(Math.random()*colors.length)
//   let color=colors[index]
//   return color

// }
// generateBtn.addEventListener("click",function(){
//   // let color=randomcolor()
//   // box.style.background=color;
//   setInterval(()=>{
//     let color=randomcolor()
//     box.style.background=color
//   },5000)
// })
// stopbtn.addEventListener("click",function(){
//   if(IntervalId){
//     clearInterval(intervalId)
//   }
// })
let box = document.querySelector(".box");
let generateBtn = document.querySelector(".btn");
let stopBtn = document.querySelector(".stopbtn");

let colors = ["red", "blue", "orange", "purple", "red", "pink", "grey", "olive"];

function randomcolor() {
  let index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

let intervalId = null; // variable to store the interval ID

generateBtn.addEventListener("click", function () {
  // Prevent multiple intervals
  if (intervalId) return;

  intervalId = setInterval(() => {
    let color = randomcolor();
    box.style.background = color;
  }, 1000);

  // Change color immediately on click (optional)
  let color = randomcolor();
  box.style.background = color;
});

stopBtn.addEventListener("click", function () {
  if (intervalId) {
    clearInterval(intervalId)
  }
});
