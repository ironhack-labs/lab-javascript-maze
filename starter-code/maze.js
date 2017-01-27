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

///////////////////////////////////
Maze.prototype.oneRowUp = function(){
  var x = this._miner.row;
  var y = this._miner.col;
  return [x-1,y];
  };

Maze.prototype.oneRowDown = function(){
  var x = this._miner.row;
  var y = this._miner.col;
  return [x+1,y];
};

Maze.prototype.oneColRight = function(){
  var x = this._miner.row;
  var y = this._miner.col;
  return [x,y+1];};

Maze.prototype.oneColLeft = function(){
  var x = this._miner.row;
  var y = this._miner.col;
  return [x,y-1];
};
Maze.prototype.isPathForward = function(){
  var x = this._miner.row;
  var y = this._miner.col;

  switch(this._miner.dir){
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

//if direction is down
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
  switch (this._miner.dir){
    case 0:
     var c = this.oneColLeft();
     var x= c[0];
     var y= c[1];
     return (x>=0 && this._maze[x][y])? true : false;

     case 1:
      var c = this.oneRowUp();
      var x= c[0];
      var y= c[1];
      return (y>=0 && this._maze[x][y])? true : false;






  }
};

Maze.prototype.isPathRight   = function(){
}

Maze.prototype.moveForward   = function(){
}

Maze.prototype.notDone       = function(){
}

module.exports = Maze;
