![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# JS | Maze

## Introduction

During an amazing trip to the mountains, we have a great chance: to visit a mine. It seems very sure, but during the visit we get trapped under ground! The mine seems a maze, so we will need to create a maze solver to be able to get out from there.

![Maze Picture](https://i.imgur.com/DDuEYCb.png)

We have prepared a bunch of tests that will guide you through the process, and will help you get out of there as soon as we can. Before start coding, we are going to play a blockly game that will help you to understand how the maze solver will work.

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

## Requirements

- [Fork this repo](https://guides.github.com/activities/forking/)
- Clone this repo into your `~/code/labs`

## Submission

Upon completion, run the following commands
```
$ git add .
$ git commit -m "done"
$ git push origin master
```
Navigate to your repo and create a Pull Request -from your master branch to the original repository master branch.

In the Pull request name, add your name and last names separated by a dash "-"

## Deliverables
In your starter code folder you will find every file you need to finish the game. Push every needed file to make your game work properly.

### Exercise

In the first part of this exercise, you have to complete the 10 levels of this game. Pay special attention to each level to see which code is created to solve the puzzles. We will use this code later.

In the level one we just have blocks to move forward, turn left, and turn right. In the following levels it will appear loops and conditional statements.

**Be careful, there is a maximum number of blocks you can use in each level!**


If you get stucked in level 10, here is the [Solution](https://i.imgur.com/QlGNLx5.png)


## Maze

In this second part of the exercise, we are going to create a maze solver. We are trapped under ground with a group of miners. We have to implement an algorithm that allow us to get out of there before is too late.

In this exercise, there are a few functions that we use to generate the blocks:

```javascript
var Maze = function(maze) {
  this.pos_x = 0;
  this.pos_y = 0;
  this.maze = maze;
}

Maze.prototype.turnLeft      = function(){}
Maze.prototype.isPathForward = function(){}
Maze.prototype.isPathLeft    = function(){}
Maze.prototype.isPathRight   = function(){}
Maze.prototype.turnRight     = function(){}
Maze.prototype.moveForward   = function(){}
Maze.prototype.notDone       = function(){}
```

Given the following map, our miners should be able to get out of the mine by following the correct path. The mine map is a matrix where you have an X if the path is forbiden, and nothing if its allowed:

Row/Col | 0 | 1 | 2 | 3 | 4 | 5
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:
| 0 | **Start** | X |   |   |   | X
| 1 |   | X |   | X |   | X
| 2 |   |   |   | X |   | X
| 3 | X | X | X | X |   | X
| 4 |   |   |   |   |   | X
| 5 |   | X | X | X | X | **End**
| 6 |   |   |   |   |   |

And the correct code to solve this maze is the same that we have used in the level 10 of the blockly game:

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

### Exercise

In the starter-code folder of this project, you will find the tests we have created to solve this maze. We are going to use TDD with Node and [Mocha](https://mochajs.org/) to do the exercise. To execute the tests, run the following commands:

```
$ cd starter-code
$ npm install
$ npm test
```

We are launching our tests by executing the instructions above. In the console we will get a result like this:

![](https://i.imgur.com/7Rf0ojt.png)

#### TDD

First of all we have to solve all the tests we have created to be sure that our maze functionality works as we expect. We will solve all of them by using [TDD](https://en.wikipedia.org/wiki/Test-driven_development). You will find all the test `/test/maze-test.js` file.

#### Solve maze

Once we have solved all the tests we have in the `/test/maze-test.js`, we would be able to solve the maze we can find in `index.js` file. We have created a basic mine map that you have to solve:

Row/Col | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 0 | X |   |   |   | **Start** | X |  |
| 1 | X |   | X | X | X | X | X |
| 2 | X |   | X | X |   | X |  |
| 3 |   |   | X | X |   | X | X |
| 4 |   | X |   |   |   | X | X |
| 5 |   | X | X | X | X |   |  |
| 6 |   |   |   |   | **End** |  | X |

**Create the correct sequence of functions that will allow our miners to get out the mine. Use the maze solver that we have created in the previous step of this exercise.**

## Extra Resources

- [Blockly games - Maze](https://blockly-games.appspot.com/maze)
