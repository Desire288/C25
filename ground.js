class Ground 
{
  constructor(x, y, w, h) 
  {
    let options = {
      isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }
  
show(){
 var pose=this.body.position;
 push();
 rectMode(CENTER);
 stroke("green")
 fill("purple");
 rect(pose.x,pose.y,this.w,this.h);
 pop()
 
}}
