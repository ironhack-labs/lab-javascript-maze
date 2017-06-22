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
  if (this._miner.dir === 0) {
    this._miner.dir = 3;
  } else {
    this._miner.dir--;
  }
};

Maze.prototype.turnRight     = function(){
  if (this._miner.dir === 3) {
    this._miner.dir = 0;
  } else {
    this._miner.dir++;
  }
};

Maze.prototype._checkPathNorth = function () {
  if (this._maze[this._miner.row - 1] && this._maze[this._miner.row - 1][this._miner.col] === true) {
    return true;
  }
  return false;
};
Maze.prototype._checkPathEast = function () {
  return this._maze[this._miner.row][this._miner.col + 1] === true;
};
Maze.prototype._checkPathSouth = function () {
  if (this._maze[this._miner.row + 1] && this._maze[this._miner.row + 1][this._miner.col] === true) {
    return true;
  }
  return false;
};
Maze.prototype._checkPathWest = function () {
  return this._maze[this._miner.row][this._miner.col - 1] === true;
};

Maze.prototype.isPathForward = function(){
  switch (this._miner.dir) {
    case 0:
      return this._checkPathNorth();
    case 1:
      return this._checkPathEast();
    case 2:
      return this._checkPathSouth();
    case 3:
      return this._checkPathWest();
  }
  return false;
};

Maze.prototype.isPathLeft    = function(){
  switch (this._miner.dir) {
    case 0:
      return this._checkPathWest();
    case 1:
      return this._checkPathNorth();
    case 2:
      return this._checkPathEast();
    case 3:
      return this._checkPathSouth();
  }
};

Maze.prototype.isPathRight   = function(){
  switch (this._miner.dir) {
    case 0:
      return this._checkPathEast();
    case 1:
      return this._checkPathSouth();
    case 2:
      return this._checkPathWest();
    case 3:
      return this._checkPathNorth();
  }
};

Maze.prototype._moveNorth     = function () {
  this._miner.row--;
};
Maze.prototype._moveEast     = function () {
  this._miner.col++;
};
Maze.prototype._moveSouth     = function () {
  this._miner.row++;
};
Maze.prototype._moveWest     = function () {
  this._miner.col--;
};
Maze.prototype.moveForward   = function() {
  if (!this.isPathForward()) {
    return false;
  }
  switch (this._miner.dir) {
    case 0:
      this._moveNorth();
      break;
    case 1:
      this._moveEast();
      break;
    case 2:
      this._moveSouth();
      break;
    case 3:
      this._moveWest();
      break;
  }
  return true;
};

Maze.prototype.notDone       = function() {
  if (this._miner.row === this._exit.row && this._miner.col === this._exit.col) {
    return false;
  }
  return true;
};

module.exports = Maze;
