class rope
{
	constructor(x,y)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.body=Bodies.rectangle(x, y, options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var ropePos=this.body.position;		

			push()
			translate(ropePos.x, ropePos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(white);
			rect(0,0,this.w, this.h);
			pop()
			
	}

}
