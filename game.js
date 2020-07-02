import Enemy from './Enemy.js'
import Bomb from './Bomb.js'
import Player from './player.js'


//------------Variable------------------

let restart = true;
let winner = true
let buttonRestart = document.querySelector('.restartG')

// ------------------Bot------------------
let spawnOne = new Enemy();
let spawnTwo = new Enemy();
let spawnThree = new Enemy();
let spawnFour = new Enemy();

//------- listMonster----------

let monster = [spawnOne, spawnTwo, spawnThree, spawnFour]

//------- spawn------------
spawnOne.spawnE();
spawnTwo.spawnE();
spawnThree.spawnE();
spawnFour.spawnE();

//------- move------------
spawnOne.EnemyMove();
spawnTwo.EnemyMove();
spawnThree.EnemyMove();
spawnFour.EnemyMove();

spawnOne.color('blue');

// -----------------Player---------------
let player = new Player();
player.MoveP();

//---------------Boom--------------

let bombCal = new Bomb();

bombCal.keyboom(monster);



//----------------------------

setInterval(() => {
    if (document.querySelectorAll('.enemy').length === 0 && winner === true) {
        alert("Winner !!!!")
        winner = false
    }
}, 1000);




buttonRestart.addEventListener('click', () => {
    let element = document.querySelectorAll('.enemy')
    console.log(element.length)
    winner = true

    if (element.length === 0) {
        console.log('ok')
        spawnOne.spawnE();
        spawnTwo.spawnE();
        spawnThree.spawnE();
        spawnFour.spawnE();
        bombCal.score = 0
    }
})