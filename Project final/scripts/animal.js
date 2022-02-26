let LivingCreature = require('./LivingCreature')

module.exports = class Animal extends LivingCreature {
  constructor(x, y) {
    super(x, y);
    this.energy = 10;
  }


  move() {

    var emptyCord = super.getDirections(0);
    var cord = emptyCord[Math.floor(Math.random() * emptyCord.length)];

    if (cord) {

      console.log(this.energy);
      var x = cord[0];
      var y = cord[1];

      matrix[y][x] = matrix[this.y][this.x];
      matrix[this.y][this.x] = 0;


      this.x = x;
      this.y = y;

    }
    this.energy--;
    if (this.energy <= 0) {
      this.die();
    }
  }

  eat() {
    var animalCord = super.getDirections(2);
    var animal = animalCord[Math.floor(Math.random() * animalCord.length)];

    if (animal) {

      var x = animal[0];
      var y = animal[1];

      matrix[y][x] = matrix[this.y][this.x];
      matrix[this.y][this.x] = 0;

      this.x = x;
      this.y = y;
      this.energy++;

      if (this.energy >= 12) {
        this.mul();

      }


    }
    else {
      this.move();
    }
  }



  mul() {
    var emptyCord = super.getDirections(0);
    var cord = emptyCord[Math.floor(Math.random() * emptyCord.length)];

    if (cord) {
      var x = cord[0];
      var y = cord[1];

      var newAnimal = new Animal(x, y, this.index);
      animalArr.push(newAnimal);
      this.energy = 6;

    }
  }
    die() {
    matrix[this.y][this.x] = 0;
    for (var i in animalArr) {
      if (animalArr[i].x == this.x && animalArr[i].y == this.y) {
        animalArr.splice(i, 1);
      }
    }
  }
}