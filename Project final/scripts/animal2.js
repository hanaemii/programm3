let LivingCreature= require('./LivingCreature')

module.exports= class Animal2 extends LivingCreature{
    constructor(x,y){
      super(x,y);
      this.energy = 15;   
    }
  
   
    move(){
      this.energy--;
      var emptyCord = super.getDirections(0);
      var cord = emptyCord[Math.floor(Math.random() * emptyCord.length)];
      
      if(cord){
       
        console.log(this.energy);
        var x = cord[0];
        var y = cord[1];
        
  
        matrix[this.y][this.x] = 0;
        matrix[y][x] = 3;
  
        this.x = x;
        this.y = y;     
        if (this.energy<=0){
          this.die();
        }
      }      
    }
    
    eat(){
      var animalCord = super.getDirections(2);
      var animal= animalCord[Math.floor(Math.random() * animalCord.length)];
  
      if(animal){
        this.multiply ++;
        var x = animal[0];
        var y = animal[1];
  
        matrix[this.y][this.x] = 0;
        matrix[y][x] = 3;
  
        this.x = x;
        this.y = y; 
        if(this.multiply==15){
          this.mul();
          this.multiply=0;
        }
  
        for(var i in animalArr){
          if(animalArr[i].x == x && animalArr[i].y == y){
            animalArr.splice(i,1);
          }
        }
  
      } 
      else {
        this.move();
      }
    }
  
      die(){
           matrix[this.y][this.x] = 0;
              for(var i in animalArr2){
                if(animalArr2[i].x == this.x && animalArr2[i].y == this.y){
                  animalArr2.splice(i,1);
                }
           }
      }
  
      mul(){
        var emptyCord = super.getDirections(2);
        var cord = emptyCord[Math.floor(Math.random() * emptyCord.length)];
  
        if(cord){
          var x = cord[0];
          var y = cord[1];
  
          var newAnimal2 = new Animal2(x,y,this.index);
          animalArr2.push(newAnimal2);
          matrix[y][x] = 3;
          
        }
        this.multiply = 0;
      }
  }