const play = document.getElementById("play");
const img = document.querySelector(".playbtn");

play.addEventListener("click", () => {
    img.src = "./img/pause.svg";

    setTimeout(() => {
        img.src = "./img/playbtn.svg"; 
    }, 9000); 
});

