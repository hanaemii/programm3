
var socket = io();
 side = 20;

function setup() {
  createCanvas(20 * side, 20 * side);
  // background('#d8d8d8');
  // frameRate(30);

}

function nkarel(matrix) {


  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] == 1) {
        fill("green");
      }
      else if (matrix[i][j] == 2) {
        fill("yellow");
      }
      else if (matrix[i][j] == 3) {
        fill("red");
      }
      else if (matrix[i][j] == 0) {
        fill("gray");
      }
      rect(j * side, i * side, side, side);

    }
  }
}




    socket.on('send matrix', nkarel)


    function kill() {
      socket.emit("kill")
  }
  function addGrass() {
      socket.emit("add grass")
  }
  function addAnimal() {
      socket.emit("add animal")
  }
  function addAnimal2() {
    socket.emit("add animal2")
}




