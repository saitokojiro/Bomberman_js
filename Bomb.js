export default class Bomb {

    constructor(x, y) {
        this.posX = x;
        this.posY = y
        this.newBomb = document.createElement('div');
        this.gmZone = document.getElementById('game-zone')
        this.newBomb.className = "bomb";
        this.newBomb.style.top = this.posY;
        this.newBomb.style.left = this.posX;
        this.gmZone.appendChild(this.newBomb)

        //this.newBomb.remove()


        this.timeExplo();


    }
    boom = () => {
        console.log('boom')
        //let bombCube = document.createElement('div');
        //let gmZone = document.getElementById('game-zone')
        bombCube.className = 'bomb';
        bombCube.style.top = y;
        bombCube.style.left = x;
        gmZone.appendChild(bombCube);

        console.log(x + 'bomb ');

    }

    timeExplo() {
        setTimeout(function () {
            this.deleteBomb()
        }, 1000)
    }


    deleteBomb() {
        this.newBomb.remove();
    }

}