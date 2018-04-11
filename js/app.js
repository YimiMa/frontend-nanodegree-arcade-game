// Enemies our player must avoid
const score = document.querySelector('.score');
const Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = Math.floor(Math.random() * 400) + 100;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.

    // this.x is updated by speed * time
    this.x = this.x + this.speed * dt;

    // reset the position of enemy when it gets to the end
    this.collision(player);
    if (this.x > 500) {
      this.x = -100;
      this.speed = Math.floor(Math.random() * 400) + 100;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.collision = function (player) {
  if (Math.abs(player.x - this.x) < 20 && Math.abs(player.y - this.y) < 50) {
        player.x = 200;
        player.y = 300;
    }
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
const Player = function () {
      // x, y have initial values
      this.x = 200;
      this.y = 300;
      this.sprite = 'images/char-cat-girl.png';
      this.score = 0;
};

Player.prototype.update = function() {
  if (this.y < 60) {
    this.score++;
    score.innerHTML = this.score;
    this.x = 200;
    this.y = 300;
  }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function (keyCode) {
    if (keyCode == 'left' && this.x > 0) {
      this.x = this.x - 100;
    } else if (keyCode == 'right' && this.x < 400) {
      this.x = this.x + 100;
    } else if (keyCode == 'up' && this.y >= 60) {
      this.y = this.y - 80;
    } else if (keyCode == 'down' && this.y < 300) {
        this.y = this.y + 80;
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
let allEnemies = new Array();

// enemy's position (column position) in the matrix
[50, 130, 220].forEach(function(col) {
    allEnemies.push(new Enemy(0, col));
});

// Place the player object in a variable called player
let player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
