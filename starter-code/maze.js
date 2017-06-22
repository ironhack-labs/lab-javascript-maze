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
  }
}

Maze.prototype.turnLeft      = function(){
  switch(this._miner.dir) {
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
}

Maze.prototype.turnRight     = function(){
  switch(this._miner.dir) {
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
}

Maze.prototype.isPathForward = function(){
  var newRow = this._miner.row;
  var newCol = this._miner.col;
  switch(this._miner.dir) {
    case 0:
      newRow--;
    break;
    case 1:
      newCol++;
    break;
    case 2:
      newRow++;
    break;
    case 3:
      newCol--;
    break;
  }

  if (newRow < 0 || newCol < 0 || newRow > 6 || newCol > 5) return false;

  return this._maze[newRow][newCol];
};

Maze.prototype.isPathLeft    = function(){
  var newRow = this._miner.row;
  var newCol = this._miner.col;
  switch(this._miner.dir) {
    case 1:
      newRow--;
    break;
    case 2:
      newCol++;
    break;
    case 3:
      newRow++;
    break;
    case 0:
      newCol--;
    break;
  }

  if (newRow < 0 || newCol < 0 || newRow > 6 || newCol > 5) return false;

  return this._maze[newRow][newCol];
};

Maze.prototype.isPathRight   = function(){
  var newRow = this._miner.row;
  var newCol = this._miner.col;
  switch(this._miner.dir) {
    case 3:
      newRow--;
    break;
    case 0:
      newCol++;
    break;
    case 1:
      newRow++;
    break;
    case 2:
      newCol--;
    break;
  }

  if (newRow < 0 || newCol < 0 || newRow > 6 || newCol > 5) return false;

  return this._maze[newRow][newCol];
};

Maze.prototype.moveForward   = function(){
  var newRow = this._miner.row;
  var newCol = this._miner.col;
  switch(this._miner.dir) {
    case 0:
      newRow--;
    break;
    case 1:
      newCol++;
    break;
    case 2:
      newRow++;
    break;
    case 3:
      newCol--;
    break;
  }

  if (newRow < 0 || newCol < 0 || newRow > 6 || newCol > 5 || !this._maze[newRow][newCol]) return false;
  this._miner.row = newRow;
  this._miner.col = newCol;
  return this._maze[newRow][newCol];
};

Maze.prototype.notDone       = function(){
  return (this._miner.row == this._exit.row && this._miner.col == this._exit.col);
};

module.exports = Maze;
