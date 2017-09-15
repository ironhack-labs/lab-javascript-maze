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

Maze.prototype.turnLeft = function() {
  this._miner.dir = this._miner.dir - 1;
  if (this._miner.dir === -1) {
    this._miner.dir = 3
  }
}

Maze.prototype.turnRight = function() {
  this._miner.dir = this._miner.dir + 1;
  if (this._miner.dir === 4) {
    this._miner.dir = 0
  }
}

Maze.prototype.isPathForward = function() {
  if (this._miner.dir === 0 && this._miner.row > 0) {
    return this._maze[this._miner.row - 1][this._miner.col] === true
  }
  if (this._miner.dir === 1 && this._miner.col < 6) {
    return this._maze[this._miner.row][this._miner.col + 1] === true
  }
  if (this._miner.dir === 2 && this._miner.row < 6) {
    return this._maze[this._miner.row + 1][this._miner.col] === true
  }
  if (this._miner.dir === 3 && this._miner.col > 0) {
    return this._maze[this._miner.row][this._miner.col - 1] === true
  } else return false
}

Maze.prototype.isPathLeft = function() {
  if (this._miner.dir === 1 && this._miner.row > 0) {
    return this._maze[this._miner.row - 1][this._miner.col] === true
  }
  if (this._miner.dir === 2 && this._miner.col < 6) {
    return this._maze[this._miner.row][this._miner.col + 1] === true
  }
  if (this._miner.dir === 3 && this._miner.row < 6) {
    return this._maze[this._miner.row + 1][this._miner.col] === true
  }
  if (this._miner.dir === 0 && this._miner.col > 0) {
    return this._maze[this._miner.row][this._miner.col - 1] === true
  } else return false
}

Maze.prototype.isPathRight = function() {
  if (this._miner.dir === 3 && this._miner.row > 0) {
    return this._maze[this._miner.row - 1][this._miner.col] === true
  }
  if (this._miner.dir === 0 && this._miner.col < 6) {
    return this._maze[this._miner.row][this._miner.col + 1] === true
  }
  if (this._miner.dir === 1 && this._miner.row < 6) {
    return this._maze[this._miner.row + 1][this._miner.col] === true
  }
  if (this._miner.dir === 2 && this._miner.col > 0) {
    return this._maze[this._miner.row][this._miner.col - 1] === true
  } else return false
}

Maze.prototype.moveForward = function() {
  console.log(this.isPathForward())
  if (this._miner.dir === 0 && this._miner.row > 0 && this.isPathForward()) {
    this._miner.row--
  }
  if (this._miner.dir === 1 && this._miner.col < 6 && this.isPathForward()) {
    this._miner.col++
  }
  if (this._miner.dir === 2 && this._miner.row < 6 && this.isPathForward()) {
    this._miner.row++
  }
  if (this._miner.dir === 3 && this._miner.col > 0 && this.isPathForward()) {
    this._miner.col--
  }
  console.log("row : ", this._miner.row)
  console.log("col : ", this._miner.col)

  return this.isPathForward()
}

Maze.prototype.notDone = function() {
  this._miner.dir = 2
}

module.exports = Maze;