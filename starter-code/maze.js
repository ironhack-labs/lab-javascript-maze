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
    default:
  }
};

Maze.prototype.turnRight     = function(){
  switch (this._miner.dir) {
    case 3:
      this._miner.dir = 0;
      break;
    case 2:
      this._miner.dir = 3;
      break;
    case 1:
      this._miner.dir = 2;
      break;
    case 0:
      this._miner.dir = 1;
      break;
    default:
  }
};

Maze.prototype.isPathForward = function(){
  var newRow = maze._miner.row =2;
  var newCol = maze._miner.col= 4;

  switch (this._miner.dir) {
    case 0:
        return false;
    case 1:
        return false;
    case 2:
        return true;
    case 3:

        return false;
  }
};

Maze.prototype.isPathLeft    = function(){
};

Maze.prototype.isPathRight   = function(){
};

Maze.prototype.moveForward   = function(){

};

Maze.prototype.notDone       = function(){
};

module.exports = Maze;
