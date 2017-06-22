var Maze = function(map, exit) {
  this._miner = {
    row: 0,
    col: 0,
    dir: 0 // 0:up, 1:right, 2: down, 3:left
  };
  this._maze = map;
  this._exit = {
    row: exit.row,
    col: exit.col
  };
};

Maze.prototype.turnLeft      = function(){
  this._miner.dir--;
  if(this._miner.dir < 0) {
    this._miner.dir = 3;
  }
};

Maze.prototype.turnRight     = function(){
  this._miner.dir++;
  if(this._miner.dir > 3) {
    this._miner.dir = 0;
  }
};

Maze.prototype.isPathForward = function(){
  var path = false;
  switch (this._miner.dir) {
    case 0:
      path = this._lookUp();
      break;
    case 1:
      path = this._lookRight();
      break;
    case 2:
      path = this._lookDown();
      break;
    case 3:
      path = this._lookLeft();
      break;
  }
  return path;
};

Maze.prototype.isPathLeft    = function(){
  var path = false;
  switch (this._miner.dir) {
    case 0:
      path = this._lookLeft();
      break;
    case 1:
      path = this._lookUp();
      break;
    case 2:
      path = this._lookRight();
      break;
    case 3:
      path = this._lookDown();
      break;
  }
  return path;
};

Maze.prototype.isPathRight   = function(){
  var path = false;
  switch (this._miner.dir) {
    case 0:
      path = this._lookRight();
      break;
    case 1:
      path = this._lookDown();
      break;
    case 2:
      path = this._lookLeft();
      break;
    case 3:
      path = this._lookUp();
      break;
  }
  return path;
};

Maze.prototype._lookUp       = function(){
  var up = false;
  if(this._miner.row - 1 >= 0) {
    if (this._maze[this._miner.row - 1][this._miner.col]) {
      up = true;
    }
  }
  return up;
};

Maze.prototype._lookRight    = function(){
  var right = false;
  if (this._maze[this._miner.row][this._miner.col + 1]) {
    right = true;
  }
  return right;
};

Maze.prototype._lookDown     = function(){
  var down = false;
  if(this._miner.row + 1 < this._maze.length) {
    if (this._maze[this._miner.row + 1][this._miner.col]) {
      down = true;
    }
  }
  return down;
};

Maze.prototype._lookLeft   = function(){
  var left = false;
  if (this._maze[this._miner.row][this._miner.col - 1]) {
    left = true;
  }
  return left;
};

Maze.prototype.moveForward   = function(){
  var isPossible = this.isPathForward();
  if(isPossible) {
    switch (this._miner.dir) {
      case 0:
        this._goUp();
        break;
      case 1:
        this._goRight();
        break;
      case 2:
        this._goDown();
        break;
      case 3:
        this._goLeft();
        break;
    }
  }
  return isPossible;
};

Maze.prototype._goUp         = function() {
  this._miner.row--;
};

Maze.prototype._goRight      = function() {
  this._miner.col++;
};

Maze.prototype._goDown       = function() {
  this._miner.row++;
};

Maze.prototype._goLeft       = function() {
  this._miner.col--;
};

Maze.prototype.notDone       = function(){
  var notDone = true;
  if (this._miner.row === this._exit.row && this._miner.col === this._exit.col) {
    notDone = false;
  }
  return notDone;
};

module.exports = Maze;
