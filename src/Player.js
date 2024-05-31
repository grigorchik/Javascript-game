class Player {
    constructor(game) {
        this.game = game;
        this.width = 120;
        this.height = 190;
        this.x = 20;
        this.y = 100;
        this.speedY = 0;
        this.maxSpeed = 8;
        this.projectiles = [];
    }

    update() {
        this.y += this.speedY;

        if (this.game.keys.includes('ArrowUp')) this.speedY = -this.maxSpeed
        else if (this.game.keys.includes('ArrowDown')) this.speedY = this.maxSpeed
        else this.speedY = 0;

        if (this.y > this.game.height - this.height * 0.5) this.y = this.game.
        height - this.height * 0.5;
        else if (this.y < -this.height * 0.5) this.y = -this.height * 0.5;

        // handle projectiles
        this.projectiles.forEach(pr => { pr.update(); });
        this.projectiles = this.projectiles.filter(pr => !pr.markedForDeletion);
    }

    draw(context) {
        context.fillRect(this.x, this.y, this.width, this.height);
        context.fillStyle = 'black';
        this.projectiles.forEach(pr => { pr.draw(context); });
    }

    shootTop() {
        if (this.game.ammo > 0) {
            this.projectiles.push(new Projectile(this.game, this.x + 80, this.y + 30));
            this.game.ammo--;
        }
    }

}