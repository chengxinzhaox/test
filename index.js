let x, y;
let step = 10;
let flag = 0;

let message = " When I was Your Age This WAS a Cool Message ";
message = message.split("");

let xpos = [];
for (let i = 0; i <= message.length - 1; i++) {
    xpos[i] = -50;
}

let ypos = [];
for (let i = 0; i <= message.length - 1; i++) {
    ypos[i] = -50;
}

function handlerMM() {
    x = document.body.scrollLeft + event.clientX;
    y = document.body.scrollTop + event.clientY;
    flag = 1;
}

function makeSnake() {

    if (flag === 1) {
        for (let i = message.length - 1; i >= 1; i--) {
            xpos[i] = xpos[i - 1] + step;
            ypos[i] = ypos[i - 1];
        }
        xpos[0] = x + step;
        ypos[0] = y;
        for (let i = 0; i < message.length - 1; i++) {
            let life = "span" + i;
            let thisSpan = document.getElementById(life);

            thisSpan.style.left = xpos[i] + "px";
            thisSpan.style.top = ypos[i] + "px";
        }
    }
    let timer = setTimeout("makeSnake()", 10);
}

for (let i = 0; i <= message.length - 1; i++) {
    document.write("<span id='span" + i + "'>");
    document.write(message[i]);
    document.write("</span>");
}
document.onmousemove = function () {
    handlerMM();
}

const funs = new Funs();
funs.signature();