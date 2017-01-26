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
  this._miner.dir -= 1;
  if (this._miner.dir < 0) {
    this._miner.dir = 3;
  }
};

Maze.prototype.turnRight     = function(){
  this._miner.dir += 1;
  if (this._miner.dir > 3) {
    this._miner.dir = 0;
  }
};

Maze.prototype.isPathForward = function(){
  switch(this._miner.dir) {
    case 0:
      if (this._miner.row - 1 < 0 || this._maze[this._miner.row - 1][this._miner.col] === false) {
        return false;
      } else {
        return true;
      }
      break;
    case 1:
      if (this._miner.col + 1 > 5 || this._maze[this._miner.row][this._miner.col + 1] === false) {
        return false;
      } else {
        return true;
      }
      break;
    case 2:
      if (this._miner.row + 1 > 6 || this._maze[this._miner.row + 1][this._miner.col] === false) {
        return false;
      } else {
        return true;
      }
      break;
    case 3:
      if (this._miner.col - 1 < 0 || this._maze[this._miner.row][this._miner.col - 1] === false) {
        return false;
      } else {
        return true;
      }
      break;

  }
};

Maze.prototype.isPathLeft    = function(){
  switch(this._miner.dir) {
    case 0:
      if (this._miner.col - 1 < 0 || this._maze[this._miner.row][this._miner.col - 1] === false) {
        return false;
      } else {
        return true;
      }
      break;
    case 1:
      if (this._miner.row - 1 < 0 || this._maze[this._miner.row - 1][this._miner.col] === false) {
        return false;
      } else {
        return true;
      }
      break;
    case 2:
      if (this._miner.col + 1 > 5 || this._maze[this._miner.row][this._miner.col + 1] === false) {
        return false;
      } else {
        return true;
      }
      break;
    case 3:
      if (this._miner.row + 1 > 6 || this._maze[this._miner.row + 1][this._miner.col] === false) {
        return false;
      } else {
        return true;
      }
      break;

  }
};


Maze.prototype.isPathRight   = function(){
  switch(this._miner.dir) {
    case 0:
      if (this._miner.col + 1 > 5|| this._maze[this._miner.row][this._miner.col + 1] === false) {
        return false;
      } else {
        return true;
      }
      break;
    case 1:
      if (this._miner.row + 1 > 6 || this._maze[this._miner.row + 1][this._miner.col] === false) {
        return false;
      } else {
        return true;
      }
      break;
    case 2:
      if (this._miner.col - 1 < 0 || this._maze[this._miner.row][this._miner.col - 1] === false) {
        return false;
      } else {
        return true;
      }
      break;
    case 3:
      if (this._miner.row - 1 < 0 || this._maze[this._miner.row - 1][this._miner.col] === false) {
        return false;
      } else {
        return true;
      }
      break;

  }
};


Maze.prototype.moveForward   = function(){
  switch(this._miner.dir) {
    case 0:
      if (this._miner.row - 1 < 0 || this._maze[this._miner.row - 1][this._miner.col] === false) {
        return false;
      } else {
        this._miner.row -= 1;
        return true;
      }
      break;
    case 1:
      if (this._miner.col + 1 > 5 || this._maze[this._miner.row][this._miner.col + 1] === false) {
        return false;
      } else {
        this._miner.col += 1;
        return true;
      }
      break;
    case 2:
      if (this._miner.row + 1 > 6 || this._maze[this._miner.row + 1][this._miner.col] === false) {
        return false;
      } else {
        this._miner.row += 1;
        return true;
      }
      break;
    case 3:
      if (this._miner.col - 1 < 0 || this._maze[this._miner.row][this._miner.col - 1] === false) {
        return false;
      } else {
        this._miner.col -= 1;
        return true;
      }
      break;
  }
};

Maze.prototype.notDone       = function(){
  if (this._exit.row !== this._miner.row && this._exit.col !== this._miner.col) {
    return false;
  }else {
    return true;
  }
};



module.exports = Maze;
