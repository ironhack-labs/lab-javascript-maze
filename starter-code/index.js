var Maze = require('maze.js');

var T = true, F = false;
var map = [
  [ T,  F , T,  T,  T,  F],
  [ T,  F,  T,  F,  T,  F],
  [ T,  T,  T,  F,  T,  F],
  [ F,  F,  F,  F,  T,  F],
  [ T,  T,  T,  T,  T,  F],
  [ T,  F,  F,  F,  F,  T],
  [ T,  T,  T,  T,  T,  T]];
var exit= {row:6, col:5};

var maze = new Maze(map,exit);

// Solution found on Blockly lvl 10

while (maze.notDone()) {
  if ( maze.isPathLeft() ) {
    maze.turnLeft();
  }
  if ( maze.isPathForward() ) {
      maze.moveForward();
    } else {
        maze.turnRight();

  }
}
