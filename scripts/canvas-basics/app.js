//@ts-check
/** @type {HTMLCanvasElement} */
//@ts-ignore canvas is an HTMLCanvasElement
const canvas = document.getElementById("game-canvas");

/** @type {CanvasRenderingContext2D} */
//@ts-ignore ctx is an CanvasRenderingContext2D
const ctx = canvas.getContext("2d");

class SquareShape {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.width = 50;
        this.height = this.width;
        this.hue = 0;
        
        this.speedMult = 11;
        this.speedx = Math.floor(Math.random() * this.speedMult) + 1;
        this.speedy = Math.floor(Math.random() * this.speedMult) + 1;

    }

    update() {
        this.x += this.speedx;
        this.y += this.speedy;
        this.hue++;
    }

    draw() {
        ctx.fillStyle = `hsla(${this.hue}, 100%, 50%, 100%)`;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

let s1 = new SquareShape(0, 0);


let lastTime = 0;

function drawLoop(timestamp) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    let elapsedTime = timestamp - lastTime
    lastTime = timestamp;

    s1.draw();
    s1.update();

    window.requestAnimationFrame(drawLoop);
}

window.requestAnimationFrame(drawLoop);































//ctx.fillRect(1000, 0, 50, 50);

// ctx.fillStyle = "yellow";
// ctx.beginPath();
// ctx.arc(400, 300, 250, 0, Math.PI * 2);
// ctx.fill();
// ctx.fillStyle = "00ffff";

// ctx.fillStyle = "black";

// ctx.beginPath();
// ctx.arc(215, 225, 10, 0, Math.PI * 2);
// ctx.fill();

// ctx.fillStyle = "black";

// ctx.beginPath();
// ctx.arc(285, 225, 10, 0, Math.PI * 2);
// ctx.fill();

// ctx.beginPath();
// ctx.arc(250, 250, 35, 0, Math.PI);
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(250, 250, 60, 0, Math.PI * 2);
// ctx.stroke();

// ctx.fillRect(250, 220, 4, 45);
// ctx.fillRect(240, 260, 10, 5);


// ctx.beginPath();
// ctx.arc(490, 225, 10, 0, Math.PI * 2);
// ctx.fill();

// ctx.beginPath();
// ctx.arc(560, 225, 10, 0, Math.PI * 2);
// ctx.fill();

// ctx.beginPath();
// ctx.arc(525, 250, 35, 0, Math.PI);
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(525, 250, 60, 0, Math.PI * 2);
// ctx.stroke();

// ctx.fillRect(525, 220, 4, 45);
// ctx.fillRect(515, 260, 10, 5);

// ctx.beginPath();
// ctx.arc(400, 250, 240, 0, Math.PI);
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(1000, 300, 250, 0, Math.PI * 2);
// ctx.stroke();
// ctx.fillStyle = "00ffff";




// ctx.fillStyle = "yellow";

// ctx.beginPath();
// ctx.arc(1000, 300, 250, 0, Math.PI * 2);
// ctx.fill();
// ctx.fillStyle = "00ffff";

// ctx.fillStyle = "black";

// ctx.beginPath();
// ctx.arc(815, 225, 10, 0, Math.PI * 2);
// ctx.fill();

// ctx.fillStyle = "black";

// ctx.beginPath();
// ctx.arc(885, 225, 10, 0, Math.PI * 2);
// ctx.fill();

// ctx.beginPath();
// ctx.arc(850, 250, 35, 0, Math.PI);
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(850, 250, 60, 0, Math.PI * 2);
// ctx.stroke();

// ctx.fillRect(850, 220, 4, 45);
// ctx.fillRect(840, 260, 10, 5);


// ctx.beginPath();
// ctx.arc(1090, 225, 10, 0, Math.PI * 2);
// ctx.fill();

// ctx.beginPath();
// ctx.arc(1160, 225, 10, 0, Math.PI * 2);
// ctx.fill();

// ctx.beginPath();
// ctx.arc(1125, 250, 35, 0, Math.PI);
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(1125, 250, 60, 0, Math.PI * 2);
// ctx.stroke();

// ctx.fillRect(1125, 220, 4, 45);
// ctx.fillRect(1115, 260, 10, 5);

// ctx.beginPath();
// ctx.arc(1000, 250, 240, 0, Math.PI);
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(1000, 300, 250, 0, Math.PI * 2);
// ctx.stroke();
// ctx.fillStyle = "00ffff";

// ctx.beginPath();
// ctx.arc(1000, 250, 900, 0, Math.PI);
// ctx.stroke();
