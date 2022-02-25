let LivingCreature = require('./LivingCreature')

module.exports= class Animal extends LivingCreature{
    constructor(x,y){
     super(x,y);
      this.energy= 5; 
    }
  
   
    move(){
      var emptyCord = super.getDirections(0);
      let cord = emptyCord[Math.floor(Math.random() * emptyCord.length)];
      
     console.log(cord)
  
      if(cord){
        this.energy--;
        var x = cord[0];
        var y = cord[1];
        
  
        matrix[this.y][this.x] = 0;
        matrix[y][x] = 2;
  
        this.x = x;
        this.y = y;     
        if (this.energy<=0){
          this.die();
        }
      }      
    }
    
    eat(){
      var grassCord = super.getDirections(1);
      var grass = grassCord[Math.floor(Math.random() * grassCord.length)];
  
      if(grass){
        this.multiply++;
        var x = grass[0];
        var y = grass[1];
  
        matrix[this.y][this.x] = 0;
        matrix[y][x] = 2;
        for(var i in grassArr){
          if(grassArr[i].x == x && grassArr[i].y == y){
            grassArr.splice(i,1);
          }
        }
  
        this.x = x;
         this.y = y; 
        if(this.multiply==5){
          this.mul();
          this.multiply=0;
        }
  
        
  
      } 
      else {
        this.move();
      }
    }
  
      die(){
            matrix[this.y][this.x] = 0;
              for(var i in animalArr){
                if(animalArr[i].x == this.x && animalArr[i].y == this.y){
                  animalArr.splice(i,1);
                }
           }
      }
  
      mul(){
        var emptyCord = super.getDirections(1);
        var cord = emptyCord[Math.floor(Math.random() * emptyCord.length)];
  
        if(cord){
          var x = cord[0];
          var y = cord[1];
  
          var newAnimal = new Animal(x,y);
          animalArr.push(newAnimal);
          matrix[y][x] = 2;
          for(var i in grassArr){
            if(grassArr[i].x == x && grassArr[i].y == y){
              grassArr.splice(i,1);
            }
          }
          
        }
        this.multiply = 0;
      }
  
  }