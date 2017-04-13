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

Maze.prototype.turnLeft      = function(dir){
  switch(dir) {
    case 0:
      return ;
    case 1:
      return 0;
    case 2:
      return 1;
    case 3:
      return 2;
    }
};

Maze.prototype.turnRight     = function(dir){
  switch(dir) {
    case 0:
      return 1;
    case 1:
      return 2;
    case 2:
      return 3;
    case 3:
      return 0;
  }
};

Maze.prototype.isPathForward = function(){
  if(this._miner.dir === 2){
    return true;
  }else{
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
