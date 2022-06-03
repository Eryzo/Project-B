// Car animation by Sami

let cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Variables
let x = 5;
let y = 440;
let xc = 25;
let yc = 438;
let xc2 = 120;
let aStart = false;

// Array
let Snow = [];
snowFn(50);
let Rain = [];
RainFn(100);
let state = "scene1"

// Draw animation
requestAnimationFrame(draw);
function draw() {
    if (state === "scene1") {
        scene1();
    } else if (state === "scene2") {
        scene2();
    } else if (state === "scene3") {
        scene3();
    } else if (state === "scene4") {
        scene4();
    }

    requestAnimationFrame(draw);
}

// Event Listener
document.addEventListener("keydown", moveCar);

function moveCar(event) {
    if (event.keyCode == 39) {
        x += 5; xc += 5; xc2 += 5;
    } else if (event.keyCode == 37) {
        x -= 5; xc -= 5; xc2 -= 5;
    }
}