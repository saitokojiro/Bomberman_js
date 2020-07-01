import Enemy from './Enemy.js'
import Bomb from './Bomb.js'
import Player from './player.js'

let spawnE = () => {
    let newSpawn = new Enemy()
    newSpawn.EnemyMove()

    newSpawn.spawnE()
    setInterval(
        () => {
            console.log('X : ' + newSpawn.posX + ' Y : ' + newSpawn.posY)
            newSpawn
        }, 1000
    )

}



// ------------------Bot------------------
let spawnOne = new Enemy(9999)
let spawnTwo = new Enemy(99)
spawnOne.spawnE()
spawnTwo.spawnE()
let spawnThree = new Enemy()
let spawnFour = new Enemy()
spawnThree.spawnE()
spawnFour.spawnE()

spawnOne.EnemyMove()
// spawnTwo.EnemyMove()
spawnOne.color('blue');

// -----------------Player---------------
let player = new Player();

player.MoveP(spawnOne)




//---------------Boom--------------

let bombCal = new Bomb()


let monster = [spawnOne, spawnTwo, spawnThree, spawnFour]

console.log(monster[0].posX)

bombCal.keyboom(monster);