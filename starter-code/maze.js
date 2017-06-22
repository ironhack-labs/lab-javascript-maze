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
  if(this._miner.dir !== 0){
    this._miner.dir--;
  }
  else{
    this._miner.dir = 3;
  }
};

Maze.prototype.turnRight = function(){
  if(this._miner.dir !== 3){
    this._miner.dir++;
  }
  else{
    this._miner.dir = 0;
  }};

Maze.prototype.isPathForward = function(){

  if(this._miner.dir === 0){
    if(this._maze[this._miner.row-1]){
      if(this._maze[this._miner.row-1][this._miner.col]=== true){
        return true;
      }
    }
    return false;
  }
  else if(this._miner.dir === 1){
    if(this._maze[this._miner.row][this._miner.col+1] === true){
      return true;
    }
    return false;
  }
  else if(this._miner.dir === 2){
    if(this._maze[this._miner.row+1]){
      if(this._maze[this._miner.row+1][this._miner.col] === true){
        return true;
      }
    }
    return false;
  }
  else if(this._miner.dir === 3){
    if(this._maze[this._miner.row][this._miner.col-1] === true){
      return true;
    }
    return false;
  }
};

Maze.prototype.isPathLeft  = function(){
  var myX = this._miner.row;
  var myY = this._miner.col;


    if(this._miner.dir === 0){
      if(this._maze[this._miner.col][this._miner.col-1] === true){
        return true;
      }
      return false;
    }
    else if(this._miner.dir === 1){
      if(this._maze[this._miner.col-1]){
        if(this._maze[this._miner.col-1][this._miner.col]=== true){
          return true;
        }
      }
      return false;
    }
    else if(this._miner.dir === 2){
      if(this._maze[this._miner.col][this._miner.col+1] === true){
        return true;
      }
      return false;
    }
    else if(this._miner.dir === 3){
      if(this._maze[this._miner.col+1]){
        if(this._maze[this._miner.col+1][this._miner.col]=== true){
          return true;
        }
      }
      return false;
    }


};

Maze.prototype.isPathRight  = function(){

  if(this._miner.dir === 0){
    if(this._maze[this._miner.row][this._miner.col+1] === true){
      return true;
    }
    return false;
  }
  else if(this._miner.dir === 1){
    if(this._maze[this._miner.row+1]){
      if(this._maze[this._miner.row+1][this._miner.col]=== true){
        return true;
      }
    }
    return false;
  }
  else if(this._miner.dir === 2){
    if(this._maze[this._miner.row][this._miner.col-1] === true){
      return true;
    }
    return false;
  }
  else if(this._miner.dir === 3){
    if(this._maze[this._miner.row-1]){
      if(this._maze[this._miner.row-1][this._miner.col]===true){
        return true;
      }
    }
    return false;
  }

};

Maze.prototype.moveForward  = function(){

  if(!this.isPathForward()){
    return false;
  }

  if(this._miner.dir === 0){
    this._miner.row--;
  }
  else if(this._miner.dir === 1){
    this._miner.col++;
  }
  else if(this._miner.dir === 2){
    this._miner.row++;
  }
  else if(this._miner.dir === 3){
    this._miner.col--;
  }
  return true;
};

Maze.prototype.notDone  = function(){
  if(this._miner.row!== this._exit.row && this._miner.col!== this._exit.col){
    return false;
  }
  return true;

};

module.exports = Maze;
