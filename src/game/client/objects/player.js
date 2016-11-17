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
    this.animations.add('walk_down', [0, 1, 2], ANIMATION_SPEED, true);
    this.animations.add('walk_right', [3, 4, 5], ANIMATION_SPEED, true);
    this.animations.add('walk_up', [6, 7, 8], ANIMATION_SPEED, true);
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
        return this.move_up(distance);
        break;
      case 'down':
        return this.move_down(distance);
        break;
    }
    return false;
  }

  move_left(distance) {
    return new Promise((resolve, reject) => {
      this.game.dispatch(addConsoleMessage(
        `Player moved: left, Distance: ${distance}`
      ));
      this.animations.play('walk_left');
      let moveDistance = 0;
      const computedDistance = distance > 1 ? (40 * distance) : ((40 * distance) - 4);
      const movement = setInterval(() => {
        if (moveDistance >= computedDistance) {
          this.animations.stop(DEFAULT_FRAME, true);
          clearInterval(movement);
          setTimeout(() => {
            resolve('Animation Complete');
          }, 500);
        }
        this.x -= 4;
        moveDistance += 4;
      }, 100);
    });
  }

  move_right(distance) {
    return new Promise((resolve, reject) => {
      this.game.dispatch(addConsoleMessage(
        `Player moved: right, Distance: ${distance}`
      ));
      let moveDistance = 0;
      const computedDistance = distance > 1 ? (40 * distance) : ((40 * distance) - 4);
      this.animations.play('walk_right');
      const movement = setInterval(() => {
        if (moveDistance >= computedDistance) {
          this.animations.stop(DEFAULT_FRAME, true);
          clearInterval(movement);
          setTimeout(() => {
            resolve('Animation Complete');
          }, 500);
        }
        this.x += 4;
        moveDistance += 4;
      }, 100);
    });

  }

  move_up(distance) {
    return new Promise((resolve, reject) => {
      this.game.dispatch(addConsoleMessage(
        `Player moved: up, Distance: ${distance}`
      ));
      let moveDistance = 0;
      const computedDistance = (40*distance);
      this.animations.play('walk_up');
      const movement = setInterval(() => {
        if (moveDistance >= computedDistance) {
          this.animations.stop(DEFAULT_FRAME, true);
          clearInterval(movement);
          setTimeout(() => {
            resolve('Animation Complete');
          }, 500);
          return true;
        }
        this.y += 4;
        moveDistance += 4;
      }, 100);
    });
  }

  move_down(distance) {
    return new Promise((resolve, reject) => {
      this.game.dispatch(addConsoleMessage(
        `Player moved: down, Distance: ${distance}`
      ));
      let moveDistance = 0;
      const computedDistance = (40*distance);
      this.animations.play('walk_down');
      const movement = setInterval(() => {
        if (moveDistance >= computedDistance) {
          this.animations.stop(DEFAULT_FRAME, true);
          clearInterval(movement);
          setTimeout(() => {
            resolve('Animation Complete');
          }, 500);
          return true;
        }
        this.y -= 4;
        moveDistance += 4;
      }, 100);
    });
  }
}

export default Player;