import Enemy from './Enemy.js'
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

// -----------------Player---------------
let player = new Player();
player.MoveP()


// ------------------Bot------------------
let spawnOne = new Enemy(9999)
let spawnTwo = new Enemy(99)
//let spawnThree = new Enemy()
//let spawnFour = new Enemy()

spawnOne.EnemyMove()
spawnOne.color('blue');
//sawnOne.selectPoseManuel(150, 150)
//spawnOne.collisionSystemBetweenEnemy(spawnTwo.getBoundings(this))
//spawnTwo.selectPoseManuel(100, 150)
spawnTwo.EnemyMove()
//spawnTwo.color('yellow')
//spawnThree.EnemyMove()
//spawnFour.EnemyMove()
console.log(" 999999999999999999999")
spawnOne.testCollision(spawnTwo)


//---------------Boom--------------