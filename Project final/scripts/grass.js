let LivingCreature = require('./LivingCreature')

module.exports= class Grass extends LivingCreature{
    constructor(x,y){   
      super(x,y);
      this.multiply=0;
    }
  
    
  
    mul(){
  this.multiply++;
  console.log(this.multiply);
     if(this.multiply>=3){
        var emptyCord = super.getDirections(0);
        var cord = emptyCord[Math.floor(Math.random() * emptyCord.length)]
            console.log(cord, 'GRASSSSS');
     }
        if(this.multiply >= 5 && cord){
          let x = cord[0];
          let y = cord[1];
        
          var newGrass = new Grass(x,y);
          grassArr.push(newGrass);
          
          this.multiply = 0;
      
        }
        
    }
   
    
  }