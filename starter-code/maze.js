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

Maze.prototype.turnLeft = function() {
  if (this._miner.dir === 0) {
    this._miner.dir = 3;
  } else {
    this._miner.dir--;
  }
};

Maze.prototype.turnRight = function() {
  if (this._miner.dir === 3) {
    this._miner.dir = 0;
  } else {
    this._miner.dir++;
  }
};

Maze.prototype.isPathForward = function() {
  switch (this._miner.dir) {
    case 0:

      if (this._miner.row === 0) {
        return false;
      } else if ((this.maze[this._miner.row - 1][this._miner.col])) {

          return true;
        } else {
          return false;
        }


      break;
    case 1:
      if (this._miner.col === this.maze[0].length) {
        return false;
      } else {
        if ((this.maze[this._miner.row][this._miner.col + 1])) {
          return true;
        } else {
          return false;
        }
      }

      break;
    case 2:
      if (this._miner.row === this.maze.length) {
        return false;
      }else {
        if ((this.maze[this._miner.row + 1][this._miner.col])) {
          return true;
        } else {
          return false;
        }
      }

      break;
    case 3:
      if (this._miner.col === 0) {
        return false;
      }else {
        if ((this.maze[this._miner.row][this._miner.col - 1])) {
          return true;
        } else {
          return false;
        }
      }

      break;


  }
};

Maze.prototype.isPathLeft = function() {

};

Maze.prototype.isPathRight = function() {};
Maze.prototype.moveForward = function() {

};

Maze.prototype.notDone = function() {};

module.exports = Maze;
