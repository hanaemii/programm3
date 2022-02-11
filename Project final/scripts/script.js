var grassArr = [];
var grassCount = 0;
var grassIndex = 0;
var animalArr = [];
var animalCount = 0;
var animalIndex = 0;
var animalArr2=[];
var animalCount2 = 0;
var animalIndex2 = 0;
var bombArr=[];
var bombCount=0;
var bombIndex=0;

var x = 20;
var y = 20;
var side = 20;

var matrix = [];
  for(i = 0; i < y; i++){
   matrix[i]=[];
    for(j = 0; j < x; j++){
     matrix[i][j]=0;
   }
 }

var grassCount= x*y*50/100;
    for (var i=0; i<grassCount; i++){
      var xx=Math.floor(Math.random()*x);
      var yy=Math.floor(Math.random()*y);
        if(matrix[yy][xx] ==0){
          matrix[yy][xx] =1;
         }
        else {
          i--;
         }
    } 
 var animalCount= x*y*20/100;
    for (var i=0; i<animalCount; i++){
      var xx=Math.floor(Math.random()*x);
      var yy=Math.floor(Math.random()*y);
        if(matrix[yy][xx] ==0){
          matrix[yy][xx] =2;
         }
        else {
          i--;
         }
    } 
var animalCount2= x*y*2/100;
    for (var i=0; i<animalCount2; i++){
      var xx=Math.floor(Math.random()*x);
      var yy=Math.floor(Math.random()*y);
        if(matrix[yy][xx] ==0){
          matrix[yy][xx] =3;
         }
        else {
          i--;
         }
    } 
var bombCount= x*y*1/100;
    for (var i=0; i<bombCount; i++){
      var xx=Math.floor(Math.random()*x);
      var yy=Math.floor(Math.random()*y);
        if(matrix[yy][xx] ==0){
          matrix[yy][xx] =4;
         }
        else {
          i--;
         }
    } 

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

function draw() 
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










