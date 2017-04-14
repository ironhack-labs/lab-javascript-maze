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

  switch(this._miner.dir){

    case 3:
    this._miner.dir = 2;
    break;

    case 2:
    this._miner.dir = 1;
    break;

    case  1:
    this._miner.dir = 0;
    break;

    case  0:
    this._miner.dir = 3;
    break;
  }


}; //turnLeft()

Maze.prototype.turnRight = function(){

  switch(this._miner.dir){

    case 3: // left
    this._miner.dir = 0;  //up
    break;

    case  2: //down
    this._miner.dir = 3; //left
    break;

    case  1: //right
    this._miner.dir = 2; //down
    break;

    case  0: //up
    this._miner.dir = 1; //right
    break;
  }
};

 Maze.prototype.isPathForward = function(){

   switch(this._miner.dir){

     case 0:
     if (this._miner.row === 0){
       return false;
     } else {
       if (this._maze[this._miner.row - 1][this._miner.col] === true){
         return true;
       } else {
         return false;
       }
     }

     break;

     case 1:
     if (this._miner.col === 5){
       return false;
     } else {
       if (this._maze[this._miner.row][this._miner.col+1] === true) {
       return true;
        } else {
          return false;
        }
     } break;


     case 2:
     if (this._miner.row === 6){
       return false;
     } else {
      if (this._maze[this._miner.row +1][this._miner.col] === true){
        return true;
     } else {
        return false;
     }
    }
    break;

     case 3:
     if (this._miner.col === 0){
       return false;
     } else {
       if (this._maze[this._miner.row][this._miner.col +1] === true){
       return true;
     } else {
       return false;
     }
   }
   break;

   }// end switch
 }; //pathForward


Maze.prototype.isPathLeft = function(){

  this.turnLeft();
  var path = this.isPathForward();
  this.turnRight();
  return path;
}; //isPathLeft


Maze.prototype.isPathRight  = function(){

  this.turnRight();
  var check = this.isPathForward();
  this.turnLeft();
  return check;
}; //isPathLeft


Maze.prototype.moveForward = function(){

  var move = this.isPathForward();
  if (move === true){

    switch(this._miner.dir) {

      case 0:
      this._miner.row -= 1;
      break;

      case 1:
      this._miner.col += 1;
      break;

      case 2:
      this._miner.row += 1;
      break;

      case 3:
      this._miner.col -= 1;
      break;
    }
    return true;
  } else {
    return false;
  }
};

Maze.prototype.notDone = function(){
  return (this._miner.row !== this._exit.row) && (this._miner.col !== this._exit.col);
};

module.exports = Maze;
