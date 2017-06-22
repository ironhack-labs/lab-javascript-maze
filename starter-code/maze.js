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

Maze.prototype.turnLeft = function(){
  if (this._miner.dir === 0) {
    this._miner.dir = 3;
  } else if (this._miner.dir === 1) {
    this._miner.dir = 0;
  } else if (this._miner.dir === 2) {
    this._miner.dir = 1;
  } else if (this._miner.dir === 3) {
    this._miner.dir = 2;
  }
};

Maze.prototype.turnRight = function(){
  if (this._miner.dir === 0) {
    this._miner.dir = 1;
  } else if (this._miner.dir === 1) {
    this._miner.dir = 2;
  } else if (this._miner.dir === 2) {
    this._miner.dir = 3;
  } else if (this._miner.dir === 3) {
    this._miner.dir = 0;
  }
};

Maze.prototype.isPathForward = function(){

  if (this._miner.dir === 0) { //up
    if (this._maze[this._miner.row - 1] === undefined) return false;

    return this._maze[this._miner.row - 1][this._miner.col];
  }

  if (this._miner.dir === 1) { //right

    if (this._maze[this._miner.row][this._miner.col + 1] === undefined) return false;

    return this._maze[this._miner.row][this._miner.col + 1];
  }

  if (this._miner.dir === 2) { //down
    if (this._maze[this._miner.row + 1] === undefined) return false;

    return this._maze[this._miner.row + 1][this._miner.col];
  }

  if (this._miner.dir === 3) { //left
    if (this._maze[this._miner.col - 1] === undefined) return false;

    return this._maze[this._miner.row][this._miner.col - 1];
  }

};

Maze.prototype.isPathLeft = function(){

  if (this._miner.dir === 0) { //up
    if (this._maze[this._miner.col - 1] === undefined) return false;

    return this._maze[this._miner.row][this._miner.col - 1];
  }

  if (this._miner.dir === 1) { //right
    if (this._maze[this._miner.row - 1] === undefined) return false;

    return this._maze[this._miner.row - 1][this._miner.col];
  }

  if (this._miner.dir === 2) { //down
    if (this._maze[this._miner.row][this._miner.col + 1] === undefined) return false;

    return this._maze[this._miner.row][this._miner.col + 1];
  }

  if (this._miner.dir === 3) { //left
    if (this._maze[this._miner.row + 1] === undefined) return false;

    return this._maze[this._miner.row + 1][this._miner.col];
  }

};

Maze.prototype.isPathRight = function(){

  if (this._miner.dir === 0) { //up
    if (this._maze[this._miner.col + 1] === undefined) return false;

    return this._maze[this._miner.row][this._miner.col + 1];
  }

  if (this._miner.dir === 1) { //right
    if (this._maze[this._miner.row + 1] === undefined) return false;

    return this._maze[this._miner.row + 1][this._miner.col];
  }

  if (this._miner.dir === 2) { //down
    if (this._maze[this._miner.col - 1] === undefined) return false;

    return this._maze[this._miner.row][this._miner.col - 1];
  }

  if (this._miner.dir === 3) { //left
    if (this._maze[this._miner.row - 1] === undefined) return false;

    return this._maze[this._miner.row - 1][this._miner.col];
  }
};

Maze.prototype.moveForward = function(){

  if(this.isPathForward()) {

    if (this._miner.dir === 0) { //up
      this._miner.row -= 1;
      return true;
    }
    if (this._miner.dir === 1) { //right
      this._miner.col += 1;
      return true;
    }
    if (this._miner.dir === 2) { //down
      this._miner.row += 1;
      return true;
    }
    if (this._miner.dir === 3) { //left
      this._miner.col -= 1;
      return true;
    }
  } else {
    return false;
  }
};

Maze.prototype.notDone = function(){
  if (this._miner.row === this._exit.row &&
      this._miner.col === this._exit.col) {
    return true;
  } else {
    return false;
  }
};

module.exports = Maze;
