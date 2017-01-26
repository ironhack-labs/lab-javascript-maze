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
  this._miner.dir = this._miner.dir === 0 ? 3 : this._miner.dir -= 1;
};

Maze.prototype.turnRight     = function(){
  this._miner.dir = this._miner.dir === 3 ? 0 : this._miner.dir += 1;
};

Maze.prototype.isPathForward = function(){

// incluir los obstaculos como variable en el switch
  switch (this._miner.dir, this._miner.row, this._miner.col) {
  case (0, this._miner.row > 0):
  return true;
  break;
  case (1, this._miner.col <= 5) :
  return true;
  break;
  case (2, this._miner.row <= 6) :
  return true;
  break;
  case (3, this._miner.col > 0) :
  return true;
  break;
  default:
  return false;
}
};

Maze.prototype.isPathLeft    = function(){
  switch (this._miner.dir, this._miner.row, this._miner.col) {
  case (0, this._miner.row > 0):
  return true;
  break;
  case (1, this._miner.col <= 5) :
  return true;
  break;
  case (2, this._miner.row <= 6) :
  return true;
  break;
  case (3, this._miner.col > 0) :
  return true;
  break;
  default:
  return false;
}
}

Maze.prototype.isPathRight   = function(){
  switch (this._miner.dir, this._miner.row, this._miner.col) {
  case (0, this._miner.row > 0):
  return true;
  break;
  case (1, this._miner.col <= 5) :
  return true;
  break;
  case (2, this._miner.row <= 6) :
  return true;
  break;
  case (3, this._miner.col > 0) :
  return true;
  break;
  default:
  return false;
}
}

Maze.prototype.moveForward   = function(){
  if (isPathForward === true) {
    this._miner.dir = this._miner.dir === 0 ? 3 : this._miner.dir -= 1;
  }
}

Maze.prototype.notDone       = function(){
}

module.exports = Maze;
