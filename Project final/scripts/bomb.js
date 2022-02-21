let LivingCreature = require('./LivingCreature')

module.exports= class Bomb extends LivingCreature{
    constructor(x,y,index,multiply){   
      super(x,y,index,multiply);  
    }
  
    
  
    bombarda(){   
      super.newDirections();
      var animal2Cord = super.getDirections(3);
  
      if(animal2Cord.length !== 0){
        for(var i in this.directions){
          var x=this.directions[i][0];
          var y=this.directions[i][1];
          if(matrix[y][x]==1){
             matrix[y][x]=20;
             for(var i in grassArr){
                if(grassArr[i].x == x && grassArr[i].y == y){
                  grassArr.splice(i,1);
                }
             }
          }
  
          else if(matrix[y][x]==2){
            matrix[y][x]=20;
             for(var i in animalArr){
                if(animalArr[i].x == x && animalArr[i].y == y){
                  animalArr.splice(i,1);
                }
             }
          }
  
          else if(matrix[y][x]==3){
            matrix[y][x]=20;
             for(var i in animalArr2){
                if(animalArr2[i].x == x && animalArr2[i].y == y){
                  animalArr2.splice(i,1);
                }
             }
             for(var i in bombArr){
                if(bombArr[i].x == this.x && bombArr[i].y == this.y){
                  bombArr.splice(i,1);            
                }
             }
          }  
        }      
      }
    }
  }
  
  