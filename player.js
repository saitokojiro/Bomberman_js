import Bomb from './Bomb.js'
export default class Player {
    constructor() {
        this.posX = 0;
        this.posY = 0;
        this.player = document.getElementById('player')

    }


    // const player = document.getElementById('player')

    trys() {

    }

    MoveP() {

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
                let explos = new Bomb(posXN, posYN)

                //explos.boom()
                //explos.DeleteBomb()
                explos.timeExplo();
            }
        })

    }
    /*
        controller(forward, backward, left, right, e) {

            this.explos()
        }
    */
    explos(e) {

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