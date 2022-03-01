let LivingCreature= require('./LivingCreature')

module.exports = class Animal2 extends LivingCreature{
    constructor(x,y){
      super(x,y);
      this.energy = 8;   
    }
  
   
    move(){
      this.energy--;
      var emptyCord = super.getDirections(0);
      var cord = emptyCord[Math.floor(Math.random() * emptyCord.length)];
      
      if(cord){
       
        var x = cord[0];
        var y = cord[1];
        
  
      matrix[y][x] = matrix[this.y][this.x];
      matrix[this.y][this.x] = 0;

        this.x = x;
        this.y = y;     
        
        }
        this.energy--;
        if (this.energy<=0){
          this.die();
      }      
    }
    
    eat(){
      var animalCord = super.getDirections(2);
      var animal= animalCord[Math.floor(Math.random() * animalCord.length)];
  
      if(animal){
       
        var x = animal[0];
        var y = animal[1];
  
        matrix[y][x] = matrix[this.y][this.x];
        matrix[this.y][this.x] = 0;
  
        for (var i in animalArr) {
          if (animalArr[i].x == x && animalArr[i].y == y) {
            animalArr.splice(i, 1)
          }
        }
        
        this.x = x;
        this.y = y;
        this.energy++;
  
        if (this.energy >= 15) {
          this.mul();
          this.energy = 8
        }
  
  
      }
      else {
        this.move();
      }
    }
  
      
  
      mul(){
        var emptyCord = super.getDirections(0);
        var cord = emptyCord[Math.floor(Math.random() * emptyCord.length)];
  
        if(cord){
          var x = cord[0];
          var y = cord[1];
  
          var newAnimal2 = new Animal2(x,y,3);
          animalArr2.push(newAnimal2);
         this.energy=8
          
        }
        
      }
      die(){
         matrix[this.y][this.x] = 0;
        // for (var i in animalArr2) {
        //   if (animalArr2[i].x == this.x && animalArr2[i].y == this.y) {
        //     animalArr2.splice(i, 1)
        //   }
        // }
        for (var i in animalArr2) {
          if (animalArr2[i].x == this.x && animalArr2[i].y == this.y) {
            animalArr2.splice(i, 1)
          }
        }
   }
  }