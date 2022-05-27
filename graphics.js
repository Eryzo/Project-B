function fill(style) {
    ctx.fillStyle = style;
}

function lineWidth(width) {
    ctx.lineWidth = width;
}

function rect(x, y, w, h, mode) {
    if (mode === "fill") {
        ctx.fillRect(x, y, w, h)
    }
}

function stroke(style) {
    ctx.strokeStyle = style;
}

function circle(x, y, r, mode) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    if (mode === "fill") {
        ctx.fill();
    } else if (mode === "stroke") {
        ctx.stroke();
    }
}

function background(color) {
    fill(color);
    rect(0, 0, cnv.width, cnv.height, "fill");
}

function line(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function ellipse(x, y, xRadius, yRadius, rotation, mode) {
    ctx.beginPath();
    ctx.ellipse(x, y, xRadius, yRadius, rotation, 0, 2 * Math.PI);
    if (mode === "fill") {
        ctx.fill();
    } else if (mode === "stroke") {
        ctx.stroke();
    }

}

function tree(x, y, xc, yc, color) {
    fill(color);
    rect(x, y, 20, 100, "fill");
    fill("red");
    circle(xc, yc, 40, "fill");
}

function car(x, y, xc, yc, xc2, color) {
    stroke(color);
    lineWidth(5);
    line(x, y - 15, x + 140, y - 15);
    line(x, y - 14, x, y - 40);
    line(x, y - 39, x + 20, y - 40);
    line(x + 20, y - 40, x + 30, y - 60);
    line(x + 30, y - 60, x + 80, y - 60);
    line(x + 100, y - 40, x + 80, y - 60);
    line(x + 140, y - 14, x + 140, y - 40);
    line(x + 140, y - 40, x + 99, y - 40);
    fill("red");
    circle(xc, yc, 11, "fill");
    circle(xc2, yc, 11, "fill");
}