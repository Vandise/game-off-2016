import { addConsoleMessage } from '../../actions/consoleActions';

const SPRITE_SHEET = 'mi';
const DEFAULT_FRAME = 7;
const ANIMATION_SPEED = 8;

class Player extends Phaser.Sprite {

  constructor(game) {
    super(game, (13*40)-20, (3*40)-20, SPRITE_SHEET, DEFAULT_FRAME);
  }

  load() {
    this.game.add.existing(this);
    this.game.physics.arcade.enable(this);
    this.body.collideWorldBounds = true;
    this.anchor.set(0.5);
    this.animations.add('walk_up', [0, 1, 2], ANIMATION_SPEED, true);
    this.animations.add('walk_right', [3, 4, 5], ANIMATION_SPEED, true);
    this.animations.add('walk_down', [6, 7, 8], ANIMATION_SPEED, true);
    this.animations.add('walk_left', [9, 10, 11], ANIMATION_SPEED, true);
    return this;    
  }

  move(direction, distance = 1) {
    switch(direction) {
      case 'left':
        return this.move_left(distance);
        break;
      case 'right':
        return this.move_right(distance);
        break;
      case 'up':
        break;
      case 'down':
        break;
    }
    return false;
  }

  move_left(distance) {
    /*
    return (function move(moveDistance, player) {
      setTimeout(() => {
        if (moveDistance >= (40 * distance)) {
          console.log('Animation complete');
          return true;
        }
        player.x -= 4;
        moveDistance += 4;
        move(moveDistance, player);
      }, 75);
      return true;
    })(0, this);
    */
    return new Promise((resolve, reject) => {
      this.game.dispatch(addConsoleMessage(
        `Player moved: left, Distance: ${distance}`
      ));
      let moveDistance = 0;
      const movement = setInterval(() => {
        if (moveDistance >= (40 * distance)) {
          clearInterval(movement);
          resolve('Animation Complete');
          return true;
        }
        this.x -= 4;
        moveDistance += 4;
      }, 75);
    });
  }

  move_right(distance) {
    return new Promise((resolve, reject) => {
      this.game.dispatch(addConsoleMessage(
        `Player moved: left, Distance: ${distance}`
      ));
      let moveDistance = 0;
      const movement = setInterval(() => {
        if (moveDistance >= (40 * distance)) {
          clearInterval(movement);
          resolve('Animation Complete');
          return true;
        }
        this.x += 4;
        moveDistance += 4;
      }, 75);
    });
    /*
    this.game.dispatch(addConsoleMessage(
      `Player moved: left, Distance: ${distance}`
    ));
    let moveDistance = 0;
    const movement = setInterval(() => {
      if (moveDistance >= (40 * distance)) {
        clearInterval(movement);
        return true;
      }
      this.x -= 4;
      moveDistance += 4;
    }, 75);
    */
  }

}

export default Player;