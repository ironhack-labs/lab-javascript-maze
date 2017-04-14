var Maze = function (map, exit) {
  this._miner = {
    row: 0,
    col: 0,
    dir: 0, // 0:up, 1:right, 2: down, 3:left
  };
  this._maze = map;
  this._exit = {
    row: exit.row,
    col: exit.col,
  };

  this._maxRow = this._maze.length - 1;
  this._maxCol = this._maze[0].length - 1;
};

Maze.prototype.turnLeft = function () {
  switch (this._miner.dir) {
    case 3:
      this._miner.dir = 2;
      break;
    case 2:
      this._miner.dir = 1;
      break;
    case 1:
      this._miner.dir = 0;
      break;
    case 0:
      this._miner.dir = 3;
      break;
  }
};

Maze.prototype.turnRight = function () {
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
}

Maze.prototype.isPathForward = function () {
  var minerX = this._miner.row;
  var minerY = this._miner.col;

  switch (this._miner.dir) {
    case 0:
      if (minerX === 0) {
        return false;
      } else if (this._maze[minerX - 1][minerY] === true) {
        return true;
      } else {
        return false;
      }
      break;
    case 1:
      if (minerY === this._maxCol) {
        return false;
      } else if (this._maze[minerX][minerY + 1] === true) {
        return true;
      } else {
        return false;
      }
      break;
    case 2:
      if (minerX === this._maxRow) {
        return false;
      } else if (this._maze[minerX + 1][minerY]) {
        return true;
      } else {
        return false;
      }
      break;
    case 3:
      if (minerY === 0) {
        return false;
      } else if (this._maze[minerX][minerY-1] === true) {
        return true;
      }
      return false;
  }
};

/*
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
// 0:up, 1:right, 2: down, 3:left
*/

Maze.prototype.isPathLeft = function () {
  var minerX = this._miner.row;
  var minerY = this._miner.col;

  switch (this._miner.dir) {
    case 0:
      if (minerY === 0) {
        return false;
      }
      if (this._maze[minerX][minerY - 1]) {
        return true;
      }
      return false;


    case 1:
      if (minerX === 0) {
        return false;
      }
      if (this._maze[minerX - 1][minerY]) {
        return true;
      }
      return false;

    case 2:
      if (minerY === this._maxCol) {
        return false;
      }
      if (this._maze[minerX][minerY + 1]) {
        return true;
      }
      return false;

    case 3:
      if (minerX === this._maxRow) {
        return false;
      }
      if (this._maze[minerX + 1][minerY]) {
        return true;
      }
      return false;
  }
};

Maze.prototype.isPathRight = function () {

  var minerX = this._miner.row;
  var minerY = this._miner.col;

  switch (this._miner.dir) {
    case 0:
      if (minerY === this._maxCol) {
        return false;
      }
      if (this._maze[minerX][minerY + 1]) {
        return true;
      }
      return false;


    case 1:
      if (minerX === this._maxRow) {
        return false;
      }
      if (this._maze[minerX + 1][minerY]) {
        return true;
      }
      return false;

    case 2:
      if (minerY === 0) {
        return false;
      }
      if (this._maze[minerX][minerY - 1]) {
        return true;
      }
      return false;

    case 3:
      if (minerX === 0) {
        return false;
      }
      if (this._maze[minerX - 1][minerY]) {
        return true;
      }
      return false;
  }
};

Maze.prototype.moveForward = function () {
  if (this.isPathForward()) {
    switch (this._miner.dir) {
      case 0:
        this._miner.row--;
        break;
      case 1:
        this._miner.col++;
        break;
      case 2:
        this._miner.row++;
        break;
      case 3:
        this._miner.col--;
        break;
    }
    return true;
  } else {
    return false;
  }
};

Maze.prototype.notDone = function () {
  var minerX = this._miner.row;
  var minerY = this._miner.col;
  if (minerX === this._exit.row && minerY === this._exit.col) {
    return false;
  } else {
    return true;
  }
};

module.exports = Maze;
