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
var exit= {row:5, col:5};

var maze = new Maze(map,exit);

// https://blockly-games.appspot.com/maze?lang=en
while (maze.notDone()) {
  if (maze.isPathLeft()) {
    maze.turnLeft();
    maze.moveForward();
  } else {
    if (maze.isPathForward()) {
      maze.oveForward();
    } else {
      if (maze.isPathRight()) {
        maze.turnRight();
        maze.moveForward();
      } else {
        maze.turnLeft();
      }
    }
  }
}



 // 0 | X |   |   |   | S | X |   |   |
 // 1 | X |   | X | X | X | X | X |   |
 // 2 | X |   | X | X |   | X |   |   |
 // 3 |   |   | X | X |   | X | X |   |
 // 4 |   | X |   |   |   | X | X |   |
 // 5 |   | X | X | X | X |   |   |   |
 // 6 |   |   |   |   | E |   | X |
