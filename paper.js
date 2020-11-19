class paper{
    constructor(x,y,radius){
        this.body = Bodies.circle(x,y,radius,{isStatic:false,density:1.2,restitution:0.3,friction:0.5})
        World.add(world,this.body);
        this.radius = radius;
    }
    display(){
        push()
        fill("blue")
        rectMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
        pop()
    }
}