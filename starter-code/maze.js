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
//
// Alternative:
// this._miner.dir = (this._miner.dir === 0 ? 3 : this._miner.dir-1)

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
  switch(this._miner.dir) {
    case 0:
      if (this._miner.row === 0 || this._maze[this._miner.row - 1][this._miner.col] === false) {
        return false;
      } else {
        return true;
      }
      break;
    case 1:
      if (this._miner.col === 5 || this._maze[this._miner.row][this._miner.col + 1] === false) {
        return false;
      } else {
        return true;
      }
      break;
    case 2:
      if (this._miner.row === 6 || this._maze[this._miner.row + 1][this._miner.col] === false) {
        return false;
      } else {
        return true;
      }
      break;
    case 3:
      if (this._miner.col === 0 || this._maze[this._miner.row][this._miner.col - 1] === false) {
        return false;
      } else {
        return true;
      }
      break;
  }
};

// Alternative:
// var m = this._miner.dir;
// switch (m.dir) {
//   case 0: return (m.row !==0                              && this._maze(m.row-1)(m.col)
//   case 2: return (m.row !==this._maze.length-1            && this._maze(m.row+1)(m.col)
//   case 1: return (m.row !==this._maze(m.row).length-1     && this._maze(m.row)(m.col+1)
//   case 3: return (m.row !==0                              && this._maze(m.row)(m.col-1)
// }

Maze.prototype.isPathLeft    = function(){
  switch(this._miner.dir) {
    case 0:
      if (this._miner.col === 0 || this._maze[this._miner.row][this._miner.col - 1] === false) {
        return false;
      } else {
        return true;
      }
      break;
    case 1:
      if (this._miner.row === 0 || this._maze[this._miner.row - 1][this._miner.col] === false) {
        return false;
      } else {
        return true;
      }
      break;
    case 2:
      if (this._miner.col === 5 || this._maze[this._miner.row][this._miner.col + 1] === false) {
        return false;
      } else {
        return true;
      }
      break;
    case 3:
      if (this._miner.row === 6 || this._maze[this._miner.row + 1][this._miner.col] === false) {
        return false;
      } else {
        return true;
      }
      break;
}
};

// Alternative:
// this.turnLeft();
// var pathLeft = this.isPathForward();
// this.turnRight();
// return pathleft;

Maze.prototype.isPathRight   = function(){
 switch (this._miner.dir) {
   case 0:
   if(this._miner.col === 5 || this._maze[this._miner.row][this._miner.col + 1] === false) {
     return false;
   } else {
     return true;
   }
   break;
   case 1:
   if(this._miner.row === 5 || this._maze[this._miner.row + 1][this._miner.col] === false) {
     return false;
   } else {
     return true;
   }
   break;
   case 2:
   if(this._miner.col === 0 || this._maze[this._miner.row][this._miner.col - 1] === false) {
     return false;
   } else {
     return true;
   }
   break;
   case 3:
   if(this._miner.row === 0 || this._maze[this._miner.row - 1][this._miner.col] === false) {
     return false;
   } else {
     return true;
   }
 }
 };
 Maze.prototype.moveForward   = function(){
 switch (this._miner.dir) {
   case 0: {
     if(this._miner.row === 0 || this._maze[this._miner.row - 1][this._miner.col] === false)  {
       return false;
     } else {
       this._miner.row -= 1;
       return true;
     }
     break;
   }
   case 1: {
     if(this._miner.col === 5 || this._maze[this._miner.row][this._miner.col + 1] === false) {
       return false;
     } else {
       this._miner.col += 1;
       return true;
     }
     break;
   }
   case 2: {
     if(this._miner.row === 6 || this._maze[this._miner.row  + 1][this._miner.col] === false) {
       return false;
     } else {
       this._miner.row += 1;
       return true;
     }
     break;
   }
   case 3: {
     if(this._miner.col === 0 || this._maze[this._miner.col - 1][this._miner.row] === false) {
       return false;
     } else {
       this._miner.col -= 1;
       return true;
     }
   }
 }
};

// Alternative: 
// if (this.isPathForward()) {
//   var m = this._miner;
//   switch (m.dir) {
//     case 0: this._miner.row--)
//
//   }
// }

Maze.prototype.notDone       = function(){
return ((this._miner.row === this._exit.row) &&
        (this._miner.col === this._exit.col)
      );
    };

module.exports = Maze;
