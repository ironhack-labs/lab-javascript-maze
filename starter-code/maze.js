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
//  this._maze.dir = this._maze.dir === 0 ? this._maze.dir = 3 : this._maze.dir -= 1;
  this._miner.dir = (this._miner.dir + 3) % 4;
};

Maze.prototype.turnRight = function(){
  this._miner.dir = (this._miner.dir +1) % 4;
};

Maze.prototype.isPathForward = function(){
  
}

Maze.prototype.isPathLeft    = function(){
}

Maze.prototype.isPathRight   = function(){
}

Maze.prototype.moveForward   = function(){
}

Maze.prototype.notDone       = function(){
}

module.exports = Maze;
