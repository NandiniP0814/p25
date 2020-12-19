class Paper{
    constructor(x,y,d){
        var options = {
            restitution: 0.5, friction: 0.3, density: 1
        }
        this.d = d;
        this.image = loadImage("Images/paper.png");
        this.body = Bodies.circle(x,y,d,options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        fill("grey");
        image(this.image,0,0,this.d,this.d);
        pop();
    }
}