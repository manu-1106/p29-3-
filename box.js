class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height,options);
     var options={
       restitution:0.04,
       friction:1.0,
       density:1.0,
       isStatic:false
      
     }
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);

       
      }
  };
  