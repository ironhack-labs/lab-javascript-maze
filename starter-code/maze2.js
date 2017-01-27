var Maze = require('./maze.js');

var T = true, F = false;

var map2 = [
  [ F,  T , T,  T,  T,  F, T],  //turn left
  [ F,  T,  F,  F,  F,  F, F],  //forward 3 times
  [ F,  T,  F,  F,  T,  F, T],  //turn left
  [ T,  T,  F,  F,  T,  F, F],  //forward 3 times
  [ T,  F,  T,  T,  T,  F, F],  //turn right
  [ T,  F,  F,  F,  F,  T, T],  //forward 1 time
  [ T,  T,  T,  T,  T,  T, F]]; //turn left
                                //forward 3 times
var exit2= {row:6, col:4};      //turn left
                                //forward 4 times
var maze2 = new Maze(map2,exit2);

maze2._miner.row = 0;
maze2._miner.col = 4;

while (maze2.notDone() === false) {
  console.log(maze2._miner.row,maze2._miner.col);
  if (maze2.isPathLeft()) {
    maze2.turnLeft();
    maze2.moveForward();
  } else {
    if (maze2.isPathForward()) {
      maze2.moveForward();
    } else {
      if (maze2.isPathRight()) {
        maze2.turnRight();
        maze2.moveForward();
      } else {
        maze2.turnLeft();
      }
    }
  }
}
