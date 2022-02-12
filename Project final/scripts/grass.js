class Grass extends LivingCreature{
    constructor(x,y,index, multiply){   
      super(x,y,index, multiply);
    }
  
    
  
    mul(){
      this.multiply++;
      if(this.multiply == 10){
        var emptyCord = this.getDirections(0);
        var cord = random(emptyCord);
       console.log(cord);
       
        if(cord){
          var x = cord[0];
          var y = cord[1];
  
          var newGrass = new Grass(x,y,this.index);
          grassArr.push(newGrass);
          matrix[y][x] = 1;
          
        }
        this.multiply = 0;
      }
    }
   
    
  }