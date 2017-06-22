var Maze = function (map, exit) {

  this.NORTH = 0;
  this.EAST = 1;
  this.SOUTH = 2;
  this.WEST = 3;

  this._miner = {
    row: 0,
    col: 0,
    dir: this.NORTH
  };
  this._maze = map;
  this._exit = {
    row: exit.row,
    col: exit.col
  }
}

Maze.prototype.turnLeft = function () {
  this._miner.dir = (this._miner.dir + 3) % 4;
}

Maze.prototype.turnRight = function () {
  this._miner.dir = (this._miner.dir + 1) % 4;
}

Maze.prototype.isPathForward = function () {

  var nextCell;
  var minerRow = this._miner.row;
  var minerCol = this._miner.col;

  switch (this._miner.dir) {

    case this.NORTH:

      nextCell = this._maze[minerRow - 1] && this._maze[minerRow - 1][minerCol];

      break;

    case this.SOUTH:

      nextCell = this._maze[minerRow + 1] && this._maze[minerRow + 1][minerCol];

      break;

    case this.EAST:

      nextCell = this._maze[minerRow][minerCol + 1];

      break;

    case this.WEST:

      nextCell = this._maze[minerRow][minerCol - 1];

      break;
  }

  return !!nextCell;
}

Maze.prototype.isPathLeft = function () {

  var nextCell;
  var minerRow = this._miner.row;
  var minerCol = this._miner.col;

  switch (this._miner.dir) {

    case this.NORTH:

      nextCell = this._maze[minerRow][minerCol - 1];

      break;

    case this.SOUTH:

      nextCell = this._maze[minerRow][minerCol + 1];

      break;

    case this.EAST:

      nextCell = this._maze[minerRow - 1] && this._maze[minerRow - 1][minerCol];

      break;

    case this.WEST:

      nextCell = this._maze[minerRow + 1] && this._maze[minerRow + 1][minerCol];

      break;
  }

  return !!nextCell;
}

Maze.prototype.isPathRight = function () {

  var nextCell;
  var minerRow = this._miner.row;
  var minerCol = this._miner.col;

  switch (this._miner.dir) {

    case this.NORTH:

      nextCell = this._maze[minerRow][minerCol + 1];

      break;

    case this.SOUTH:

      nextCell = this._maze[minerRow][minerCol - 1];

      break;

    case this.EAST:

      nextCell = this._maze[minerRow + 1] && this._maze[minerRow + 1][minerCol];

      break;

    case this.WEST:

      nextCell = this._maze[minerRow - 1] && this._maze[minerRow - 1][minerCol];

      break;
  }

  return !!nextCell;
}

Maze.prototype.moveForward = function () {

  if (!this.isPathForward()) return false;

  switch (this._miner.dir) {

    case this.NORTH:

      this._miner.row--;

      break;

    case this.SOUTH:

      this._miner.row++;

      break;

    case this.EAST:

      this._miner.col++;

      break;

    case this.WEST:

      this._miner.col--;

      break;
  }

  return true;
}

Maze.prototype.notDone = function () {
  return !(this._miner.row === this._exit.row && this._miner.col === this._exit.col);
}

module.exports = Maze;
