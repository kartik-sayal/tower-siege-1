class SlingShot{
    constructor(bodyA, pointB)
    {
      var options = {
          bodyA: bodyA,
          pointB: pointB,
          stiffness: 0.04,
          length: 1
      }
      this.slingshot= Constraint.create(options);
      this.pointB=pointB;
      World.add(world,this.slingshot);


    }

    fly(){
        this.slingshot.bodyA = null;
    }
    display() {
      if(this.sling.bodyA){
      var pointA=this.sling.bodyA.position;
      var pointB = this.pointB;
      strokeWeight(5);
      fillStyle("red");
      fill();
      line(pointA.x,pointA.y,pointB.x,pointB.y);
        
      }
      
    }
    
    
}