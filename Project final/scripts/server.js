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
  animalArr2 = [];
  
//bombArr=[];

 

  function generator(matLen, gr, anm, anm2) {
    let matrix = [];
    for (let i = 0; i < matLen; i++) {
        matrix[i] = [];
        for (let j = 0; j < matLen; j++) {
            matrix[i][j] = 0;
        }
    }
    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 1;
        }
    }
    for (let i = 0; i < anm; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 2;
        }
    }
    for (let i = 0; i < anm2; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 3;
        }
    }

    return matrix;
}
matrix = generator(15,12,1,2)

const Grass = require("./Grass")
const Animal = require("./Animal")
const Animal2 = require("./Animal2")
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
            var animal2 = new Animal2(j, i);
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
    setInterval(game, 100)

    io.on('connection', function () {
        createObject(matrix)
    })




    function kill() {
  
      for (var y = 0; y < matrix.length; y++) {
          for (var x = 0; x < matrix[y].length; x++) {
              matrix[y][x] = 0;
          }
      }
      io.sockets.emit("send matrix", matrix);
  }
  
  
  function addGrass() { 
    for (let i = 0; i < gr; i++) {
    let x = Math.floor(Math.random() * 15);
    let y = Math.floor(Math.random() * 15);
    if (matrix[x][y] == 0) {
        matrix[x][y] = 1;
        grassArr.push(new Grass(x, y))
    }
}

 io.sockets.emit("send matrix", matrix);
}
   
     
  
  function addAnimal() {
      for (var i = 0; i < 7; i++) {   
      var x = Math.floor(Math.random() * matrix[0].length)
      var y = Math.floor(Math.random() * matrix.length)
          if (matrix[y][x] == 0) {
              matrix[y][x] = 2
              animalArr.push(new Animal(x, y, 2))
          }
      }
      io.sockets.emit("send matrix", matrix);
  }
  function addAnimal2() {
    for (var i = 0; i < 7; i++) {   
    var x = Math.floor(Math.random() * matrix[0].length)
    var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 2
            animalArr2.push(new Animal(x, y, 2))
        }
    }
    io.sockets.emit("send matrix", matrix);
}

io.on('connection', function (socket) {
  createObject(matrix);
  socket.on('killAll', kill);
})


io.on('connection', function (socket) {
  createObject(matrix);
  socket.on('addGrass', addGrass);
})

io.on('connection', function (socket) {
  createObject(matrix);
  socket.on('addAnimal', addAnimal);
})
io.on('connection', function (socket) {
  createObject(matrix);
  socket.on('addAnimal2', addAnimal2);
})