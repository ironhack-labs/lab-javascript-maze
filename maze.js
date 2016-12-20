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
  this._miner.dir = (this._miner.dir === 0 ? 3 : this._miner.dir-1);
}
Maze.prototype.turnRight     = function(){
  this._miner.dir = (this._miner.dir === 3 ? 0 : this._miner.dir+1);
}
Maze.prototype.isPathForward = function(){
  var m = this._miner;
  switch (m.dir) {
    case 0: return (m.row !== 0                          && this._maze[m.row-1][m.col]); // up
    case 2: return (m.row !== this._maze.length-1        && this._maze[m.row+1][m.col]); // down
    case 1: return (m.col !== this._maze[m.row].length-1 && this._maze[m.row][m.col+1]); // right
    case 3: return (m.col !== 0                          && this._maze[m.row][m.col-1]); // left
  }
}
Maze.prototype.isPathLeft    = function(){
  this.turnLeft();
  let pathLeft = this.isPathForward();
  this.turnRight();
  return pathLeft;
}
Maze.prototype.isPathRight   = function(){
  this.turnRight();
  let pathRight = this.isPathForward();
  this.turnLeft();
  return pathRight;
}
Maze.prototype.moveForward   = function(){
  if (this.isPathForward()) {
    var m = this._miner;
    switch (m.dir) {
      case 0: this._miner.row--; return true; // up
      case 2: this._miner.row++; return true; // down
      case 1: this._miner.col++; return true; // right
      case 3: this._miner.col--; return true; // left
    }
  } else {
    return false;
  }
}
Maze.prototype.notDone       = function(){
  return ((this._miner.row === this._exit.row) &&
          (this._miner.col === this._exit.col))
}

module.exports = Maze;
