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

function playSecond(currentSecond) {
    for (let i = 0; i < 8; i++) {
        const button = all_buttons[i][currentSecond];
        const sound = beatmap[i][currentSecond];

        if (!button.classList.contains("snd")) {
            sound.muted = false;
            sound.play();
            button.style.backgroundColor = 'red';

            // Устанавливаем обработчик onended только для воспроизведенных звуков
            sound.onended = function() {
                button.style.backgroundColor = ''; // Возвращаем исходный цвет после окончания звука
            };
        } else {
            sound.muted = true;
            button.style.backgroundColor = ''; // Или другой цвет для выключенного звука
        }
    }
}


playButton.addEventListener('click', function() {
  // При клике на play, последовательно воспроизводим звуки для каждой секунды
  for (let currentSecond = 0; currentSecond < 9; currentSecond++) {
    setTimeout(() => {
      playSecond(currentSecond);
    }, currentSecond * 1000); // Задержка в 1 секунду * номер секунды. Предполагаем, что длительность каждой секунды - 1000мс.
  }
});


playButton.addEventListener('click', () =>{
    alert("open")
});






