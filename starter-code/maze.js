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
  if (this.isPathLeft()) {
    this._miner.dir = 3;
  }
}

Maze.prototype.turnRight     = function(){
  if (this.isPathRight()) {
    this._miner.dir = 1;
  }
}

Maze.prototype.isPathForward = function(){
  switch (this._miner.dir) {
    case 0:
      if (this._maze[this._miner.row - 1, this._miner.col]){
      return true;
    }
      break;

    case 1:
      if (this._maze[this._miner.row, this._miner.col + 1]){
      return true;
  }
      break;

    case 2:
      if (this._maze[this._miner.row + 1, this._miner.col]){
      return true;
    }
      break;

    case 3:
      if (this._maze[this._miner.row, this._miner.col - 1]){
      return true;
  }
      break;

    default:
      break;
  }
}

Maze.prototype.isPathLeft    = function(){
  switch (this._miner.dir) {
    case 0:
      if (this._maze[this._miner.row, this._miner.col - 1]){
      return true;
    }
      break;

    case 1:
      if (this._maze[this._miner.row - 1, this._miner.col]){
      return true;
  }
      break;

    case 2:
      if (this._maze[this._miner.row + 1, this._miner.col]){
      return true;
    }
      break;

    case 3:
      if (this._maze[this._miner.row, this._miner.col + 1]){
      return true;
  }
      break;

    default:
      break;
  }
}

Maze.prototype.isPathRight   = function(){
  switch (this._miner.dir) {
    case 0:
      if (this._maze[this._miner.row, this._miner.col + 1]){
      return true;
    }
      break;

    case 1:
      if (this._maze[this._miner.row + 1, this._miner.col]){
      return true;
  }
      break;

    case 2:
      if (this._maze[this._miner.row - 1, this._miner.col]){
      return true;
    }
      break;

    case 3:
      if (this._maze[this._miner.row, this._miner.col - 1]){
      return true;
  }
      break;

    default:
      break;
  }
}

Maze.prototype.moveForward   = function(){
  if (this.isPathForward()) {
    if (this._miner.dir === 0) {
      this._miner.row -= 1;
    } else if (this._miner.dir === 2){
      this._miner.row += 1;
    } else if (this._miner.dir === 1) {
      this._miner.col += 1;
    } else {
      this._miner.col -= 1;
    }
  }
  return this._miner;
}

Maze.prototype.notDone       = function(){
  if (this._miner.row !== this._exit.row || this._miner.col !== this._exit.col) {
    return true;
  } else {
    return false;
  }
}

module.exports = Maze;
