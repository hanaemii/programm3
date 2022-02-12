class Animal extends LivingCreature{
    constructor(x,y,index,multiply){
     super(x,y,index,multiply);
      this.energy= 5; 
    }
  
   
    move(){
      var emptyCord = this.getDirections(0);
      var cord = random(emptyCord);
      
     
  
      if(cord){
        this.energy--;
        var x = cord[0];
        var y = cord[1];
        
  
        matrix[this.y][this.x] = 0;
        matrix[y][x] = 2;
  
        this.x = x;
        this.y = y;     
        if (this.energy==0){
          this.die();
        }
      }      
    }
    
    eat(){
      var grassCord = this.getDirections(1);
      var grass = random(grassCord);
  
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
        if(this.multiply==15){
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
        var emptyCord = this.getDirections(1);
        var cord = random(emptyCord);
  
        if(cord){
          var x = cord[0];
          var y = cord[1];
  
          var newAnimal = new Animal(x,y,this.index);
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