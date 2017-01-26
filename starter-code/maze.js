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
    this._miner.dir = this._miner.dir === 3 ? 0 : this._miner.dir += 1;
};

Maze.prototype.isPathForward = function(){
    var x = this.miner.row;
    var y = this.miner.col;
    switch(this._miner.dir) {
        case 0:
                if(x-1 >=0 && this._maze[x-1][y]===true){
                      return true;
                    }
                else {
                    return false;
                  }
        break;
        case 1:
               if(y+1<=5 && this._maze[x][y+1]===true){
                    return true;
               }else{
                 return false;
               }
        break;
        case 2:
              if(x+1<=6 && this._maze[x+1][y]===true)
               { return true;}
              else{
                return false;}
              break;
        case 3:
            if(y-1>=0 && this._maze[x][y-1]===true){
                 return true;}
              else{
                return false;
              }
        break;
    }
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
