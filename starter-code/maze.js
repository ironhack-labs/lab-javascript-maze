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
  switch(this._miner.dir) {
    case 0:
      this._miner.dir = 3;
    break;
    case 1:
      this._miner.dir = 0;
    break;
    case 2:
      this._miner.dir = 1;
    break;
    case 3:
      this._miner.dir = 2;
    break;
  }
  
};

Maze.prototype.turnRight = function(){
   switch(this._miner.dir) {
    case 0:
      this._miner.dir = 1;
    break;
    case 1:
      this._miner.dir = 2;
    break;
    case 2:
      this._miner.dir = 3;
    break;
    case 3:
      this._miner.dir = 0;
    break;
  }
};

Maze.prototype.isPathForward = function(){
   //face up
  if (this._miner.dir === 0) {
    if (this._maze[this._miner.row -1] !== undefined && this._maze[this._miner.row -1][this._miner.col]) {
      return true;
    }
  }
  //face down
  if (this._miner.dir === 2) {
    if (this._miner.row +1 < this._maze.length  && this._maze[this._miner.row +1][this._miner.col]) {
      return true;
    }
  }

    //face right
  if (this._miner.dir === 1) {
    if (this._maze[this._miner.row][this._miner.col+1]) {
      return true;
    }
  }

    //face left
  if (this._miner.dir === 3) {
    if (this._maze[this._miner.row][this._miner.col-1]) {
      return true;
    }
  }
  return false;
};

Maze.prototype.isPathLeft = function(){
  //face up
  if (this._miner.dir === 0) {
    if (this._maze[this._miner.row][this._miner.col-1]) {
      return true;
    }
  }
  //face down
  if (this._miner.dir === 2) {
    if (this._maze[this._miner.row][this._miner.col+1]) {
      return true;
    }
  }

    //face right
  if (this._miner.dir === 1) {
    if (this._maze[this._miner.row-1] !== undefined &&  this._maze[this._miner.row-1][this._miner.col]) {
      return true;
    }
  }

    //face left
  if (this._miner.dir === 3) {
    if (this._miner.row+1 < this._maze.length && this._maze[this._miner.row+1][this._miner.col]) {
      return true;
    }
  }
  return false;
};

Maze.prototype.isPathRight = function(){
  //face up
  if (this._miner.dir === 0) {
    if (this._maze[this._miner.row][this._miner.col+1]) {
      return true;
    }
  }
  //face down
  if (this._miner.dir === 2) {
    if (this._maze[this._miner.row][this._miner.col-1]) {
      return true;
    }
  }

    //face right
  if (this._miner.dir === 1) {
    if (this._miner.row+1 < this._maze.length && this._maze[this._miner.row+1][this._miner.col]) {
      return true;
    }
  }

    //face left
  if (this._miner.dir === 3) {
    if (this._maze[this._miner.row-1] !== undefined && this._maze[this._miner.row-1][this._miner.col]) {
      return true;
    }
  }
  return false;
};

Maze.prototype.moveForward = function(){
  //facing up
  if (this._miner.dir === 0 && this._miner.row-1 > 0 && this._maze[this._miner.row-1][this._miner.col]) {
    this._miner.row -= 1;
    return true;
  }
  //facing down
  if (this._miner.dir === 2 && this._miner.row+1 < this._maze.length && this._maze[this._miner.row+1][this._miner.col]) {
    this._miner.row += 1;
    return true;
  }
  //facing left
  if (this._miner.dir === 3 && this._maze[this._miner.row][this._miner.col-1]) {
    this._miner.col -= 1;
    return true;
  }
  //facing right
  if (this._miner.dir === 1 && this._maze[this._miner.row][this._miner.col+1]) {
    this._miner.col += 1;
    return true;
  }

  return false;
};

Maze.prototype.notDone = function(){
  if (this._miner.row === this._exit.row && this._miner.col == this._exit.col) {
    return true;
  }
  return false;
};

module.exports = Maze;
