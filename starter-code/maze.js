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
  if (this._miner.dir === 0) {this._miner.dir = 3}else if
  (this._miner.dir === 1) {this._miner.dir = 0}else if
  (this._miner.dir === 2) {this._miner.dir = 1}else if
  (this._miner.dir === 3) {this._miner.dir = 2};
}

Maze.prototype.turnRight     = function(){
  if (this._miner.dir === 0) {this._miner.dir = 1}else if
  (this._miner.dir === 1) {this._miner.dir = 2}else if
  (this._miner.dir === 2) {this._miner.dir = 3}else if
  (this._miner.dir === 3) {this._miner.dir = 0};
}

Maze.prototype.isPathForward = function(){
  switch (this._miner.dir) {
    case 0:
      if (this._miner.row - 1 < 0) {
        return false;
      }
      if (maze._maze[this._miner.row - 1][this._miner.col]) {
      return true;}else{return false;}
      break;
    case 1:
      if (this._miner.col + 1 < 0) {
        return false;
      }
      if (maze._maze[this._miner.row][this._miner.col+1]) {
      return true;}else{return false;}
      break;
    case 2:
      if (this._miner.row + 1 < 0) {
        return false;
      }
      if (maze._maze[this._miner.row + 1][this._miner.col]) {
      return true;}else{return false;}
      break;
    case 3:
      if (this._miner.col - 1 < 0) {
        return false;
      }
      if (maze._maze[this._miner.row][this._miner.col-1]) {
      return true;}else{return false;}
      break;
    default:
  }
};

  if (this._miner.dir === 0) {
    if (this._maze[this.miner.row - 1][this.miner.col] === T) {
      return true;
    }else{return false;}

  // }else if
  // (this._miner.dir === 1) {this._miner.dir = 2}else if
  // (this._miner.dir === 2) {this._miner.dir = 3}else if
  // (this._miner.dir === 3) {this._miner.dir = 0};
}

Maze.prototype.isPathLeft    = function(){
}

Maze.prototype.isPathRight   = function(){
}

Maze.prototype.moveForward   = function(){
}

Maze.prototype.notDone       = function(){
}

module.exports = Maze;
