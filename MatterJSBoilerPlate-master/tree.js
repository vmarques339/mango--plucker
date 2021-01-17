class tree{
    constructor(x,y,height,angle){
      this.image = loadImage("sprites/tree.png");
      Matter.Body.setAngle(this.body, angle);
    }
  }