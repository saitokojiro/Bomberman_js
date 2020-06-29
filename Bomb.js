export default class Bomb {
  constructor(x, y) {
    this.posX = x;
    this.posY = y;
    this.newBomb = document.createElement("div");
    this.gmZone = document.getElementById("game-zone");
    this.newBomb.className = "bomb";
    this.newBomb.style.top = this.posY;
    this.newBomb.style.left = this.posX;
    this.gmZone.appendChild(this.newBomb);

    //this.newBomb.remove()

    //this.timeExplo();
  }
  boom = () => {
    console.log("boom");
    //let bombCube = document.createElement('div');
    //let gmZone = document.getElementById('game-zone')
    bombCube.className = "bomb";
    bombCube.style.top = y;
    bombCube.style.left = x;
    gmZone.appendChild(bombCube);

    console.log(x + "bomb ");
  };

  timeExplo() {
    setTimeout(() => {
      this.animExplo();
    }, 1000);
  }

  animExplo() {
    this.newBomb.className = "activate";
    this.newBomb.style.transform = "translate(-50%, -50%)";
    setTimeout(() => {
      this.deleteBomb();
      console.log(this);
    }, 600);
  }

  deleteBomb() {
    this.newBomb.remove();
  }
}
/*
Collision
function testerCollision() {
    if (!(spriteBX > spriteAX + largeurSpriteA ||
            spriteBX < spriteAX - largeurSpriteB ||
            spriteBY > spriteAY + hauteurSpriteA ||
            spriteBY < spriteAY - hauteurSpriteB)) {
        // Collision
    }
}*/

/* anim for bomb
body{
  width:200px;
  height: 200px;
  border: 1px solid black;
}


div
{
  position: absolute;
  top:50px;
  left:50px;
  
  width: 100px;
  height: 100px;
  border: 1px solid black;
  border-radius: 50px;
  animation-name: example;
  animation-duration: 0.5s;
  
}


}*/
