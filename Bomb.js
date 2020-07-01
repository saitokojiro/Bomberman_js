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

    this.posYN = 0
    this.posXN = 0

    this.posXINT = 0
    this.postYINT = 0

    //this.newBomb.remove()

    this.widthB = 50;
    this.heightB = 50;



    //this.timeExplo();

    let posEn = {
      posXEn: 0,
      posYEn: 0
    }

  }

  keyboom(Enc) {
    document.addEventListener('keydown', (e) => {
      if (e.keyCode == '32') {
        //console.log('X' + this.posX + ' Y' + this.posY)
        this.posYN = window.getComputedStyle(player).getPropertyValue('top')
        this.posXN = window.getComputedStyle(player).getPropertyValue('left')

        this.createBomb(this.posXN, this.posYN, Enc)
        // let explos = new Bomb()

        //explos.boom()
        //explos.DeleteBomb()

        //explos.createBomb(posXN, posYN);
        // this.testCollisions(bots, explos)


      }
    })
  }

  createBomb(x, y, Enc) {
    this.posX = x;
    this.posY = y;
    this.newBomb = document.createElement("div");
    this.gmZone = document.getElementById("game-zone");
    this.newBomb.id = 'bombId'
    this.newBomb.className = "bomb";
    this.newBomb.style.top = this.posY;
    this.newBomb.style.left = this.posX;
    this.gmZone.appendChild(this.newBomb);
    this.bombDetonation(Enc)
  }


  bombDetonation(Enc) {
    setTimeout(() => {
      this.animCss();
      this.newBomb.style.top = this.posY;
      this.newBomb.style.left = this.posX;
      //this.newBomb.style.transform = "translate(-50%, -50%)";

      setTimeout(() => {

        console.log(this);
        console.log(Enc);





        this.posXINT = parseInt(this.posX.substring(0, this.posX.length - 2))
        this.posYINT = parseInt(this.posY.substring(0, this.posY.length - 2))


        console.log(this.posXINT)
        console.log(this.posYINT)

        for (let i = 0; i < Enc.length; i++) {
          console.log(Enc)


          if (this.posXINT < Enc[i].posX - 50 /*Enc[i].width*/ ||
            this.posXINT > Enc[i].posX + 50 /*this.widthB*/ ||
            this.posYINT < Enc[i].posY - 50 /*Enc[i].height*/ ||
            this.posYINT > Enc[i].posY + 50 /*this.heighB*/ ) {

            this.bombDelete()

          } else {
            // Collision

            console.log('toucher');

            this.bombDelete()
            console.log(Enc[i].posX + 'and Bb ' + this.posX)
            console.log(Enc[i])
            Enc[i].killed();
          }



        }
        /*
                if (this.posXINT < Enc[i].posX - Enc.width ||
                  this.posXINT > Enc[i].posX + this.widthB ||
                  this.posYINT < Enc[i].posY - Enc.height ||
                  this.posYINT > Enc[i].posY + this.heighB) {

                } else {
                  // Collision
                  this.bombDelete();
                  console.log('toucher');
                  console.log(Enc.posX + 'and Bb ' + this.posX)
                  console.log(Enc)
                  Enc.killed();
                }
        */

      }, 600);



    }, 1000);
  }


  bombDelete() {
    this.newBomb.remove();
    let element = document.querySelectorAll('.bomb')
    console.log(element)

    setTimeout(() => {
      element.forEach(bombItem => {
        bombItem.remove()
      });
    }, 600);



  }
  /*
    animExplo() {
      //this.newBomb.className = "activate";
      this.animCss();
      this.newBomb.style.top = this.posY;
      this.newBomb.style.left = this.posX;
      //this.newBomb.style.transform = "translate(-50%, -50%)";

      setTimeout(() => {
        this.newBomb.remove();
        console.log(this);

        if (!(Enc.posX > +this.widthB ||
            Enc.posX < this.posXN - Enc.width ||
            Enc.posY > this.posYN + this.heighB ||
            Enc.posY < this.posYN - Enc.height)) {
          // Collision



        }

        if (!(this.posX > Enc.posX + Enc.width ||
            this.posX < Enc.posX - this.widthB ||
            this.posY > Enc.posY + Enc.height ||
            this.posY < Enc.posY - this.heighB)) {
          // Collision
          console.log('toucher');
          console.log(Enc.posX + 'and Bb' + this.posX)
        }


      }, 600);
    }


    bombDetection() {
      if (!(this.posX > this.posXB + this.widthB ||
          this.posX < this.posXB - this.width ||
          this.posY > this.posYB + this.heighB ||
          this.posY < this.posYB - this.height)) {
        // Collision
        console.log('toucher');
        console.log(this.posX + 'and Bb' + this.posXB)


      } else {
        console.log('touche pas')
      }
    }

  */

  animCss() {
    this.newBomb.style.position = "absolute";
    this.newBomb.style.width = this.widthB + "px";
    this.newBomb.style.height = this.heightB + "px";
    this.newBomb.style.border = "1px solid black";
    //this.newBomb.style.borderRadius = "100px";
    // this.newBomb.style.transform = "translate(-38% , -37% )";
    this.newBomb.style.animationName = "explos";
    this.newBomb.style.animationDuration = "0.5s";

  }


}



/*
Collision
function testerCollision() {
    dddd
}*/