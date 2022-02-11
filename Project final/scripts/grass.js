class Grass{
    constructor(x,y,index){   
      this.x = x;
      this.y = y;
      this.index = index;
      this.multiply = 0;
      
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