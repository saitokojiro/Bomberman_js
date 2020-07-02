export default class Enemy {
    constructor(indx) {
        // this.posX = /*150 + x */ this.getRandomInt(12) * 50;
        // this.posY = /*150 + y*/ this.getRandomInt(12) * 50;
        // this.newEnemy = document.createElement("div");
        // this.gmZone = document.getElementById("game-zone");
        // this.newEnemy.className = "enemy";
        // this.newEnemy.style.top = this.posY + 'px';
        // this.newEnemy.style.left = this.posX + 'px';
        // this.gmZone.appendChild(this.newEnemy);

        this.width = 50;
        this.height = 50;

        this.newEnemy = document.createElement("div");
        this.posY = this.getRandomInt(12) * 50;
        this.posX = this.getRandomInt(12) * 50;

        this.newEnemy.style.top = this.posY + 'px';
        this.newEnemy.style.left = this.posX + 'px';

        setInterval(() => {
            this.wespos = this.posX
        }, 1000);

    }

    spawnE() {
        this.gmZone = document.getElementById("game-zone");
        this.newEnemy.className = "enemy";
        this.gmZone.appendChild(this.newEnemy);
    }

    killed() {
        this.newEnemy.remove()
    }

    EnemyMove() {
        setInterval(() => {
            switch (this.getRandomInt(4)) {
                case 0:
                    if (this.posY === 750) {
                        this.posY -= 50;
                    } else {
                        this.posY += 50;
                        this.newEnemy.style.top = this.posY + 'px';
                    }
                    break;
                case 1:
                    if (this.posY === 0) {
                        this.posY += 50;
                    } else {
                        this.posY -= 50;

                        this.newEnemy.style.top = this.posY + 'px';
                    }
                    break;
                case 2:
                    if (this.posX === 750) {
                        this.posX -= 50;

                    } else {
                        this.posX += 50;
                        this.newEnemy.style.left = this.posX + 'px';
                    }
                    break;
                case 3:
                    if (this.posX === 0) {
                        this.posX += 50;

                    } else {
                        this.posX -= 50;
                        this.newEnemy.style.left = this.posX + 'px';
                    }
                    break;
                default:
                    console.log('ok')
                    break;
            }
        }, 1000)
    }

    color(e) {
        this.newEnemy.style.background = e;
    }

    selectPoseManuel(X, Y) {
        this.posX = X;
        this.posY = Y;
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

}