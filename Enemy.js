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


        //this.widthB = 200;
        //this.heightB = 200;

        this.width = 50;
        this.height = 50;


        //this.posXB
        //this.posYB


        this.newEnemy = document.createElement("div");
        this.posY = this.getRandomInt(12) * 50;
        this.posX = this.getRandomInt(12) * 50;

        this.newEnemy.style.top = this.posY + 'px';
        this.newEnemy.style.left = this.posX + 'px';

        setInterval(() => {
            this.wespos = this.posX
        }, 1000);

        this.detecX = this.posX;

        this.spawnR = true;

    }

    spawnE() {
        //this.getRandomInt(12)*50
        //if (this.spawnR === true) {

        this.gmZone = document.getElementById("game-zone");
        this.newEnemy.className = "enemy";
        this.gmZone.appendChild(this.newEnemy);
        //  return this.spawnR = false;
        //}

    }



    killed() {
        this.newEnemy.remove()
    }


    testCollision() {


    }


    EnemyMove() {
        //this.newEnemy.style.top += 150 + 'px';

        setInterval(() => {
            console.log(this.posY)
            if (this.getRandomInt(4) === 0) {
                if (this.posY === 750) {
                    this.posY -= 50;

                } else {
                    this.posY += 50;
                    this.newEnemy.style.top = this.posY + 'px';
                }
                //console.log('top')
            }
            if (this.getRandomInt(4) === 1) {
                if (this.posY === 0) {
                    this.posY += 50;

                } else {
                    this.posY -= 50;

                    this.newEnemy.style.top = this.posY + 'px';
                }
                //console.log('-top')
            }
            if (this.getRandomInt(4) === 2) {

                if (this.posX === 750) {
                    this.posX -= 50;

                } else {
                    this.posX += 50;
                    this.newEnemy.style.left = this.posX + 'px';
                }
                //console.log('left')
            }
            if (this.getRandomInt(4) === 3) {

                if (this.posX === 0) {
                    this.posX += 50;

                } else {
                    this.posX -= 50;
                    this.newEnemy.style.left = this.posX + 'px';
                }
                //console.log('-left')
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

    //----------------------------------------------------
    //----------------------------------------------------
    //--------H=========----------------------------------
    //--------H---------||--------------------------------
    //--------H---------||--------------------------------
    //--------H=========----------------------------------
    //--------H---------||--------------------------------
    //--------H---------||--------------------------------
    //--------H=========----------------------------------
    //----------------------------------------------------
    //----------------------------------------------------


    // createBomb(x, y) {

    //     this.posXB = x;
    //     this.posYB = y;
    //     this.newBomb = document.createElement("div");
    //     this.gmZone = document.getElementById("game-zone");
    //     this.newBomb.className = "bomb";
    //     this.newBomb.style.top = this.posYB;
    //     this.newBomb.style.left = this.posXB;
    //     this.gmZone.appendChild(this.newBomb);
    //     this.bombDetonation()
    // }


    // bombDetonation() {
    //     setTimeout(() => {
    //         this.animExplo();
    //         this.bombDetection()
    //     }, 1000);
    // }

    // bombDetection() {
    //     if (!(this.posX > this.posXB + this.widthB ||
    //             this.posX < this.posXB - this.width ||
    //             this.posY > this.posYB + this.heighB ||
    //             this.posY < this.posYB - this.height)) {
    //         // Collision
    //         console.log('toucher');
    //         console.log(this.posX + 'and Bb' + this.posXB)


    //     } else {
    //         console.log('touche pas')
    //     }
    // }




    // animExplo() {
    //     //this.newBomb.className = "activate";
    //     this.animCss();
    //     this.newBomb.style.top = this.posYB;
    //     this.newBomb.style.left = this.posXB;
    //     //this.newBomb.style.transform = "translate(-50%, -50%)";

    //     setTimeout(() => {
    //         this.newBomb.remove();
    //         // console.log(this);

    //     }, 600);
    // }


    // animCss() {
    //     this.newBomb.style.position = "absolute";
    //     this.newBomb.style.width = this.widthB + "px";
    //     this.newBomb.style.height = this.heightB + "px";
    //     this.newBomb.style.border = "1px solid black";
    //     this.newBomb.style.borderRadius = "100px";
    //     this.newBomb.style.transform = "translate(-38% , -37% )";
    //     this.newBomb.style.animationName = "explos";
    //     this.newBomb.style.animationDuration = "0.5s";

    // }




}