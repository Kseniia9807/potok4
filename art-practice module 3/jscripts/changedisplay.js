const button = document.getElementById("beats")
const button2 = document.getElementById("beats2")
const button3 = document.getElementById("tones")
const button4 = document.getElementById("tones2")
const screen = document.getElementById("section1")
const screen2 = document.getElementById("section2")
const screen3 = document.getElementById("section3")

button.addEventListener("click", () => {
    screen.style.display = "none";
    screen3.style.display = "block";
});
button2.addEventListener("click", () => {
    screen2.style.display = "none";
    screen3.style.display = "block";
});
button3.addEventListener("click", () => {
    screen.style.display = "none";
    screen2.style.display = "block";
});
button4.addEventListener("click", () => {
    screen3.style.display = "none";
    screen2.style.display = "block";
});

