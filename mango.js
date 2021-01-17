class mango {
    constructor(x,y){
        var options={
          isStatic:false,
          restitution:0,
          friction:1,
        }
      this.image = loadImage("sprites/mango.png");
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      this.image(x,y,50,100);
      var position=[this.body.position.x,this.body.position.y];
      }
    }
  
  
