class Game {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.player = new Player(this);
        this.input = new InputHandler(this);
        this.ui = new UI(this);
        this.keys = [];
        this.ammo = 20;
        this.ammoInterval = 500;
        this.maxAmmo = 50;
        this.ammoTimer = 0;
       
    }

    update(deltaTime) {
        this.player.update(deltaTime);
        if (this.ammoTimer > this.ammoInterval) {
            if (this.ammo < this.maxAmmo) this.ammo++;
            this.ammoTimer = 0;
        } else {
            this.ammoTimer += deltaTime;
        }
    }

    draw(context) {
        this.ui.draw(context);
        this.player.draw(context);
       
    }
}