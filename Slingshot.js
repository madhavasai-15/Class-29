class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png")
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1, 200, 23);
        image(this.sling2, 170, 17);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke("rgb(48, 22, 8)");
            if(pointA.x < 220){
                strokeWeight(8);
                line(pointA.x - 20, pointA.y + 5, pointB.x - 20, pointB.y - 5);
                line(pointA.x - 20, pointA.y + 5, pointB.x + 20, pointB.y - 5);
                image(this.sling3, pointA.x - 30, pointA.y - 10, 15, 30);
            }else {
                strokeWeight(4);
                line(pointA.x + 25, pointA.y + 5, pointB.x - 20, pointB.y - 5);
                line(pointA.x + 25, pointA.y + 5, pointB.x + 20, pointB.y - 5);
                image(this.sling3, pointA.x + 23, pointA.y - 10, 15, 30);
            }
            pop();
        }
        
    }
    
}