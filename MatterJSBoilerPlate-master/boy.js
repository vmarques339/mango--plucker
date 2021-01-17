class boy{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.image=loadImage("sprites/boy.png");
        this.boy = Constraint.create(options);
        World.add(world, this.chain);
    }
   display(){
    this.image(150,150,30,120);
        strokeWeight(4);
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
