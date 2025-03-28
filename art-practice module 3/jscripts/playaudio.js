let lines = document.querySelectorAll(".c1"); 
let sound;

lines.forEach(line => {
    line.addEventListener("click", function () {
        console.log("btn is pressed!");
        sound = new Audio('./sounds/screen3/sound3.mp3');
        sound.play().catch((error) => console.error('Error playing audio:', error));
    });
});