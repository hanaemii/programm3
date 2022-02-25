var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require("fs");

app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000, () => {
    console.log('connected');
});


var n=100;
matrix = []
function rand(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
        matrix[i][j] = Math.floor(rand(0, 6))
  
    }
  }

  io.sockets.emit('send matrix', matrix)


grassArr = [];
animalArr = [];
animalArr2=[];
//bombArr=[];

  Grass= require("./Grass")
  Animal=require("./Animal")
  Animal2=require("./Animal2")
  //Bomb=require("./Bomb")


function createObject(matrix) {
    for(var i = 0; i < matrix.length; i++){
        for(var j = 0; j <matrix[0].length; j++){
          if(matrix[i][j] == 1){
            var grass  = new Grass(j, i);
              grassArr.push(grass);
              
            }
          if(matrix[i][j] == 2){
            var animal= new Animal(j, i);
               animalArr.push(animal);
            
          }
          if(matrix[i][j] == 3){
            var animal2= new Animal2(j, i);
               animalArr2.push(animal2);
            
          }
          /* if(matrix[i][j] == 4){
            var bomb= new Bomb(j, i);
               bombArr.push(bomb);
          
          }*/
        }
      }    
        io.sockets.emit('send matrix', matrix)


    }



    function game() {
        for (var i in grassArr) {
            grassArr[i].mul()
        }
        for (var i in animalArr) {
            animalArr[i].mul()
            animalArr[i].eat();
        }
        for (var i in animalArr2) {
            animalArr2[i].mul()
            animalArr2[i].eat();
          }
          /*for (var i in bombArr) {
            bombArr[i].bombarda();
          }*/
        io.sockets.emit("send matrix", matrix);
    }
    setInterval(game, 400)

    io.on('connection', function () {
        createObject(matrix)
    })

