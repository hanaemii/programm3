class Animal{
    constructor(x,y,index){
      this.x = x;
      this.y = y; 
      this.index = index;
      this.energy= 5;
      this.multiply=0;
    }
  
    newDirections(){
      this.directions = [
        [this.x - 1, this.y - 1],
        [this.x    , this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y    ],
        [this.x + 1, this.y    ],
        [this.x - 1, this.y + 1],
        [this.x    , this.y + 1],
        [this.x + 1, this.y + 1]
      ];
    }
  
    getDirections(t){
      this.newDirections();
      var found = [];
  
      for(var i in this.directions){
        var x = this.directions[i][0];
        var y = this.directions[i][1];
        if(x >= 0 && x < matrix[0].length && y >=0 && y < matrix.length){
          if(matrix[y][x] == t){
            found.push(this.directions[i]);
          }
        }
      }
      return found;
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