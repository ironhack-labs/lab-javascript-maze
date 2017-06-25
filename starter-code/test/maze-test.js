var expect = require('chai').expect;
var Maze = require('../maze.js');

describe('Maze', function() {

  var T = true, F = false;
  var map, exit, maze;

  beforeEach(function(){
    map = [
      [ T,  F , T,  T,  T,  F],
      [ T,  F,  T,  F,  T,  F],
      [ T,  T,  T,  F,  T,  F],
      [ F,  F,  F,  F,  T,  F],
      [ T,  T,  T,  T,  T,  F],
      [ T,  F,  F,  F,  F,  T],
      [ T,  T,  T,  T,  T,  T]];
    exit= {row:5, col:5};
    maze = new Maze(map, exit);
  });

  describe('Constructor()', function() {
    it('should initialize a new maze', function() {

      expect(maze._miner.row).to.equal(0);
      expect(maze._miner.col).to.equal(0);
      expect(maze._miner.dir).to.equal(0);

      expect(maze._exit.row).to.equal(exit.row);
      expect(maze._exit.col).to.equal(exit.col);

      expect(maze._maze).to.equal(map);
    });
  });

  describe('turnLeft()', function() {
    it('from left- to down', function() {
      maze._miner.dir = 3;
      maze.turnLeft();
      expect(maze._miner.dir).to.equal(2);
    });
    it('from down - to right', function() {
      maze._miner.dir = 2;
      maze.turnLeft();
      expect(maze._miner.dir).to.equal(1);
    });
    it('from right - to up', function() {
      maze._miner.dir = 1;
      maze.turnLeft();
      expect(maze._miner.dir).to.equal(0);
    });
    it('from up- to left', function() {
      maze._miner.dir = 0;
      maze.turnLeft();
      expect(maze._miner.dir).to.equal(3);
    });
  });

  describe('turnRight()', function() {
    it('from up - to right', function() {
      maze._miner.dir = 0;
      maze.turnRight();
      expect(maze._miner.dir).to.equal(1);
    });
    it('from right - to down', function() {
      maze._miner.dir = 1;
      maze.turnRight();
      expect(maze._miner.dir).to.equal(2);
    });
    it('from down- to left', function() {
      maze._miner.dir = 2;
      maze.turnRight();
      expect(maze._miner.dir).to.equal(3);
    });
    it('from left- to up', function() {
      maze._miner.dir = 3;
      maze.turnRight();
      expect(maze._miner.dir).to.equal(0);
    });
  });

  describe('isPathForward()', function() {
    describe('initial position', function(){
      it('no path above', function() {
        expect(maze.isPathForward()).to.equal(false);
      });
      it('no path right', function() {
        maze._miner.dir = 1;
        expect(maze.isPathForward()).to.equal(false);
      });
      it('path down', function() {
        maze._miner.dir = 2;
        expect(maze.isPathForward()).to.equal(true);
      });
      it('no path left', function() {
        maze._miner.dir = 3;
        expect(maze.isPathForward()).to.equal(false);
      });
    });

    describe('check up', function(){
      beforeEach(function() { maze._miner.dir = 0 });
      it('first row', function() {
        expect(maze.isPathForward()).to.equal(false);
      });
      it('wall in upper row ', function() {
        maze._miner.row = 0;
        maze._miner.col = 4;
        expect(maze.isPathForward()).to.equal(false);
      });
      it('no wall in upper row ', function() {
        maze._miner.row = 2;
        maze._miner.col = 4;
        expect(maze.isPathForward()).to.equal(true);
      });
    });

    describe('check down', function(){
      beforeEach(function() { maze._miner.dir = 2 });
      it('last row', function() {
        maze._miner.row = 6;
        maze._miner.col = 4;
        expect(maze.isPathForward()).to.equal(false);
      });
      it('wall in lower row ', function() {
        maze._miner.row = 2;
        maze._miner.col = 0;
        expect(maze.isPathForward()).to.equal(false);
      });
      it('no wall in lower row ', function() {
        maze._miner.row = 2;
        maze._miner.col = 4;
        expect(maze.isPathForward()).to.equal(true);
      });
    });

    describe('check right', function(){
      beforeEach(function() { maze._miner.dir = 1 });
      it('last column', function() {
        maze._miner.row = 6;
        maze._miner.col = 5;
        expect(maze.isPathForward()).to.equal(false);
      });
      it('wall in right column ', function() {
        maze._miner.row = 0;
        maze._miner.col = 4;
        expect(maze.isPathForward()).to.equal(false);
      });
      it('no wall in right column ', function() {
        maze._miner.row = 4;
        maze._miner.col = 2;
        expect(maze.isPathForward()).to.equal(true);
      });
    });

    describe('check left', function(){
      beforeEach(function() { maze._miner.dir = 3 });
      it('first column', function() {
        maze._miner.row = 6;
        maze._miner.col = 0;
        expect(maze.isPathForward()).to.equal(false);
      });
      it('wall in left column ', function() {
        maze._miner.row = 3;
        maze._miner.col = 4;
        expect(maze.isPathForward()).to.equal(false);
      });
      it('no wall in left column ', function() {
        maze._miner.row = 4;
        maze._miner.col = 2;
        expect(maze.isPathForward()).to.equal(true);
      });
    });
  });

  describe('isPathLeft()', function() {
    describe('initial position', function(){
      beforeEach(function() {
        maze._miner.row = 0 ;
        maze._miner.col = 0 ;
      });
      it('looking up', function() {
        maze._miner.dir = 0;
        expect(maze.isPathLeft()).to.equal(false);
      });
      it('looking right', function() {
        maze._miner.dir = 1;
        expect(maze.isPathLeft()).to.equal(false);
      });
      it('looking down', function() {
        maze._miner.dir = 2;
        expect(maze.isPathLeft()).to.equal(false);
      });
      it('looking left', function() {
        maze._miner.dir = 3;
        expect(maze.isPathLeft()).to.equal(true);
      });
    });
    describe('random position', function(){
      beforeEach(function() {
        maze._miner.row = 6 ;
        maze._miner.col = 5 ;
      });
      it('looking up', function() {
        maze._miner.dir = 0;
        expect(maze.isPathLeft()).to.equal(true);
      });
      it('looking right', function() {
        maze._miner.dir = 1;
        expect(maze.isPathLeft()).to.equal(true);
      });
      it('looking down', function() {
        maze._miner.dir = 2;
        expect(maze.isPathLeft()).to.equal(false);
      });
      it('looking left', function() {
        maze._miner.dir = 3;
        expect(maze.isPathLeft()).to.equal(false);
      });
    });
  });

  describe('isPathRight()', function() {
    describe('initial position', function(){
      beforeEach(function() {
        maze._miner.row = 0 ;
        maze._miner.col = 0 ;
      });
      it('looking up', function() {
        maze._miner.dir = 0;
        expect(maze.isPathRight()).to.equal(false);
      });
      it('looking right', function() {
        maze._miner.dir = 1;
        expect(maze.isPathRight()).to.equal(true);
      });
      it('looking down', function() {
        maze._miner.dir = 2;
        expect(maze.isPathRight()).to.equal(false);
      });
      it('looking left', function() {
        maze._miner.dir = 3;
        expect(maze.isPathRight()).to.equal(false);
      });
    });
    describe('random position', function(){
      beforeEach(function() {
        maze._miner.row = 4 ;
        maze._miner.col = 3 ;
      });
      it('looking up', function() {
        maze._miner.dir = 0;
        expect(maze.isPathRight()).to.equal(true);
      });
      it('looking right', function() {
        maze._miner.dir = 1;
        expect(maze.isPathRight()).to.equal(false);
      });
      it('looking down', function() {
        maze._miner.dir = 2;
        expect(maze.isPathRight()).to.equal(true);
      });
      it('looking left', function() {
        maze._miner.dir = 3;
        expect(maze.isPathRight()).to.equal(false);
      });
    });
  });

  describe('moveForward()', function() {
    describe('Looking Up', function(){
      beforeEach(function() {
        maze._miner.dir = 0;
      });
      it('maze first row', function() {
        maze._miner.row = 0 ;
        maze._miner.col = 0 ;
        expect(maze.moveForward()).to.equal(false);
        expect(maze._miner.row).to.equal(0);
        expect(maze._miner.col).to.equal(0);
      });
      it('maze row above free ', function() {
        maze._miner.row = 2 ;
        maze._miner.col = 0 ;
        expect(maze.moveForward()).to.equal(true);
        expect(maze._miner.row).to.equal(1);
        expect(maze._miner.col).to.equal(0);
      });
      it('maze row above occupied ', function() {
        maze._miner.row = 4 ;
        maze._miner.col = 2 ;
        expect(maze.moveForward()).to.equal(false);
        expect(maze._miner.row).to.equal(4);
        expect(maze._miner.col).to.equal(2);
      });
    });
    describe('Looking Down', function(){
      beforeEach(function() {
        maze._miner.dir = 2;
      });
      it('maze last row', function() {
        maze._miner.row = 6 ;
        maze._miner.col = 0 ;
        expect(maze.moveForward()).to.equal(false);
        expect(maze._miner.row).to.equal(6);
        expect(maze._miner.col).to.equal(0);
      });
      it('maze row below free ', function() {
        maze._miner.row = 1 ;
        maze._miner.col = 2 ;
        expect(maze.moveForward()).to.equal(true);
        expect(maze._miner.row).to.equal(2);
        expect(maze._miner.col).to.equal(2);
      });
      it('maze row below occupied ', function() {
        maze._miner.row = 2 ;
        maze._miner.col = 2 ;
        expect(maze.moveForward()).to.equal(false);
        expect(maze._miner.row).to.equal(2);
        expect(maze._miner.col).to.equal(2);
      });
    });
    describe('Looking Left', function(){
      beforeEach(function() {
        maze._miner.dir = 3;
      });
      it('maze first col', function() {
        maze._miner.row = 0 ;
        maze._miner.col = 0 ;
        expect(maze.moveForward()).to.equal(false);
        expect(maze._miner.row).to.equal(0);
        expect(maze._miner.col).to.equal(0);
      });
      it('maze column left free ', function() {
        maze._miner.row = 0 ;
        maze._miner.col = 3 ;
        expect(maze.moveForward()).to.equal(true);
        expect(maze._miner.row).to.equal(0);
        expect(maze._miner.col).to.equal(2);
      });
      it('maze column left occupied ', function() {
        maze._miner.row = 3 ;
        maze._miner.col = 4 ;
        expect(maze.moveForward()).to.equal(false);
        expect(maze._miner.row).to.equal(3);
        expect(maze._miner.col).to.equal(4);
      });
    });
    describe('Looking Right', function(){
      beforeEach(function() {
        maze._miner.dir = 1;
      });
      it('maze last col', function() {
        maze._miner.row = 6 ;
        maze._miner.col = 5 ;
        expect(maze.moveForward()).to.equal(false);
        expect(maze._miner.row).to.equal(6);
        expect(maze._miner.col).to.equal(5);
      });
      it('maze column right free ', function() {
        maze._miner.row = 6 ;
        maze._miner.col = 4 ;
        expect(maze.moveForward()).to.equal(true);
        expect(maze._miner.row).to.equal(6);
        expect(maze._miner.col).to.equal(5);
      });
      it('maze column right occupied ', function() {
        maze._miner.row = 4 ;
        maze._miner.col = 4 ;
        expect(maze.moveForward()).to.equal(false);
        expect(maze._miner.row).to.equal(4);
        expect(maze._miner.col).to.equal(4);
      });
    });
  });

  describe('notDone()', function() {
    it('finish position', function() {
      maze._miner.row = 3 ;
      maze._miner.col = 4 ;
      maze._exit.row  = 3 ;
      maze._exit.col  = 4 ;
      expect(maze.notDone()).to.equal(true);
    });
    it('not finish position', function() {
      maze._miner.row = 0 ;
      maze._miner.col = 0 ;
      maze._exit.row  = 3 ;
      maze._exit.col  = 4 ;
      expect(maze.notDone()).to.equal(false);
    });
  });
});
