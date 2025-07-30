const box1 = document.getElementById("box1");
const button = document.getElementById("generateBtn");

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
}

button.addEventListener("click", () => {
  box1.style.backgroundColor = getRandomColor();
});
