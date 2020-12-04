
class Slingshot{
    constructor(bodyA,bodyB,offsetX,offsetY){
     this.offsetX=offsetX
     this.offsetY=offsetY
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX,y:this.offsetY},
            stiffness:1

    
        }
       this.sling=Constraint.create(options)
      World.add(world,this.sling)


    }
    display(){
       var slingAx=this.sling.bodyA.position.x+this.offsetX
       var slingAy=this.sling.bodyA.position.y+this.offsetY
       var slingBx=this.sling.bodyB.position.x
       var slingBy=this.sling.bodyB.position.y

       line(slingAx,slingAy,slingBx,slingBy)

    }
}





