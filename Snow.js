class Snow {
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.r=10;
        this.body=Bodies.circle(this.x,this.y,this.r);
        World.add(world,this.body);
    }
    display(){
    
        this.body.velocity.y=1;
        //console.log(this.body);
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        push(); 
        fill("#ffffff");
        ellipse(0, 0, this.r,this.r);
        pop();
    }
    update_y(){
        if (this.body.position.y > 300){
            Matter.Body.setPosition(this.body,{x:random(100,800),y:random(10,100)})
        }
}
}