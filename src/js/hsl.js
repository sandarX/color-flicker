const changeBtn = document.getElementById("changeBtn");
const color = document.getElementById("color");

changeBtn.addEventListener("click", () => {
    const hslColor = `hsl(${getRandomColor(360)},${getRandomColor(100)}%,${getRandomColor(100)}%)`
    document.querySelector("main").style.backgroundColor = hslColor;
    color.textContent = hslColor;
}); 

function getRandomColor(max) {
    return Math.floor(Math.random() *max);
}