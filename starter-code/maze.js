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

Maze.prototype.turnLeft = function() {
  if (this._miner.dir > 0) {
    this._miner.dir--;
  } else if (this._miner.dir === 0) {
    this._miner.dir = 3;
  }
};

Maze.prototype.turnRight = function() {
  if (this._miner.dir < 3) {
    this._miner.dir++;
  } else if (this._miner.dir === 3) {
    this._miner.dir = 0;
  }
};

// OFFSET FUNCTION -- Alternative shown by Yacine.

// Maze.prototype._getMiner = function(offsetRow, offsetCol) {
//   return this._maze[this._miner.row + offsetRow][this._miner.col + offsetCol];
// };
//
//
// this._getMiner(-1, 0)

Maze.prototype.isPathForward = function() {
  var row;
  var col;

  switch (this._miner.dir) {
    case 0:
      col = this._miner.col;
      row = this._miner.row -1;
    break;
     case 1:
     col = this._miner.col +1;
     row = this._miner.row;
     break;
     case 2:
     col = this._miner.col;
     row = this._miner.row +1;
     break;
     case 3:
     col = this._miner.col -1;
     row = this._miner.row;
     break;
  }

  if (this._maze[row] === undefined) {
    return false;
  }
  if (!this._maze[row][col]) {
    return false;
  }
  return true;

};

Maze.prototype.isPathLeft = function() {
  var row;
  var col;

  switch (this._miner.dir) {
    case 0:
      col = this._miner.col-1;
      row = this._miner.row;
    break;
     case 1:
     col = this._miner.col;
     row = this._miner.row -1;
     break;
     case 2:
     col = this._miner.col +1;
     row = this._miner.row;
     break;
     case 3:
     col = this._miner.col;
     row = this._miner.row +1;
     break;
  }

  if (this._maze[row] === undefined) {
    return false;
  }
  if (!this._maze[row][col]) {
    return false;
  }
  return true;

};

Maze.prototype.isPathRight = function() {
var row;
var col;

switch (this._miner.dir) {
  case 0:
    col = this._miner.col+1;
    row = this._miner.row;
  break;
   case 1:
   col = this._miner.col;
   row = this._miner.row +1;
   break;
   case 2:
   col = this._miner.col -1;
   row = this._miner.row;
   break;
   case 3:
   col = this._miner.col;
   row = this._miner.row -1;
   break;
}

if (this._maze[row] === undefined) {
  return false;
}
if (!this._maze[row][col]) {
  return false;
}
return true;

};

Maze.prototype.moveForward = function() {

  switch ( this._miner.dir ) {
    case 0:
      if ( this.isPathForward() ) {
        this._miner.row--;
        return true;
      } else {
        return false;
      }
    break;
     case 1:
      if (this.isPathForward() ) {
        this._miner.col++;
        return true;
      } else {
        return false;
      }
     break;
     case 2:
     if ( this.isPathForward() ) {
       this._miner.row++;
       return true;
     } else {
       return false;
     }
     break;
     case 3:
    if ( this.isPathForward() ) {
      this._miner.col--;
      return true;
    } else {
      return false;
    }
     break;
   }
};

Maze.prototype.notDone = function() {
    return ((this._miner.row === this._exit.row) &&
            (this._miner.col === this._exit.col));
  };

module.exports = Maze;
