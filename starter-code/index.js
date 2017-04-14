var Maze = require('maze.js');

var T = true, F = false;
var map = [
  [ T,  F , T,  T,  T,  F],  //0
  [ T,  F,  T,  F,  T,  F],  //1
  [ T,  T,  T,  F,  T,  F],  //2
  [ F,  F,  F,  F,  T,  F],  //3
  [ T,  T,  T,  T,  T,  F],  //4
  [ T,  F,  F,  F,  F,  T],  //5
  [ T,  T,  T,  T,  T,  T]]; //6
  //0   1   2   3   4   5
  
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
