frontend-nanodegree-arcade-game
===============================

# Arcade Game

## Instructions

This project is built for arcade game.
This game is a simple game. In order to win, the player needs to let the character (cat girl) to go across the street and get to the river without hitting any enemy. Please press the up/down/left/right keys on keyboard to move the character. At any time, there are three enemies on the street with different speed. The character will start at the meadow. Try to avoid any enemy!!!!!!

## Files

  _index.html_
  _js/app.js_
  _engine.js_
  _resources.js_
  _css/app.css_

  ### Starts From js/app.js Files
  **Step 1: Design Enemy Class **

  Enemy Object will contain the following properties:
  --> variables:
          --> x : records the horizontal position in the game board (row index of matrix), initialized by passed in value.
          --> y : records the vertical position in the game board (column index of matrix), initialized by passed in value.
          --> speed : pick the random speed (enemy speed = (random number from 1 to 400) + 100)
          --> sprite: the image we used to represent enemy (bug).
  --> fuctions:
          --> update(): update the enemies' new position in real-time.
                --> Note: each update will call checkCollisions() function to check the if there is a collision with character in the game board.
          --> render(): draw the enemies to the game board in real-time depending on their new x value and new y value.
          --> checkCollisions(): when character hits anyone enemy, it will be considered as collision.  


 **Step 2: Design Player Class **      
 Player Object will contain the following properties:
  --> variables:
          --> x : records the horizontal position in the game board (row index of matrix), initialized by local value
          --> y : records the vertical position in the game board (column index of matrix), initialized by local value.
          --> sprite: the image we used to represent character (cat girl).
  --> fuctions:
          --> update(): update the character's new position in real-time.
                --> Note: when character get to the river, the score board will add one. Character will re-start from meadow part.
          --> render(): draw the character to the game board in real-time depending on their new x value and new y value.
          --> handleInput(): player will be moved by press up/down/left/right keys on keyboard. This function is used to respond user's action.
                --> Press "up" key :  character move up
                --> Press "down" key : character move down
                --> Press "left" key : character move left
                --> Press "right" key : character move right

 **Step 3: Create Objects **  
      --> allEnemies Array: put all enemy objects into this array. Its each element is an Enemy object.
            -->  Initialize each enemy object's start position in the array.

      --> player object: an character is created and initialized.

**Step 4: Event Listener for Key pres**
