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

Maze.prototype.turnLeft = function() {
    this._miner.dir = (this._miner.dir === 0) ? 3 : this._miner.dir - 1;
    //this._miner.dir -= 1; // this._miner.dir = this._miner.dir - 1;
};

Maze.prototype.turnRight = function() {
    this._miner.dir = (this._miner.dir + 1) % 4;
};

Maze.prototype.isPathForward = function() {
    var miner = this._miner;
    var map = this._maze;

    var result = false;
    switch (miner.dir) {
        case 0:
            if (miner.row - 1 < 0) break;
            if (map[miner.row - 1][miner.col]) result = true;
            break;
        case 1:
            if (miner.col + 1 >= map[0].length) break;
            if (map[miner.row][miner.col + 1]) result = true;
            break;
        case 2:
            if (miner.row + 1 >= map.length) break;
            if (map[miner.row + 1][miner.col]) result = true;
            break;
        case 3:
            if (miner.col - 1 < 0) break;
            if (map[miner.row][miner.col - 1]) result = true;
            break;
    }
    return result;
};

Maze.prototype.isPathLeft = function() {
    var miner = this._miner;
    var map = this._maze;

    var result = false;
    switch (miner.dir) {
        case 0:
            if (miner.col - 1 < 0) break;
            if (map[miner.row][miner.col - 1]) result = true;
            break;
        case 1:
            if (miner.row - 1 < 0) break;
            if (map[miner.row - 1][miner.col]) result = true;
            break;
        case 2:
            if (miner.col + 1 >= map[0].length) break;
            if (map[miner.row][miner.col + 1]) result = true;
            break;
        case 3:
            if (miner.row + 1 >= map.length) break;
            if (map[miner.row + 1][miner.col]) result = true;
            break;
    }
    return result;
};

Maze.prototype.isPathRight = function() {
  var miner = this._miner;
  var map = this._maze;

  var result = false;
  switch (miner.dir){
    case 0: if (miner.col + 1 >= map[0].length) break;
            if (map[miner.row][miner.col + 1]) result = true;
            break;
    case 1: if (miner.row + 1 >= map[0].length) break;
            if (map[miner.row + 1][miner.col]) result = true;
            break;
    case 2: if (miner.col - 1 < 0) break;
            if (map[miner.row][miner.col - 1]) result = true;
            break;
    case 3: if (miner.row - 1 < 0) break;
            if (map[miner.row - 1][miner.col]) result = true;
            break;
  }
  return result;
};

Maze.prototype.moveForward = function() {};

Maze.prototype.notDone = function() {};

module.exports = Maze;
