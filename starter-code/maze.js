var Maze = function (map, exit) {
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
  var minerRow = this._miner.row,
    minerCol = this._miner.col;
  switch (this._miner.dir) {
    case 0:
      if (minerRow - 1 < 0 || this._maze[minerRow - 1][minerCol] === false) {
        return false;
      }
      else {
        return true;
      }
      break;
    case 1:
      if ( minerCol + 1 > 5 || this._maze[minerRow][minerCol + 1] === false) {
        return false;
      }
      else {
        return true;
      }
      break;
    case 2:
      if (minerRow + 1 > 6 || this._maze[minerRow + 1][minerCol] === false) {
        return false;
      }
      else {
        return true;
      }
      break;
    case 3:
      if (minerCol - 1 < 0 || this._maze[minerRow][minerCol -1] === false) {
        return false;
      }
      else {
        return true;
      }
      break;
  }
}

Maze.prototype.isPathLeft = function () {
  this.turnLeft();
  var res = this.isPathForward();
  this.turnRight();
  return res;
   
}


Maze.prototype.isPathRight = function () {
  this.turnRight();
  var res = this.isPathForward();
  this.turnLeft();
  return res;
}

Maze.prototype.moveForward = function () {
  if(this.isPathForward()){
    switch (this._miner.dir) {
      case 0:
        this._miner.row --;
        break;
      case 1:
        this._miner.col ++;
        break;
      case 2:
        this._miner.row ++;
        break;
      case 3:
        this._miner.col --;
        break;
    }
    return true;
  }
  else{
    return false;
  }
}

Maze.prototype.notDone = function () {
  if(this._exit.row != this._miner.row || this._exit.col != this._miner.col ){
      return true;
  }
  else{
    return false;
  }
}

module.exports = Maze;
