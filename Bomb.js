export default class Bomb {
  constructor(x, y) {
    // this.posX = x;
    // this.posY = y;
    // this.newBomb = document.createElement("div");
    // this.gmZone = document.getElementById("game-zone");
    // this.newBomb.className = "bomb";
    // this.newBomb.style.top = this.posY;
    // this.newBomb.style.left = this.posX;
    // this.gmZone.appendChild(this.newBomb);

    //this.newBomb.remove()

    //this.timeExplo();
  }

  createBomb(x, y) {
    this.posX = x;
    this.posY = y;
    this.newBomb = document.createElement("div");
    this.gmZone = document.getElementById("game-zone");
    this.newBomb.className = "bomb";
    this.newBomb.style.top = this.posY;
    this.newBomb.style.left = this.posX;
    this.gmZone.appendChild(this.newBomb);
    this.bombDetonation()
  }


  bombDetonation() {
    setTimeout(() => {
      this.animExplo();
    }, 1000);
  }

  animExplo() {
    //this.newBomb.className = "activate";
    this.animCss();
    this.newBomb.style.top = this.posY;
    this.newBomb.style.left = this.posX;
    //this.newBomb.style.transform = "translate(-50%, -50%)";

    setTimeout(() => {
      this.newBomb.remove();
      console.log(this);
    }, 600);
  }


  animCss() {
    this.newBomb.style.position = "absolute";
    this.newBomb.style.width = "200px";
    this.newBomb.style.height = "200px";
    this.newBomb.style.border = "1px solid black";
    this.newBomb.style.borderRadius = "100px";
    this.newBomb.style.transform = "translate(-38% , -37% )";
    this.newBomb.style.animationName = "explos";
    this.newBomb.style.animationDuration = "0.5s";

  }

}


/*
Collision
function testerCollision() {
    dddd
}*/