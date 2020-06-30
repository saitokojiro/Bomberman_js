import Bomb from './Bomb.js'
import Enemy from './Enemy.js'
export default class Player {
    constructor() {
        this.posX = 0;
        this.posY = 0;
        this.player = document.getElementById('player')

    }


    // const player = document.getElementById('player')

    trys() {

    }

    MoveP(bots) {

        document.addEventListener('keydown', (e) => {
            console.log(e.keyCode)
            if (e.key === 'z') {
                if (this.posY === 0) {
                    this.posY -= 0;
                } else {
                    this.posY -= 50;
                    this.player.style.top = this.posY + 'px';

                    console.log(this.posY)
                }

            }
            if (e.key === 's') {
                if (this.posY === 750) {
                    this.posY += 0;
                } else {
                    this.posY += 50;
                    this.player.style.top = this.posY + 'px';

                    console.log(this.posY)
                }

            }
            if (e.key === 'd') {
                if (this.posX === 750) {
                    this.posX += 0;
                } else {
                    this.posX += 50;

                    this.player.style.left = this.posX + 'px';
                    console.log(this.posX)
                }
            }


            if (e.key === 'q') {
                if (this.posX === 0) {
                    this.posX -= 0;
                } else {
                    this.posX -= 50;

                    this.player.style.left = this.posX + 'px';
                    console.log(this.posX)
                }
            }
            if (e.keyCode == '32') {
                console.log('X' + this.posX + ' Y' + this.posY)
                let posYN = window.getComputedStyle(player).getPropertyValue('top')
                let posXN = window.getComputedStyle(player).getPropertyValue('left')
                // let explos = new Bomb()

                //explos.boom()
                //explos.DeleteBomb()

                //explos.createBomb(posXN, posYN);
                // this.testCollisions(bots, explos)
                let enemy = new Enemy(999)
                enemy.createBomb(posXN, posYN)

            }
        })

    }
    /*
        controller(forward, backward, left, right, e) {

            this.explos()
        }
    */
    testCollisions(bots, es) {
        setInterval(() => {
            if (!(bots.posX > es.posX + this.width ||
                    bots.posX < es.posX - es.width ||
                    bots.posY > es.posY + this.height ||
                    bots.posY < es.posY - this.height)) {
                // Collision
                /*this.posX += 50
                this.posY += 50
                bots.style.background = 'green';
                bots.newEnemy.style.zIndex = '999'*/
                bots.remove();
                console.log('toucher')
            }
            /*else(
                           //this.newEnemy.style.background = 'blue'
                       )*/
        }, 500);
    }

    //spawnE();
    //spawnE();

    //let posY = 0
    //let posX = 0
    /*
        document.addEventListener('keydown', function (e) {
            console.log(e.keyCode)

            if (e.keyCode == '32') {
                console.log('X' + posX + ' Y' + posY)
                let posYN = window.getComputedStyle(player).getPropertyValue('top')
                let posXN = window.getComputedStyle(player).getPropertyValue('left')
                let explos = new Bomb(posXN, posYN)
                explos.Bomb
                //explos.boom()
                //explos.DeleteBomb()
                explos.timeExplo();
            }

            player.style.top = posY + 'px';
            player.style.left = posX + 'px';
            //console.log(posY + 'ok')
        })*/

}