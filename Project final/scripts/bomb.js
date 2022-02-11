class Bomb{
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
  
  
    bombarda(){   
      this.newDirections();
      var animal2Cord = this.getDirections(3);
  
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
  
  