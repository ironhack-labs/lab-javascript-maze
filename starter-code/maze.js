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
  this._miner.dir = this._miner.dir === 3 ? 0 : this._miner.dir +=1;
};

Maze.prototype.isPathForward = function(){

  if (this._miner.dir === 0){
    if (this._miner.row - 1 < 0) {
      return false;
    }
    else {
      return this._maze [this._miner.row - 1] [this._miner.col];
    }
  }

  if (this._miner.dir === 1){
    if (this._miner.col + 1 >= 6) {
      return false;
    }
    else {
      return this._maze [this._miner.row] [this._miner.col + 1];
    }
  }

  if (this._miner.dir === 2){
    if (this._miner.row + 1 > 6) {
      return false;
    }
    else {
      return this._maze [this._miner.row + 1] [this._miner.col];
    }
  }

  if (this._miner.dir === 3){
    if (this._miner.col - 1 < 0) {
      return false;
    }
    else {
      return this._maze [this._miner.row] [this._miner.col - 1];
    }
  }
};

Maze.prototype.isPathLeft    = function(){

  if (this._miner.dir === 1){
    if (this._miner.row - 1 < 0) {
      return false;
    }
    else {
      return this._maze [this._miner.row - 1] [this._miner.col];
    }
  }

  if (this._miner.dir === 2){
    if (this._miner.col + 1 >= 6) {
      return false;
    }
    else {
      return this._maze [this._miner.row] [this._miner.col + 1];
    }
  }

  if (this._miner.dir === 3){
    if (this._miner.row + 1 > 6) {
      return false;
    }
    else {
      return this._maze [this._miner.row + 1] [this._miner.col];
    }
  }

  if (this._miner.dir === 0){
    if (this._miner.col - 1 < 0) {
      return false;
    }
    else {
      return this._maze [this._miner.row] [this._miner.col - 1];
    }
  }
};

Maze.prototype.isPathRight   = function(){

  if (this._miner.dir === 2){
    if (this._miner.row - 1 < 0) {
      return false;
    }
    else {
      return this._maze [this._miner.row - 1] [this._miner.col];
    }
  }

  if (this._miner.dir === 3){
    if (this._miner.col + 1 >= 6) {
      return false;
    }
    else {
      return this._maze [this._miner.row] [this._miner.col + 1];
    }
  }

  if (this._miner.dir === 0){
    if (this._miner.col + 1 > 5) {
      return false;
    }
    else {
      return this._maze [this._miner.row + 1] [this._miner.col];
    }
  }

  if (this._miner.dir === 1){
    if (this._miner.col - 1 < 0) {
      return false;
    }
    else {
      return this._maze [this._miner.row] [this._miner.col - 1];
    }
  }
};

Maze.prototype.moveForward   = function(){
};

Maze.prototype.notDone       = function(){
};

module.exports = Maze;
