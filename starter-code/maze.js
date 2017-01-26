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
this._miner.dir = this._miner.dir === 0 ? 3: this._miner.dir - 1;
};

Maze.prototype.turnRight     = function(){
this._miner.dir = this._miner.dir === 3 ? 0: this._miner.dir + 1;
};

Maze.prototype.isPathForward = function(){
 var result = false;

 switch (this._miner.dir) {
   case 0: if (this._miner.row - 1 <0) break;
           if (this._maze [this._miner.row - 1][this._miner.col])
           result = true;
           break;

   case 1: if (this._miner.col + 1 >= this._maze[0].length) break;
           if (this._maze [this._miner.row][this._miner.col + 1])
           result = true;
           break;

   case 2: if (this._miner.row + 1 >= this._maze.length) break;
           if (this._maze [this._miner.row + 1][this._miner.col])
           result = true;
           break;

   case 3:if (this._miner.col - 1 <= 0) break;
           if (this._maze [this._miner.row][this._miner.col - 1])
           result = true;
           break;
         }
         return result;
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
