class Ball{
    constructor(x,y,r){

    var options ={
        //isStatic:false,
        density:1.2,
        friction:0,
        restitution:1
    }
    this.r=r

    this.body=Bodies.circle(x,y,this.r,options)
    World.add(world,this.body)


    }
    display(){
 var pos = this.body.position
 var angle = this.body.angle

 push();
 translate(pos.x, pos.y);
 rotate(angle);
 //noStroke()
 fill("purple")
 ellipseMode(RADIUS)
 ellipse(pos.x,pos.y,this.r,this.r)
pop()
    }
}