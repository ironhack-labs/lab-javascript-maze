
function Maze(map, exit) {
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
}

Maze.prototype.turnLeft      = function(){
  switch(this._miner.dir){
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

Maze.prototype.turnRight     = function(){
  switch(this._miner.dir){
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

  switch(this._miner.dir) {
    case 0:
      if(this._miner.row !== 0) return (this._maze[this._miner.row - 1][this._miner.col]);
      return false;
    case 1:
      if(this._miner.col !== (this._maze[0].length - 1)) return (this._maze[this._miner.row][this._miner.col + 1]);
      return false;
    case 2:
      if(this._miner.row !== this._maze.length - 1) return (this._maze[this._miner.row + 1][this._miner.col]);
      return false;
    case 3:
      if(this._miner.col !== 0) return (this._maze[this._miner.row][this._miner.col - 1]);
      return false;
  }
};

Maze.prototype.isPathLeft    = function(){
  this.turnLeft();
  return this.isPathForward();
};

Maze.prototype.isPathRight   = function(){
  this.turnRight();
  return this.isPathForward();
};

Maze.prototype.moveForward   = function(){
   if(this.isPathForward()){
     switch(this._miner.dir){
       case 0:
          this._miner.row--;
          break;
       case 1:
          this._miner.col++;
          break;
       case 2:
          this._miner.row++;
          break;
       case 3:
          this._miner.col--;
          break;
     }
     return true;
   }
   return false;
};

Maze.prototype.notDone = function(){
  return (this._miner.row !== this._exit.row) && (this._miner.col !== this._exit.col);
};

module.exports = Maze;
