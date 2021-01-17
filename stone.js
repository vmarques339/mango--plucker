class stone {
    constructor(x,y){
        var options={
          isStatic:false,
          restitution:0,
          friction:1,
          density:1.2
        }
      this.image = loadImage("sprites/stone.png");
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      var position=[this.body.position.x,this.body.position.y];
      }
    }
  
  
