var Maze = function(map, exit) {
  this._miner = {
    row: 0,
    col: 0,
    dir: 0 // 0:up, 1:right, 2: down, 3:left
  };

  /*
  map = [
    [ T,  F , T,  T,  T,  F],
    [ T,  F,  T,  F,  T,  F],
    [ T,  T,  T,  F,  T,  F],
    [ F,  F,  F,  F,  T,  F],
    [ T,  T,  T,  T,  T,  F],
    [ T,  F,  F,  F,  F,  T],
    [ T,  T,  T,  T,  T,  T]];
  exit= {row:5, col:5};
  */
  this._maze = map;
  this._exit = {
    row: exit.row,
    col: exit.col
  };
};

// Direction
var direction = {
  up: 0,
  right: 1,
  down: 2,
  left: 3
};

Maze.prototype.turnLeft = function() {
  this._miner.dir = this._miner.dir > 0 ? this._miner.dir - 1 : 3;
};

Maze.prototype.turnRight = function() {
  this._miner.dir = this._miner.dir < 3 ? this._miner.dir + 1 : 0;
};

Maze.prototype.isPathForward = function() {
  switch (this._miner.dir) {
    case direction.up:
      return this._miner.row > 0
        ? this._maze[this._miner.row - 1][this._miner.col]
        : false;
    case direction.right:
      return this._miner.col < 5
        ? this._maze[this._miner.row][this._miner.col + 1]
        : false;
    case direction.down:
      return this._miner.row < 6
        ? this._maze[this._miner.row + 1][this._miner.col]
        : false;
    case direction.left:
      return this._miner.col > 0
        ? this._maze[this._miner.row][this._miner.col - 1]
        : false;
  }
};

Maze.prototype.isPathLeft = function() {
  switch (this._miner.dir) {
    case direction.up:
      return this._miner.col > 0
        ? this._maze[this._miner.row][this._miner.col - 1]
        : false;
    case direction.right:
      return this._miner.row > 0
        ? this._maze[this._miner.row - 1][this._miner.col]
        : false;
    case direction.down:
      return this._miner.col < 5
        ? this._maze[this._miner.row][this._miner.col + 1]
        : false;
    case direction.left:
      return this._miner.row < 6
        ? this._maze[this._miner.row + 1][this._miner.col]
        : false;
  }
};

Maze.prototype.isPathRight = function() {
  switch (this._miner.dir) {
    case direction.up:
      return this._miner.col < 5
        ? this._maze[this._miner.row][this._miner.col + 1]
        : false;
    case direction.right:
      return this._miner.row < 6
        ? this._maze[this._miner.row + 1][this._miner.col]
        : false;
    case direction.down:
      return this._miner.col > 0
        ? this._maze[this._miner.row][this._miner.col - 1]
        : false;
    case direction.left:
      return this._miner.row > 0
        ? this._maze[this._miner.row - 1][this._miner.col]
        : false;
  }
};

Maze.prototype.moveForward = function() {
  if (this.isPathForward()) {
    switch (this._miner.dir) {
      case direction.up:
        this._miner.row--;
        break;
      case direction.right:
        this._miner.col++;
        break;
      case direction.down:
        this._miner.row++;
        break;
      case direction.left:
        this._miner.col--;
        break;
    }
    return false;
  }
};

Maze.prototype.notDone = function() {};

module.exports = Maze;
