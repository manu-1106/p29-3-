class polygon extends BaseClass{
    constructor(width,height){
        super(width,height);
        this.body= Bodies.circle(50, 200, 20);
        
        
    }
    display(){
      this.body.position.x=mouseX
      this.body.position.y=mouseY      
      //super.display();
        
      }
    }
