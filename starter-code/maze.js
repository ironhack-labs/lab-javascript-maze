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
if (this._miner.dir === 0) {
  this._miner.dir = 3;
} else {
  this._miner.dir--;
}
};
Maze.prototype.turnRight     = function(){
  if (this._miner.dir === 3) {
    this._miner.dir = 0;
  } else {
    this._miner.dir++;
  }
  };

Maze.prototype.isPathForward = function(){
  var row = this._miner.row;
  var col = this._miner.col;
//----------------------------Direction Up-----------------------//
if (this._miner.dir === 0){
  if (this._maze[row--][col] === false ||  row - 1 < 0){
    return false;
  } return true;
//---------------------------Direction Right---------------------//
} else if (this._miner.dir === 1){
  if (this._maze[row][col + 1] === false ||  col + 1 > 5){
    return false;
  } return true;
//---------------------------Direction Down----------------------//
} else if (this._miner.dir === 2){
  if (row + 1 > 6 || this._maze[row + 1][col] === false){
    return false;
  }
  return true;
//---------------------------Direction Left----------------------//
} else if (this._miner.dir === 3){
  if (this._maze[row][col - 1] === false ||  col - 1 < 0){
    return false;
  } return true;
}
};

Maze.prototype.isPathLeft    = function(){
  var row = this._miner.row;
  var col = this._miner.col;
//----------------------------Direction Up-----------------------//
if (this._miner.dir === 0){
  if (this._maze[row][col - 1 ] === false ||  col -1  < 0){
    return false;
  } return true;
//---------------------------Direction Right---------------------//
} else if (this._miner.dir === 1){
  if (this._maze[row--][col] === false ||  row-- < 0){
    return false;
  } return true;
//---------------------------Direction Down----------------------//
} else if (this._miner.dir === 2){
  if (this._maze[row][col + 1] === false ||  col + 1 > 5){
    return false;
  } return true;
//---------------------------Direction Left----------------------//
} else if (this._miner.dir === 3){
  if (this._maze[row++][col] === false ||  row++ > 6){
    return false;
  } return true;
}
};
Maze.prototype.isPathRight   = function(){
  var row = this._miner.row;
  var col = this._miner.col;
//----------------------------Direction Up-----------------------//
if (this._miner.dir === 0){
  if (this._maze[row][col + 1] === false ||  col + 1 > 5){
    return false;
  } return true;
//---------------------------Direction Right---------------------//
} else if (this._miner.dir === 1){
  if (this._maze[row + 1][col] === false ||  row + 1 > 6){
    return false;
  } return true;
//---------------------------Direction Down----------------------//
} else if (this._miner.dir === 2){
  if (this._maze[row][col--] === false ||  col-- < 0){
    return false;
  } return true;
//---------------------------Direction Left----------------------//
} else if (this._miner.dir === 3){
  if (row - 1 < 0 || this._maze[row - 1 ][col] === false   ){
    return false;
  } return true;
}
};

Maze.prototype.moveForward   = function(){
  switch(this._miner.dir) {
    case 0:
      if (this._miner.row - 1 < 0 || this._maze[this._miner.row - 1][this._miner.col] === false) {
        return false;
      } else {
        this._miner.row -= 1;
        return true;
      }
      break;
    case 1:
      if (this._miner.col + 1 > 5 || this._maze[this._miner.row][this._miner.col + 1] === false) {
        return false;
      } else {
        this._miner.col += 1;
        return true;
      }
      break;
    case 2:
      if (this._miner.row + 1 > 6 || this._maze[this._miner.row + 1][this._miner.col] === false) {
        return false;
      } else {
        this._miner.row += 1;
        return true;
      }
      break;
    case 3:
      if (this._miner.col - 1 < 0 || this._maze[this._miner.row][this._miner.col - 1] === false) {
        return false;
      } else {
        this._miner.col -= 1;
        return true;
      }
      break;
  }
};

Maze.prototype.notDone       = function(){
  var row = this._miner.row;
  var col = this._miner.col;
  if (row === this._exit.row && col === this._exit.col){
    return true;
  } return false;
};
module.exports = Maze;
