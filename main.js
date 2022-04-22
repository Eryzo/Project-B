// Project B by Sami

let cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Variables
let x = 35;
let y = 440;
let xc = 55;
let yc = 438;
let xc2 = 150;

// Array
let Snow = [];
snowFn(50);

requestAnimationFrame(draw);
function draw() {
    scene1();

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