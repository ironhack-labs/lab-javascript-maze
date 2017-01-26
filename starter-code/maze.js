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
  this._miner.dir=this._miner.dir===0 ? 3: this._miner.dir -1;
};

Maze.prototype.turnRight     = function(){
  this._miner.dir=this._miner.dir===3 ? 0: this._miner.dir +1;
};

Maze.prototype.isPathForward = function(){

 if(this._miner.row===0 && this._miner.dir===0){
    return false;
  }
  if(this._miner.col===0 && this._miner.dir===3){
    return false;
  }
  if(this._miner.row===6 && this._miner.dir===2){
     return false;
   }
   if(this._miner.col===0 && this._miner.dir===1){
     return false;
   }

   return true;


};

Maze.prototype.isPathLeft    = function(){
}

Maze.prototype.isPathRight   = function(){
}

Maze.prototype.moveForward   = function(){
}

Maze.prototype.notDone       = function(){
}

module.exports = Maze;
