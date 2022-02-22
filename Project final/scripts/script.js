
var grassCount = 0;
var grassIndex = 0;

var animalCount = 0;
var animalIndex = 0;

var animalCount2 = 0;
var animalIndex2 = 0;

var bombCount=0;
var bombIndex=0;

var x = 20;
var y = 20;
var side = 20;
var n=100;
var socket=io();
side=30


function setup(){
  createCanvas(x * side, y * side);
  background('#d8d8d8');
  frameRate(2);
  for(var i = 0; i < y; i++){
    for(var j = 0; j <x; j++){
      if(matrix[i][j] == 1){
        var grass  = new Grass(j, i, grassIndex);
          grassArr.push(grass);
          grassIndex++;
        }

      if(matrix[i][j] == 2){
        var animal= new Animal(j, i, animalIndex);
           animalArr.push(animal);
        animalIndex++;
      }
      if(matrix[i][j] == 3){
        var animal2= new Animal2(j, i, animalIndex2);
           animalArr2.push(animal2);
        animalIndex2++;
      }
       if(matrix[i][j] == 4){
        var bomb= new Bomb(j, i, bombIndex);
           bombArr.push(bomb);
        bombIndex++;
      }
    }
  }    
}

function nkarel() 
{
  background("#d8d8d8");  

  for(var i in grassArr)
  {
    grassArr[i].mul();
  }

  for( var i in animalArr)
  {
    animalArr[i].eat();
  }
  for( var i in animalArr2)
  {
    animalArr2[i].eat();
  }
  for(var i in bombArr){
    bombArr[i].bombarda();
  }
  for(var i = 0; i < y; i++)
  {
    for(var j = 0; j < x; j++)
	{
    if(matrix[i][j] == 1)
	  {
        fill("green");
        rect(j * side, i * side, side, side);
      }
    else if(matrix[i][j] == 2)
	  {
        fill("yellow");
        rect(j * side, i * side, side, side);
    }
    else if(matrix[i][j]==3){
      fill("red");
      rect(j * side, i * side, side, side);
    }
    else if(matrix[i][j]==4){
      fill("black");
      rect(j * side, i * side, side, side);
    }
    
    }
}  
}

function nkarel(matrix) {
  console.log(matrix);

  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        var obj = matrix[y][x];
        if (obj == 1) {
            fill("green");
            rect(x * side, y * side, side, side)
        }
        else if (obj == 2) {
            fill("yellow");
            rect(x * side, y * side, side, side);
        }
    }
}

}

setInterval(
  function () {
  socket.on('send matrix', nkarel)
  },1000
)






