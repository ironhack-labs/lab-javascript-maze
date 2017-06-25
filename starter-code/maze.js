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
  switch(this._miner.dir) {
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

Maze.prototype.turnRight = function(){
  switch(this._miner.dir) {
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


  Maze.prototype.isPathForward = function() {
    var checkNewRow = this._miner.row;
    var checkNewCol = this._miner.col;
    switch (this._miner.dir) {
      case 0:
        checkNewRow--;
        break;
      case 1:
        checkNewCol++;
        break;
      case 2:
        checkNewRow++;
        break;
      case 3:
        checkNewCol--;
        break;
    }
    //Board Limit
    if (checkNewRow < 0 || checkNewRow > 6 || checkNewCol > 5 || checkNewCol < 0){
      return false;
    }

    //Checking new position compared with the maze
    return this._maze[checkNewRow][checkNewCol];
  };

Maze.prototype.isPathLeft    = function(){
  var checkNewRow = this._miner.row;
  var checkNewCol = this._miner.col;
  switch (this._miner.dir) {
    case 0:
      checkNewCol--;
      break;
    case 1:
      checkNewRow--;
      break;
    case 2:
      checkNewCol++;
      break;
    case 3:
      checkNewRow++;
      break;
  }
  if (checkNewRow < 0 || checkNewRow > 6 || checkNewCol > 5 || checkNewCol < 0){
    return false;
  }
  //Checking new position compared with the maze
  return this._maze[checkNewRow][checkNewCol];
};


Maze.prototype.isPathRight = function(){
  var checkNewRow = this._miner.row;
  var checkNewCol = this._miner.col;
  switch (this._miner.dir) {
    case 0:
      checkNewCol++;
      break;
    case 1:
      checkNewRow++;
      break;
    case 2:
      checkNewCol--;
      break;
    case 3:
      checkNewRow--;
      break;
  }
  if (checkNewRow < 0 || checkNewRow > 6 || checkNewCol > 5 || checkNewCol < 0){
    return false;
  }
  //Checking new position compared with the maze
  return this._maze[checkNewRow][checkNewCol];
};

Maze.prototype.moveForward = function(){
  var newRow = this._miner.row;
  var newCol = this._miner.col;

  switch (this._miner.dir) {
    case 0:
      newRow--;
      break;
    case 1:
      newCol++;
      break;
    case 2:
      newRow++;
      break;
    case 3:
      newCol--;
      break;
  }
  if (newRow < 0 || newRow > 6 || newCol > 5 || newCol < 0 || !this._maze[newRow][newCol]){
    return false;
  }
  //New position of the miner
  this._miner.row = newRow;
  this._miner.col = newCol;

  //Checking new position compared with the maze
  return this._maze[newRow][newCol];

};

Maze.prototype.notDone = function(){
  if ((this._miner.row === this._exit.row) && (this._miner.column===this._exit.column)){
    return true;
  }else {
    return false;
  }
};

module.exports = Maze;
