const changeBtn = document.getElementById("changeBtn");
const color = document.getElementById("color");

changeBtn.addEventListener("click", () => {
  const rgbColor = `rgb(${getRandomColor()},${getRandomColor()},${getRandomColor()})`;
  document.querySelector("main").style.backgroundColor = rgbColor;
  color.textContent = rgbColor;
});

function getRandomColor() {
  return Math.floor(Math.random() * 256);
}
