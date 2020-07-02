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

    this.posYN = 0;
    this.posXN = 0;

    this.posXINT = 0;
    this.postYINT = 0;

    this.widthB = 50;
    this.heightB = 50;

    this.score = 0;

    this.bomdKilled = document.createElement("div");
    this.body = document.querySelector("body");

    setInterval(() => {
      this.bomdKilled.className = "score";
      this.bomdKilled.innerHTML = `score : ${this.score}`;
      this.body.appendChild(this.bomdKilled);
    }, 500);
  }

  keyboom(Enc) {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode == "32") {
        this.posYN = window.getComputedStyle(player).getPropertyValue("top");
        this.posXN = window.getComputedStyle(player).getPropertyValue("left");

        this.createBomb(this.posXN, this.posYN, Enc);
      }
    });
  }

  createBomb(x, y, Enc) {
    this.posX = x;
    this.posY = y;
    this.newBomb = document.createElement("div");
    this.gmZone = document.getElementById("game-zone");
    this.newBomb.id = "bombId";
    this.newBomb.className = "bomb";
    this.newBomb.style.top = this.posY;
    this.newBomb.style.left = this.posX;

    this.newBomb.style.width = this.widthB + "px";
    this.newBomb.style.height = this.heightB + "px";
    this.gmZone.appendChild(this.newBomb);
    this.bombDetonation(Enc);
  }

  bombDetonation(Enc) {
    setTimeout(() => {
      this.animCss();
      setTimeout(() => {
        console.log(this);
        console.log(Enc);

        this.posXINT = parseInt(this.posX.substring(0, this.posX.length - 2));
        this.posYINT = parseInt(this.posY.substring(0, this.posY.length - 2));

        console.log(this.posXINT);
        console.log(this.posYINT);

        for (let i = 0; i < Enc.length; i++) {
          console.log(Enc);

          if (
            this.posXINT < Enc[i].posX - 100 ||
            this.posXINT > Enc[i].posX + 100 ||
            this.posYINT < Enc[i].posY - 100 ||
            (this.posYINT > Enc[i].posY + 100 &&
              document.querySelectorAll(".enemy").length != 0)
          ) {
            this.bombDelete();
            this.score += 0;
          } else {
            console.log("toucher");

            this.bombDelete();

            this.score += 1;

            console.log(this.score);

            Enc[i].killed();
            Enc.splice([i], 1);

            console.log(Enc[i].posX + "and Bb " + this.posX);
            console.log(Enc[i]);
          }
        }
      }, 600);
    }, 1000);
  }

  bombDelete() {
    this.newBomb.remove();
    let element = document.querySelectorAll(".bomb");
    console.log(element);

    setTimeout(() => {
      element.forEach((bombItem) => {
        bombItem.remove();
      });
    }, 100);
  }

  animCss() {
    this.newBomb.style.position = "absolute";
    this.newBomb.style.width = 150 + "px";
    this.newBomb.style.height = 150 + "px";
    this.newBomb.style.border = "1px solid black";
    this.newBomb.style.transform = "translate(-34% , -34% )";
    this.newBomb.style.animationName = "explos";
    this.newBomb.style.animationDuration = "0.5s";
  }
}
