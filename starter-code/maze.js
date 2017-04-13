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
  this._maxRow = this._maze.length-1; 
  this._maxCol = this._maze[0].length-1; 

}

Maze.prototype.turnLeft      = function(){
  this._miner.dir = (this._miner.dir-1 + 4) % 4;
}

Maze.prototype.turnRight     = function(){
  this._miner.dir = (this._miner.dir+1) % 4;
}

Maze.prototype.isPathForward = function(){
  switch(this._miner.dir) {
    case 0: return this._miner.row!=0 && this._maze[this._miner.row-1][this._miner.col];
    case 1: return this._miner.col!=this._maxCol && this._maze[this._miner.row][this._miner.col+1];
    case 2: return this._miner.row!=this._maxRow && this._maze[this._miner.row+1][this._miner.col];
    case 3: return this._miner.col!=0 && this._maze[this._miner.row][this._miner.col-1];
  }
}

Maze.prototype.isPathLeft    = function(){
  this.turnLeft();
  var res = this.isPathForward();
  this.turnRight();
  return res;
}

Maze.prototype.isPathRight   = function(){
  this.turnRight();
  var res = this.isPathForward();
  this.turnLeft();
  return res;
}

Maze.prototype.moveForward   = function(){
  if(this.isPathForward()) {
    switch(this._miner.dir) {
      case 0: this._miner.row--; break;
      case 1: this._miner.col++; break;
      case 2: this._miner.row++; break;
      case 3: this._miner.col--; break;
    }
    return true;
  } else {
    return false;
  }
}

Maze.prototype.notDone       = function(){
  return this._miner.row===this._exit.row && this._miner.col === this._exit.col;
}


module.exports = Maze;