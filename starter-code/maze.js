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
  }
}

Maze.prototype.turnLeft      = function(){
  this._miner.dir === 0 ? this._miner.dir = 3 : this._miner.dir--
}

Maze.prototype.turnRight     = function(){
  this._miner.dir === 3 ? this._miner.dir = 0 : this._miner.dir++
}

Maze.prototype.isPathForward = function(){
  switch (this._miner.dir) {
    case 0:
      return (this._miner.row - 1 >= 0 && this._maze[this._miner.row - 1][this._miner.col] === true) ? true : false
    case 1:
      return (this._miner.col + 1 < this._maze.length && this._maze[this._miner.row ][this._miner.col + 1] === true) ? true : false
    case 2:
      return (this._miner.row + 1 < this._maze.length && this._maze[this._miner.row + 1][this._miner.col] === true) ? true : false
    case 3:
      return (this._miner.col - 1 >= 0 && this._maze[this._miner.row][this._miner.col - 1] === true) ? true : false
    default:
  }
}

Maze.prototype.isPathLeft    = function(){
  switch (this._miner.dir) {
    case 0:
      return (this._miner.col - 1 >= 0 && this._maze[this._miner.row][this._miner.col - 1] === true) ? true : false
    case 1:
      return (this._miner.row - 1 >=0 && this._maze[this._miner.row - 1][this._miner.col] === true) ? true : false
    case 2:
      return (this._miner.col + 1 < this._maze.length && this._maze[this._miner.row][this._miner.col + 1] === true) ? true : false
    case 3:
      return (this._miner.row + 1 < this._maze.length && this._maze[this._miner.row + 1][this._miner.col] === true) ? true : false
    default:
  }
}

Maze.prototype.isPathRight   = function(){
  switch (this._miner.dir) {
    case 0:
      return (this._miner.col + 1 < this._maze.length && this._maze[this._miner.row][this._miner.col + 1] === true) ? true : false
    case 1:
      return (this._miner.row + 1 < this._maze.length  && this._maze[this._miner.row  +1][this._miner.col] === true) ? true : false
    case 2:
      return (this._miner.col - 1 >= 0 && this._maze[this._miner.row][this._miner.col + 1] === true) ? true : false
    case 3:
      return (this._miner.col - 1 <= 0 && this._maze[this._miner.row][this._miner.col -1] === true) ? true : false
    default:
  }
}
Maze.prototype.moveForward   = function(){
  switch (this._miner.dir) {
    case 0:
      if(this.isPathForward()){
        this._miner.row--
        return true
      } else {
        return false
      }
    case 1:
      if(this.isPathForward()){
        this._miner.col++
        return true
      } else {
        return false
      }

    case 2:

      if(this.isPathForward()){
       this._miner.row++
        return true
      } else {
        return false
      }
   break;
    case 3:
      if(this.isPathForward()){
        this._miner.col--
        return true
      } else {
        return false
      }
    default:
  }
}

Maze.prototype.notDone       = function(){
  if(this._miner.row === this._exit.row && this._miner.col === this._exit.col) {
    return true
  } else {
    return false
  }
}
module.exports = Maze;
