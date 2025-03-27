
const aSharp = document.getElementById("set1");
let audio;

aSharp.addEventListener("click", function () {
    console.log("A note is pressed!");
   
        audio = new Audio('./sounds/screen2/a.wav');
        audio.play().catch((error) => console.error('Error playing audio:', error));
 
});
const bSharp = document.getElementById("set2");
let audio2;
bSharp.addEventListener("click", function () {
    console.log("B note is pressed!");
    audio2 = new Audio('./sounds/screen2/b.wav');
        audio2.play().catch((error) => console.error('Error playing audio:', error));
});
const c2Sharp = document.getElementById("set3");
let audio3;

c2Sharp.addEventListener("click", function () {
    console.log("C# note is pressed!");
    audio3 = new Audio('./sounds/screen2/c2.wav');
    audio3.play().catch((error) => console.error('Error playing audio:', error));
});
const a2Sharp = document.getElementById("set4");
let audio4;

a2Sharp.addEventListener("click", function () {
    console.log("A# note is pressed!");
    
        audio4 = new Audio('./sounds/screen2/a2.mp3');
        audio4.play().catch((error) => console.error('Error playing audio:', error));
   
});
const fSharp = document.getElementById("set5");
let audio5;
let pressed5 = false;
fSharp.addEventListener("click", function () {
    console.log("F# note is pressed!");
    audio6 = new Audio('./sounds/screen2/f2.wav');
    audio6.play().catch((error) => console.error('Error playing audio:', error));
});

  
    const gSharp = document.getElementById("set6");
    let audio6;
    let pressed6 = false;
    gSharp.addEventListener("click", function () {
        console.log("G note is pressed!");
        audio6 = new Audio('./sounds/screen2/g.wav');
        audio6.play().catch((error) => console.error('Error playing audio:', error));
    });
    const dSharp = document.getElementById("set7");
    let audio7;
    let pressed7 = false;
    dSharp.addEventListener("click", function () {
        console.log("D note is pressed!");
        audio7 = new Audio('./sounds/screen2/d.wav');
        audio7.play().catch((error) => console.error('Error playing audio:', error));
    });
    const eSharp = document.getElementById("set8");
    let audio8;
  
    eSharp.addEventListener("click", function () {
        console.log("E note is pressed!");
        audio8 = new Audio('./sounds/screen2/e.wav');
        audio8.play().catch((error) => console.error('Error playing audio:', error));
    });
    const d2Sharp = document.getElementById("set9");
    let audio9;
    d2Sharp.addEventListener("click", function () {
        console.log("D# note is pressed!");
        audio9 = new Audio('./sounds/screen2/d.wav');
        audio9.play().catch((error) => console.error('Error playing audio:', error));
        
    });
   
    const f2Sharp = document.getElementById("set10");
    let audio10;
    f2Sharp.addEventListener("click", function () {
        console.log("F note is pressed!");
        audio10 = new Audio('./sounds/screen2/f.wav');
        audio10.play().catch((error) => console.error('Error playing audio:', error));
        
    });
    const g2Sharp = document.getElementById("set11");
    let audio11;
    g2Sharp.addEventListener("click", function () {
        console.log("G# note is pressed!");
        audio11 = new Audio('./sounds/screen2/g2.wav');
        audio11.play().catch((error) => console.error('Error playing audio:', error));
        
    });
    const cSharp = document.getElementById("set12");
    let audio12;
    cSharp.addEventListener("click", function () {
        console.log("C note is pressed!");
        audio12 = new Audio('./sounds/screen2/c.wav');
        audio12.play().catch((error) => console.error('Error playing audio:', error));
        
    });
    

   
   
   
   




