Development of an automatic vacuum cleaner.

The vacuum cleaner can cover an entire room, its position is represented by its coordinates (x, y) and a letter indicating the orientation according to the English cardinal notation (N, E, W, S). A part is modeled by a rectangular grid.

For example, the vacuum cleaner may be in the "0, 0, N" position, which means it is in the lower left corner of the room, and facing north.

To control the vacuum cleaner, a sequence of commands symbolized by a series of letters is sent to it. The possible commands are "D", "G" and "A". "D" and "G" rotate the vacuum cleaner 90 ° to the right or left respectively, without moving it. "A" means that we advance one square in the direction it faces, and without changing its orientation.


To program the vacuum cleaner, it is provided with input data:
The dimensions of the grid, namely the number of squares on the x and then y axis.
The initial position of the vacuum cleaner, as well as its orientation.
A series of instructions that the vacuum cleaner will carry out.

When the vacuum cleaner completes a series of instructions, it communicates its position and direction.


This project was created with Angular version 9.1.0.

#Running Locally

$ git clone https://github.com/jawaher1/App.git

Running the application :

$ cd app

$ npm install

$ ng s


the app should now be running on localhost:4200.
