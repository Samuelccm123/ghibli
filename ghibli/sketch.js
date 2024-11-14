let bubbles = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 100; i++) {
        bubbles.push(new Bubble());
    }
}

function draw() {
    background(240, 240, 240, 150); // Fundo levemente transparente para o efeito
    for (let bubble of bubbles) {
        bubble.move();
        bubble.display();
    }
}

class Bubble {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.size = random(10, 30);
        this.speed = random(0.5, 2);
    }

    move() {
        this.y -= this.speed;
        if (this.y < 0) {
            this.y = height;
            this.x = random(width);
        }
    }

    display() {
        noStroke();
        fill(255, 204, 204, 150); // Cor das bolinhas
        ellipse(this.x, this.y, this.size);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
