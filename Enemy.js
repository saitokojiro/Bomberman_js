export default class Enemy {
    constructor(indx) {
        this.posX = /*150 + x */ this.getRandomInt(12) * 50;
        this.posY = /*150 + y*/ this.getRandomInt(12) * 50;
        this.newEnemy = document.createElement("div");
        this.gmZone = document.getElementById("game-zone");
        this.newEnemy.className = "enemy";
        this.newEnemy.style.top = this.posY + 'px';
        this.newEnemy.style.left = this.posX + 'px';
        this.gmZone.appendChild(this.newEnemy);

        this.width = 50;
        this.height = 50;

        this.detecX = this.posX;

        this.spawnR = true;

    }

    spawnE() {
        //this.getRandomInt(12)*50
        if (this.spawnR === true) {
            // this.newEnemy = document.createElement("div");
            // this.gmZone = document.getElementById("game-zone");
            // this.newEnemy.className = "enemy";
            // this.posY = this.getRandomInt(12) * 50;
            // this.posX = this.getRandomInt(12) * 50;
            this.newEnemy.style.top = this.posY + 'px';
            this.newEnemy.style.left = this.posX + 'px';
            // this.gmZone.appendChild(this.newEnemy);
            return this.spawnR = false;
        }

    }




    testCollision(es) {
        setInterval(() => {
            if (!(this.posX > es.posX + this.width ||
                    this.posX < es.posX - es.width ||
                    this.posY > es.posY + this.height ||
                    this.posY < es.posY - this.height)) {
                // Collision
                this.posX += 50
                this.posY += 50
                this.newEnemy.style.background = 'green';
                this.newEnemy.style.zIndex = '999'
                console.log('toucher')
            }
            /*else(
                           //this.newEnemy.style.background = 'blue'
                       )*/
        }, 500);

    }


    EnemyMove() {
        //this.newEnemy.style.top += 150 + 'px';

        setInterval(() => {
            console.log(this.posY)
            if (this.getRandomInt(4) === 0) {
                this.posY += 50;
                if (this.posY === 800) {
                    this.posY -= 50;

                } else {
                    this.newEnemy.style.top = this.posY + 'px';
                }
                //console.log('top')
            }
            if (this.getRandomInt(4) === 1) {
                this.posY -= 50;

                if (this.posY === -50) {
                    this.posY += 50;

                } else {
                    this.newEnemy.style.top = this.posY + 'px';
                }
                //console.log('-top')
            }
            if (this.getRandomInt(4) === 2) {
                this.posX += 50;
                if (this.posX === 800) {
                    this.posX -= 50;

                } else {
                    this.newEnemy.style.left = this.posX + 'px';
                }
                //console.log('left')
            }
            if (this.getRandomInt(4) === 3) {
                this.posX -= 50;
                if (this.posX === -50) {
                    this.posX += 50;

                } else {
                    this.newEnemy.style.left = this.posX + 'px';
                }
                //console.log('-left')
            }


        }, 500)
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