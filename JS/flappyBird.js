class flappyBird {
    constructor(x, y) {
        var options = {
            isStatic: true,
            restitution: 1,
            friction: 1,
            density: 0.7
        }
        this.body = Bodies.circle(x, y, 30, options);
        this.image = loadAnimation('images/bird1.png', 'images/bird2.png', 'images/bird3.png', 'images/bird4.png');
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        imageMode(CENTER)
        animation(this.image, 0, 0, 30, 30);
        pop();
    }
}