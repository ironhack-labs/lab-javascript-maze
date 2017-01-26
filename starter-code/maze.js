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
}

function turn(miner,ifUp,ifRight,ifDown,ifLeft){
  switch(miner["dir"]){
    case 0:
      miner["dir"] = ifUp;
      break;
    case 1:
      miner["dir"] = ifRight;
      break;
    case 2:
      miner["dir"] = ifDown;
      break;
    case 3:
      miner["dir"] = ifLeft;
      break;
  }
}

Maze.prototype.turnLeft      = function(){
  turn(this._miner,3,0,1,2);
}

Maze.prototype.turnRight     = function(){
  turn(this._miner,1,2,3,0);
}



Maze.prototype.isPathForward = function(){
  if (this._miner["dir"] === 0) {
    if (this._miner.row > 0 && this._maze[this._miner.row-1][this._miner.col] === true) {
      return true;
    }
    return false;
  }
  else if (this._miner["dir"] === 1) {
    if (this._miner.col < 5 && this._maze[this._miner.row][this._miner.col+1] === true) {
      return true;
    }
    return false;
  }
  else if (this._miner["dir"] === 2) {
    if (this._miner.row < 6 && this._maze[this._miner.row+1][this._miner.col] === true) {
      return true;
    }
    return false;
  }
  else if (this._miner["dir"] === 3) {
    if (this._miner.col > 0 && this._maze[this._miner.row][this._miner.col-1] === true) {
      return true;
    }
    return false;
  }
}

Maze.prototype.isPathLeft    = function(){
  if (this._miner["dir"] === 0) {
    return this._miner.col > 0 && this._maze[this._miner.row][this._miner.col-1] === true ? true : false;
  }
  else if (this._miner["dir"] === 1) {
    return this._miner.col > 0 && this._maze[this._miner.row-1][this._miner.col] === true ? true : false;
  }
  else if (this._miner["dir"] === 2) {
    return this._miner.row < 5 && this._maze[this._miner.row][this._miner.col+1] === true ? true : false;
  }
  else if (this._miner["dir"] === 3) {
    return this._miner.row < 6 && this._maze[this._miner.row+1][this._miner.col] === true ? true : false;
  }
}

Maze.prototype.isPathRight   = function(){
  if (this._miner["dir"] === 0) {
    return this._miner.col < 5 && this._maze[this._miner.row][this._miner.col+1] === true ? true : false;
  }
  else if (this._miner["dir"] === 1) {
    return this._miner.row < 6 && this._maze[this._miner.row+1][this._miner.col] === true ? true : false;
  }
  else if (this._miner["dir"] === 2) {
    return this._miner.col > 0 && this._maze[this._miner.row][this._miner.col-1] === true ? true : false;
  }
  else if (this._miner["dir"] === 3) {
    return this._miner.row > 0 && this._maze[this._miner.row-1][this._miner.col] === true ? true : false;
  }
}

Maze.prototype.moveForward   = function(){
  if (this._miner["dir"] === 0){
    return this._miner.row > 0 && this._maze[this._miner.row-1][this._miner.col] === true ? (this._miner.row--, true) : false;
  }
  else if (this._miner["dir"] === 1){
    return this._miner.col < 5 && this._maze[this._miner.row][this._miner.col+1] === true ? (this._miner.col++, true) : false;
  }
  else if (this._miner["dir"] === 2){
    return this._miner.row < 6 && this._maze[this._miner.row+1][this._miner.col] === true ? (this._miner.row++, true) : false;
  }
  else if (this._miner["dir"] === 3){
    return this._miner.col > 0 && this._maze[this._miner.row][this._miner.col-1] === true ? (this._miner.col--, true) : false;
  }
}

Maze.prototype.notDone       = function(){
  return this._miner.col === this._exit.col && this._miner.row === this._exit.row ? (console.log("done"),true): (console.log("not done"),false)
}

module.exports = Maze;
