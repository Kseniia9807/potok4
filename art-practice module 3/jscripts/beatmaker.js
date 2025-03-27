const buttons = document.querySelectorAll(".snd");
let beatmap = [];
for(let i=0; i<8; i++){
    beatmap[i] = [];
    switch(i) {
        case 0:
            audio = new Audio('./sounds/screen2/a.wav');
            break;
        case 1:
            audio = new Audio('./sounds/screen2/f.wav');
            break;
        case 2:
            audio = new Audio('./sounds/screen2/f2.wav');
            break;
        case 3:
            audio = new Audio('./sounds/screen2/c.wav');
            break;
        case 4:
            audio = new Audio('./sounds/screen2/c2.wav');
            break;
        case 5:
            audio = new Audio('./sounds/screen2/g.wav');
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

function playSecond(currentSecond){
    
    for(let i=0; i<8; i++){
        if(!all_buttons[i][currentSecond].classList.contains("snd")){
            beatmap[i][currentSecond].play();
            all_buttons[i][currentSecond].style.backgroundColor = 'red';
            beatmap[i][currentSecond].onended = function (){
                playSecond((currentSecond+1)%9);
            }
        }
    }
    
}
