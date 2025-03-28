const buttons = document.querySelectorAll(".snd");
let beatmap = [];
for(let i=0; i<8; i++){
    beatmap[i] = [];
    switch(i) {
        case 0:
            audio = new Audio('./sounds/screen3/sound1.mp3');
            break;
        case 1:
            audio = new Audio('./sounds/screen3/sound2.mp3');
            break;
        case 2:
            audio = new Audio('./sounds/screen3/sound3.mp3');
            break;
        case 3:
            audio = new Audio('./sounds/screen3/sound4.mp3');
            break;
        case 4:
            audio = new Audio('./sounds/screen3/sound5.mp3');
            break;
        case 5:
            audio = new Audio('./sounds/screen3/sound6.wav');
            break;
        case 6:
            audio = new Audio('./sounds/screen2/g2.wav');
            break;
        case 7:
            audio = new Audio('./sounds/screen2/e.wav');
            break;
        case 8:
            audio = new Audio('./sounds/screen2/d.wav');
            break;
            
        default:
          // code block
      }
    
    for(let j=0; j<9; j++){
        beatmap[i][j] = audio;
    }
}
all_buttons = [];
k=0;
for(let i=0; i<8; i++){
    all_buttons[i] = []
    for(let j=0; j<9; j++){
        all_buttons[i][j] = buttons[k];
        k = k+1;
        all_buttons[i][j].addEventListener('click', function(){
            console.log('clicked!');
            if (all_buttons[i][j].classList.contains("snd")) {
                all_buttons[i][j].classList.remove("snd");
                beatmap[i][j].play();
              } else {
                all_buttons[i][j].classList.add("snd");
              }
        });
    }
}


playButton = document.getElementById("play");
playButton.addEventListener('click', function(){
    playSecond(0);
});

function playSecond(currentSecond) {
    for (let i = 0; i < 8; i++) {
        const button = all_buttons[i][currentSecond];
        const sound = beatmap[i][currentSecond];

        if (!button.classList.contains("snd")) {
            sound.muted = false;
            sound.play();
            button.style.backgroundColor = '#0F83FB';

            sound.onended = function() {
                button.style.backgroundColor = ''; 
            };
        } 
    }
}


playButton.addEventListener('click', function() {
  // 
  for (let currentSecond = 0; currentSecond < 9; currentSecond++) {
    setTimeout(() => {
      playSecond(currentSecond);
    }, currentSecond * 1000); 
  }
});

let button5 = document.getElementById("tones2")
const img = document.querySelector(".playbtn");
const progress = document.querySelector(".fill");
play.addEventListener("click", () => {
    console.log("press");
    progress.style.animation = 'none';
    void progress.offsetWidth;
 progress.style.animation = "fill 11s linear";
 img.src = "./img/pause.svg";
    document.getElementById("play").disabled = true;
    setTimeout(() => {
        img.src = "./img/playbtn.svg"; 
        document.getElementById("play").disabled = false;
        progress.style.animation = 'none';
    }, 9000); 
});
button5.addEventListener("click", () => {
    progress.style.animation = 'none';
    img.src = "./img/playbtn.svg";
    
})
let timer = 0;
let interval1;
const time = document.getElementById("count");
play.addEventListener("click", () => {
    if (!interval1) {
        interval1 = setInterval(() => {
            timer += 1;

            
            if (timer >=10 ) {
                clearInterval(interval1); 
                interval1 = null; // 
                timer = 0; 
            }

            time.textContent = timer;
        }, 1000); 
    }
});





