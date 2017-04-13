var Maze = function (map, exit) {
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

  switch (this._miner.dir) {
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

  switch (this._miner.dir) {
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

  switch (this._miner.dir) {

    case 0:

      if(this._miner.row-1<0)
      {
        return false;
      }
      else
      {

        if(this._maze[this._miner.row-1][this._miner.col] === true)
        {
          return true;
        }
        else
        {
          return false;
        }
      }

      break;

    case 1:

      if(this._miner.col+1>this._maze[0].length-1)
      {
        return false;
      }
      else
      {

        if(this._maze[this._miner.row][this._miner.col+1] === true)
        {
          return true;
        }
        else
        {
          return false;
        }
      }

      break;

    case 2:

      if(this._miner.row+1>this._maze.length-1)
      {
        return false;
      }
      else
      {

        if(this._maze[this._miner.row+1][this._miner.col] === true)
        {
          return true;
        }
        else
        {
          return false;
        }
      }

      break;

    case 3:

      if(this._miner.col-1<0)
      {
        return false;
      }
      else
      {

        if(this._maze[this._miner.row][this._miner.col-1] === true)
        {
          return true;
        }
        else
        {
          return false;
        }
      }
      break;
  }

};

Maze.prototype.isPathLeft    = function(){

  switch (this._miner.dir) {
    case 0:

      if(this._miner.col-1<0)
      {
        return false;
      }
      else
      {

        if(this._maze[this._miner.row][this._miner.col-1] === true)
        {
          return true;
        }
        else
        {
          return false;
        }
      }

      break;

    case 1:

      if(this._miner.row-1<0)
      {
        return false;
      }
      else
      {

        if(this._maze[this._miner.row-1][this._miner.col] === true)
        {
          return true;
        }
        else
        {
          return false;
        }
      }

      break;

    case 2:

      if(this._miner.col+1>this._maze[0].length-1)
      {
        return false;
      }
      else
      {

        if(this._maze[this._miner.row][this._miner.col+1] === true)
        {
          return true;
        }
        else
        {
          return false;
        }
      }

      break;

    case 3:

      if(this._miner.row+1>this._maze[0].length-1)
      {
        return false;
      }
      else
      {

        if(this._maze[this._miner.row+1][this._miner.col] === true)
        {
          return true;
        }
        else
        {
          return false;
        }
      }
      break;
  }

};

Maze.prototype.isPathRight   = function(){

  switch (this._miner.dir) {
    case 0:

      if(this._miner.col+1>this._maze[0].length-1)
      {
        return false;
      }
      else
      {

        if(this._maze[this._miner.row][this._miner.col+1] === true)
        {
          return true;
        }
        else
        {
          return false;
        }
      }

      break;

    case 1:

      if(this._miner.row+1>this._maze.length-1)
      {
        return false;
      }
      else
      {

        if(this._maze[this._miner.row+1][this._miner.col] === true)
        {
          return true;
        }
        else
        {
          return false;
        }
      }

      break;

    case 2:

      if(this._miner.col-1<0)
      {
        return false;
      }
      else
      {

        if(this._maze[this._miner.row][this._miner.col-1] === true)
        {
          return true;
        }
        else
        {
          return false;
        }
      }

      break;

    case 3:

      if(this._miner.row-1<0)
      {
        return false;
      }
      else
      {

        if(this._maze[this._miner.row+1][this._miner.col] === true)
        {
          return true;
        }
        else
        {
          return false;
        }
      }
      break;
  }

};

Maze.prototype.moveForward   = function(){
  switch (this._miner.dir) {
    case 0:
      if(this.isPathForward())
      {
        this._miner.row--;
        return true;
      }
      else
      {
        return false;
      }
      break;
    case 1:
      if(this.isPathForward())
      {
        this._miner.col++;
        return true;
      }
      else
      {
        return false;
      }
      break;
    case 2:
      if(this.isPathForward())
      {
        this._miner.row++;
        return true;
      }
      else
      {
        return false;
      }
      break;
    case 3:
      if(this.isPathForward())
      {
        this._miner.col--;
        return true;
      }
      else
      {
        return false;
      }
      break;
  }
};

Maze.prototype.notDone       = function(){
  if(this._exit.row === this._miner.row && this._exit.col === this._miner.col)
  {
    console.log("finished");
    return true;
  }
  else
  {
    console.log("NOTfinished");
    return false;
  }
};

//module.exports = Maze;
