# JS | Maze

## Introduction

- Maze
- Blockly
- JS + TDD

## Blockly Games: Maze

[Blockly Games](https://blockly-games.appspot.com/) is a series of educational games that teach programming. It's designed for children who have not had prior experience with computer programming, but some of the challenges you will find have some difficulty.

We want you to take a look at the [Maze](https://blockly-games.appspot.com/maze?lang=en) to be introduced in the amazing Maze world! If you [visit the game](https://blockly-games.appspot.com/maze?lang=en), you will find the following:

![](https://i.imgur.com/NbDwcTm.png)

The game layout is divided in several parts:

- At the top of the page, you can find the current level.
- On the left, you can see the path you have to obtain. Your goal is the red pin at the end of the yellow line, and the line is the path we have to achieve with the lilac blocks.
- On the right, you have the "game board", that is divided in two different sections:
	- The left side contains the blocks you can use to solve the puzzle
	- The right side is your "canvas", where you have to join the blocks and create your solution

When you have the solution, like in the image above, you have to run the program by clicking on the red button. You will see how the yellow man goes from the initial position to its destination. Once the goal is achieved, it will appear the JavaScript code that made that possible:

![](https://i.imgur.com/vmm6AXq.png =400x)

The first level is very easy, we are just implementing the `moveForward()` function twice. Easy, right? Click on the Ok button to play the level 2.

### Exercise

In the first part of this exercise, you have to complete the 10 levels of this game. Pay special attention to each level to see which code is created to solve the puzzles. We will use this code later.

In the level one we just have blocks to move forward, turn left, and turn right. In the following levels it will appear loops and conditional statements.

**Be careful, there is a maximum number of blocks you can use in each level!**


If you get stucked in level 10, here is the [Solution](https://i.imgur.com/QlGNLx5.png)


## Maze

In this maze exercise, there are a few functions that we use to generate the blocks:


Row/Col | 0 | 1 | 2 | 3 | 4 | 5
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:
| 0 | **Start** | X |   |   |   | X
| 1 |   | X |   | X |   | X
| 2 |   |   |   | X |   | X
| 3 | X | X | X | X |   | X
| 4 |   |   |   |   |   | X
| 5 |   | X | X | X | X | **End**
| 6 |   |   |   |   |   |


```javascript
var Maze = function(maze) {
  this.pos_x = 0;
  this.pos_y = 0;
  this.maze = maze;
}

Maze.prototype.isPathForward = function(){}
Maze.prototype.isPathLeft    = function(){}
Maze.prototype.isPathRight   = function(){}
Maze.prototype.moveForward   = function(){}
Maze.prototype.turnLeft      = function(){}
Maze.prototype.turnRight     = function(){}
Maze.prototype.notDone       = function(){}
```

```javascript
while (maze.notDone()) {
  if (maze.isPathLeft()) {
    maze.turnLeft();
    maze.moveForward();
  } else {
    if (maze.isPathForward()) {
      maze.moveForward();
    } else {
      if (maze.isPathRight()) {
        maze.turnRight();
        maze.moveForward();
      } else {
        maze.turnLeft();
      }
    }
  }
}
```

## Extra Resources

- [Blockly games - Maze](https://blockly-games.appspot.com/maze)
