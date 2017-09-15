var Maze = function(map, exit) {
  /*
  map = [
    [ T,  F , T,  T,  T,  F],
    [ T,  F,  T,  F,  T,  F],
    [ T,  T,  T,  F,  T,  F],
    [ F,  F,  F,  F,  T,  F],
    [ T,  T,  T,  T,  T,  F],
    [ T,  F,  F,  F,  F,  T],
    [ T,  T,  T,  T,  T,  T]];
  exit= {row:5, col:5};
  */
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
  if(this._miner.dir === 0){
    this._miner.dir=3;
  }else {
  this._miner.dir--;
}};

Maze.prototype.turnRight     = function(){
  if(this._miner.dir === 3){
    this._miner.dir = 0;
  }else {
    this._miner.dir++;
  }
};

Maze.prototype.isPathForward = function(){
  var miner = this._miner;
  var maze = this._maze;
  switch (miner.dir) {

    case 0:
      if ( miner.row !== 0 ) {
        if( maze[miner.row - 1][miner.col]) {
          return true;
        }
      }
      break;

    case 1:
      if ( miner.col !== maze[0].length - 1 ) {
        if( maze[miner.row][miner.col + 1] ) {
          return true;
        }
      }
        break;

    case 2:
      if (  miner.row !== maze.length - 1 ) {
        if (maze[miner.row+1][miner.col] ) {
          return true;
        }
      }
      break;

    case 3:
      if ( miner.col !== 0) {
        if (maze[miner.row][miner.col - 1] ) {
        return true;
        }
      }
      break;
  }
    return false;
};

Maze.prototype.isPathLeft    = function(){
  var miner = this._miner;
  var maze = this._maze;
  switch(miner.dir) {

    case 0:
      if(miner.col !==0){
        if(maze[miner.row][miner.col - 1]){
        } return true;
          } break;



  }
};

Maze.prototype.isPathRight   = function(){
};

Maze.prototype.moveForward   = function(){
};

Maze.prototype.notDone       = function(){
};

module.exports = Maze;
