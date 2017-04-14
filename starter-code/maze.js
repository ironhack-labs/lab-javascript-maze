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
  switch (this._miner.dir) {
    case 0:
      this._miner.dir = 3;
      break;
    case 1:
      this._miner.dir = 0;
      break;
    case 2:
      this._miner.dir = 1;
      break;
    case 3:
      this._miner.dir = 2;
      break;
  }
};

Maze.prototype.turnRight     = function(){
  switch (this._miner.dir) {
    case 0:
      this._miner.dir = 1;
      break;
    case 1:
      this._miner.dir = 2;
      break;
    case 2:
      this._miner.dir = 3;
      break;
    case 3:
      this._miner.dir = 0;
      break;
    }
};

Maze.prototype.isPathForward = function(){
  var row = this._miner.row;
  var col = this._miner.col;
  var pathForward = false;
  //switch, check direction player is facing

  switch (this._miner.dir) {
    case 0:
    //truthy falsy
      pathForward = (row > 0 && this._maze[row-1][col])?true:false;
      break;
    case 1:
      if (col < this._maze[row].length && this._maze[row][col+1]) {
        pathForward = true;
      }
      break;
    case 2:
      if (row < this._maze.length-1 && this._maze[row+1][col]) {
        pathForward = true;
      }
      break;
    case 3:
      if (col > 0 && this._maze[row][col-1]) {
        pathForward = true;
      }
      break;
  }
  return pathForward;

};

Maze.prototype.isPathLeft    = function(){
  var row = this._miner.row;
  var col = this._miner.col;
  var pathLeft = false;
  //switch, check direction player is facing

  switch (this._miner.dir) {
    case 0:
      if (col > 0 && this._maze[row][col-1]) {
        pathLeft = true;
      }
      break;
    case 1:
      if (row > 0 && this._maze[row-1][col]) {
        pathLeft = true;
      }
      break;
    case 2:
      if (col < this._maze.length && this._maze[row][col+1]) {
        pathLeft = true;
      }
      break;
    case 3:
      if (row < this._maze.length-1 && this._maze[row+1][col]) {
        pathLeft = true;
      }
      break;
  }
  return pathLeft;
};

Maze.prototype.isPathRight   = function(){
  var row = this._miner.row;
  var col = this._miner.col;
  var pathRight = false;
  //switch, check direction player is facing

  switch (this._miner.dir) {
    case 0:
      if (col < this._maze.length-1 && this._maze[row][col+1]) {
        pathRight = true;
      }
      break;
    case 1:
      if (row < this._maze.length-1 && this._maze[row+1][col]) {
        pathRight = true;
      }
      break;
    case 2:
      if (col > 0 && this._maze[row][col-1]) {
        pathRight = true;
      }
      break;
    case 3:
      if (row > 0 && this._maze[row-1][col]) {
        pathRight = true;
      }
      break;
  }
  return pathRight;
};

Maze.prototype.moveForward   = function(){
  moveForward = false;
  switch (this._miner.dir) {
    case 0:
      if (this.isPathForward) {
        moveForward = true;
      }
    break;
    case 1:
      if (this.is)
    break;
    case 2:
      if
    break;
    case 3:
      if
    break;`
  }
};

Maze.prototype.notDone       = function(){
};

module.exports = Maze;
