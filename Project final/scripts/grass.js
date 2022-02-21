let LivingCreature = require('./LivingCreature')

module.exports= class Grass extends LivingCreature{
    constructor(x,y,index, multiply){   
      super(x,y,index, multiply);
    }
  
    
  
    mul(){
      this.multiply++;
      if(this.multiply == 10){
        let emptyCord = super.getDirections(0);
        let cord = emptyCord[Math.floor(Math.random() * emptyCord.length)]
            console.log(cord, 'GRASSSSS');
       
        if(this.multiply >= 5 && cord){
          let x = cord[0];
          let y = cord[1];
  
          var newGrass = new Grass(x,y,this.index);
          grassArr.push(newGrass);
          matrix[y][x] = 1;
          
        }
        this.multiply = 0;
      }
    }
   
    
  }