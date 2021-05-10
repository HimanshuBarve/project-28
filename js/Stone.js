class Stone{
constructor(x,y,r){
var options={isStatic:false,Restitution:0,friction:1,density:1.2}
this.x=x;
this.y=y;
this.r=r
this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
World.add(world, this.body);
this.image=loadImage("images/stone.png")
}
display()
	{
        console.log(this.body.speed);
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			imageMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("black");
			
image(this.image,0,0,this.r,this.r)
			pop()
	}
}