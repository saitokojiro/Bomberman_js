import Bomb from './Bomb.js'

const player = document.getElementById('player')





let posY = 0
let posX = 0

document.addEventListener('keydown', function (e) {
    console.log(e.keyCode)
    if (e.key === 's') {
        if (posY === 750) {
            posY += 0;
        } else {
            posY += 50;
            console.log(posY)
        }

    }
    if (e.key === 'd') {
        if (posX === 750) {
            posX += 0;
        } else {
            posX += 50;
            console.log(posX)
        }
    }

    if (e.key === 'z') {
        if (posY === 0) {
            posY -= 0;
        } else {
            posY -= 50;
            console.log(posY)
        }

    }
    if (e.key === 'q') {
        if (posX === 0) {
            posX -= 0;
        } else {
            posX -= 50;
            console.log(posX)
        }
    }
    if (e.keyCode == '32') {
        console.log('X' + posX + ' Y' + posY)
        let posYN = window.getComputedStyle(player).getPropertyValue('top')
        let posXN = window.getComputedStyle(player).getPropertyValue('left')
        let explos = new Bomb(posXN, posYN)
        explos.Bomb
        //explos.boom()
        //explos.DeleteBomb()
    }

    player.style.top = posY + 'px';
    player.style.left = posX + 'px';
    console.log(posY + 'ok')
})