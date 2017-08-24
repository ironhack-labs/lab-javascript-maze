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
  if (this._miner.dir != 0) {
    this._miner.dir -= 1; 
  } else {
    this._miner.dir = 3;
  }
};

Maze.prototype.turnRight     = function(){
  if (this._miner.dir != 3) {
    this._miner.dir += 1; 
  } else {
    this._miner.dir = 0;
  }
};

Maze.prototype.isPathForward = function(){
  switch (this._miner.dir) {
  case 0:
    if (this._miner.row === 0) {
      return false;
    } else if (this._maze[this._miner.row - 1][this._miner.col]) {
      return true;
    } else {
      return false;
    };
  case 1:
    if (this._maze[this._miner.row][this._miner.col + 1]) {
      return true;
    } else {
      return false;
    };
  case 2:
    if (this._miner.row === (this._maze.length - 1)) {
      return false;
    } else if (this._maze[this._miner.row + 1][this._miner.col]) {
      return true;
    } else {
      return false;
    };
  case 3:
    if (this._maze[this._miner.row][this._miner.col - 1]) {
      return true;
    } else {
      return false;
    }
  } 
};

Maze.prototype.isPathLeft    = function(){
  switch (this._miner.dir) {
    case 1:
    if (this._miner.row === 0) {
      return false;
    } else if (this._maze[this._miner.row - 1][this._miner.col]) {
        return true;
      } else {
        return false;
      };
    case 2:
      if (this._maze[this._miner.row][this._miner.col + 1]) {
        return true;
      } else {
        return false;
      };
    case 3:
    if (this._miner.row === (this._maze.length - 1)) {
      return false;
      } else if (this._maze[this._miner.row + 1][this._miner.col]) {
       return true;
      } else {
        return false;
      };
    case 0:
      if (this._maze[this._miner.row][this._miner.col - 1]) {
        return true;
      } else {
        return false;
      }
    } 
};

Maze.prototype.isPathRight   = function(){
  switch (this._miner.dir) {
    case 3:
    if (this._miner.row === 0) {
      return false;
    } else if (this._maze[this._miner.row - 1][this._miner.col]) {
        return true;
      } else {
        return false;
      };
    case 0:
      if (this._maze[this._miner.row][this._miner.col + 1]) {
        return true;
      } else {
        return false;
      };
    case 1:
      if (this._maze[this._miner.row + 1][this._miner.col]) {
       return true;
      } else {
        return false;
      };
    case 2:
      if (this._maze[this._miner.row][this._miner.col - 1]) {
        return true;
      } else {
        return false;
      }
    } 
};

Maze.prototype.moveForward   = function(){
  switch (this._miner.dir) {
    case 0:
    if(this.isPathForward()) {
        this._miner.row -= 1;
        return true;
      } else {
        return false;
      }
    case 1:
    if(this.isPathForward()) {
      this._miner.col += 1;
      return true;
    } else {
      return false;
    }
    case 2:
    if(this.isPathForward()) {
      this._miner.row += 1;
      return true;
    } else {
      return false;
    }
    case 3:
    if(this.isPathForward()) {
      this._miner.col -= 1;
      return true;
    } else {
     return false;
    }
  }
}

Maze.prototype.notDone       = function(){
  if (this._miner.row != this._exit.row && this._miner.col != this._exit.col) {
    return false;
  } else {
    return true;
  }
}

module.exports = Maze;
