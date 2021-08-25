class Box
  {
    constructor()
    {
      this.x =100;
      this.y = 200
      this.w = 50;
      this.h = 50;
    }
    
    show(c)
    {
      fill(c);
      rect(this.x,this.y,this.w,this.h)
    }

    width(wid){
      this.w = wid;
    }

    height(hei){
      this.h = hei;
    }
    //write function to set the width of the box

  }

  
