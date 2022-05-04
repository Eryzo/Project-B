function newRandomSnow() {
    return {
        x: randomInt(0, cnv.width),
        y: randomInt(0, cnv.height),
        r: randomInt(2, 6),
        color: "white",
        speed: randomInt(1, 5)
    };
}

function snowFn(total) {
    for (let n = 1; n <= total; n++) {
        Snow.push(newRandomSnow());
    }
    return Snow;
}

function drawSnow(snow) {
    fill(snow.color);
    circle(snow.x, snow.y, snow.r, "fill");
}

function moveSnow(snow) {
    if (snow.y > cnv.height) {
        snow.y = 0;
        snow.x = randomInt(0, 800);
    }
    snow.y += snow.speed;
}

function ground(x, y, color) {
    fill(color);
    rect(x, y, 800, 150, "fill");
}

function bigCircle(x, y, color) {
    fill(color);
    circle(x, y, 35, "fill");
}

function scene1() {

    // Fill Canvas
    background("black");

    // Move & Draw snows
    for (let i = 0; i < Snow.length; i++) {
        moveSnow(Snow[i])
        drawSnow(Snow[i])
    }

    ground(0, 450, "white");
    bigCircle(700, 100, "white");
    car(x, y, xc, yc, xc2, "green");


    if (x === 810) {
        x = 5; xc = 25; xc2 = 120;
        state = "scene2";
    } else if (x <= 0) {
        x = 5; xc = 25; xc2 = 120;
    }

}

// Scene 2
function scene2() {

    // Fill Canvas
    background("grey");

    ground(0, 450, "green");
    bigCircle(700, 100, "yellow");
    car(x, y, xc, yc, xc2, "blue");

    if (x === 820) {
        x = 5; xc = 25; xc2 = 120;
        state = "scene3";
    } else if (x <= 0) {
        x = 795; xc = 815; xc2 = 915;
        state = "scene1";
    }

}

function scene3() {

    // Fill Canvas
    background("lightblue");

    ground(0, 450, "green");
    bigCircle(700, 100, "orange");
    car(x, y, xc, yc, xc2, "white");

    if (x === 820) {
        x = 5; xc = 25; xc2 = 120;
    } else if (x <= 0) {
        x = 795; xc = 815; xc2 = 915;
        state = "scene2";
    }

}