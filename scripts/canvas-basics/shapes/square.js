//@ts-check
export class CircleShape {
    constructor(x, y, ctx, canvas, Math.Pie) {
        this.x = x;
        this.y = y;
        this.ctx = ctx;
        this.canvas = canvas;
        Math.PI

        this.width = 50;
        this.height = 50;
        this.arc
        Math.PI * 10;
        this.hue = 0;
        
        this.speedMult = 10;
        this.speedx = Math.floor(Math.random() * this.speedMult) + 1;
        this.speedy = Math.floor(Math.random() * this.speedMult) + 1;
        this.dirx = 1;
        this.diry = 1;
    }

    update() {
        this.x += this.speedx * this.dirx;
        this.y += this.speedy * this.diry;
        this.hue++;

        if(this.hue > 360) {
            this.hue = 0;
        }

        if(this.x < 0) {
            // offscrean left so move right
            this.dirx = 1;
        } else if(this.x + this.width > this.canvas.width) {
            // offscrean right so move left
            this.dirx = -1;
        }

        if(this.y < 100) {
            // offscrean top so move down
            this.diry = 1;
        } else if(this.y + this.height > this.canvas.height) {
            // offscrean bottom so move up
            this.diry = -1;
        }

    }

    draw() {
        this.ctx.fillStyle = `hsla(${this.hue}, 100%, 50%, 100%)`;
        this.ctx.beginPath();
        this.ctx.arc(215, 225, 10, 0, Math.PI * 2);
        this.ctx.fill();
    }
}



export class SquareShape {
    constructor(x, y, ctx, canvas) {
        this.x = x;
        this.y = y;
        this.ctx = ctx;
        this.canvas = canvas;

        this.width = 50;
        this.height = 50;
        Math.PI * 10;
        this.hue = 0;
        
        this.speedMult = 10;
        this.speedx = Math.floor(Math.random() * this.speedMult) + 1;
        this.speedy = Math.floor(Math.random() * this.speedMult) + 1;
        this.dirx = 1;
        this.diry = 1;
    }

    update() {
        this.x += this.speedx * this.dirx;
        this.y += this.speedy * this.diry;
        this.hue++;

        if(this.hue > 360) {
            this.hue = 0;
        }

        if(this.x < 0) {
            // offscrean left so move right
            this.dirx = 1;
        } else if(this.x + this.width > this.canvas.width) {
            // offscrean right so move left
            this.dirx = -1;
        }

        if(this.y < 100) {
            // offscrean top so move down
            this.diry = 1;
        } else if(this.y + this.height > this.canvas.height) {
            // offscrean bottom so move up
            this.diry = -1;
        }

    }

    draw() {
        this.ctx.fillStyle = `hsla(${this.hue}, 100%, 50%, 100%)`;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
        //this.ctx.beginPath();
        //this.ctx.arc(215, 225, 10, 0, Math.PI * 2);
        //this.ctx.fill();
    }
}