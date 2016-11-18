import { addConsoleMessage } from '../../actions/consoleActions';

const SPRITE_SHEET = 'mi';
const DEFAULT_FRAME = 7;
const ANIMATION_SPEED = 8;

class Player extends Phaser.Sprite {

  constructor(game) {
    super(game, (11*40)-20, (3*40)-20, SPRITE_SHEET, DEFAULT_FRAME);
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
    window.player = this;
    return this;    
  }

  getCoordinates() {
    return {
      x: this.x,
      y: this.y,
    };
  }

  returnFromCollision(returnDistance, direction) {
    return new Promise((resolve, reject) => {
      this.animations.play(`walk_${direction}`);
      let travelDistance = 0;

      const movement = setInterval(() => {

        if (travelDistance >= returnDistance) {
          this.animations.stop(DEFAULT_FRAME, true);
          clearInterval(movement);
          resolve('Animation Complete');
        } else {
          switch(direction) {
            case "right":
              this.x += 4;
              break;
            case "left":
              this.x -= 4;
              break;
            case "up":
              break;
            case "down":
              break;
          }
          travelDistance += 4;
        }

      }, 100);
      resolve('Returned to original position');
    });
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
      const startX = this.x;
      const computedDistance = distance > 1 ? (40 * distance) : ((40 * distance));
      const movement = setInterval(() => {

        console.log('Player coords:', this.x, this.y);

        if(!this.game.isTerminated()) {

          if (moveDistance >= computedDistance) {
            this.animations.stop(DEFAULT_FRAME, true);
            clearInterval(movement);
            resolve('Animation Complete');
            console.log('Final coords:', this.x, this.y);
          } else {
            this.x -= 4;
            moveDistance += 4;
          }

        } else {
  
          this.animations.stop(DEFAULT_FRAME, true);
          clearInterval(movement);
          this.game.dispatch(addConsoleMessage(
            `Player-environment collision detected, backtracking 1 step.`
          ));
          this.returnFromCollision(startX - this.x, "right").then((result) => {
            console.log('Result', result);
            resolve('Animation Complete');
          });
        }

      }, 100);
    });
  }

  move_right(distance) {
    return new Promise((resolve, reject) => {
      this.game.dispatch(addConsoleMessage(
        `Player moved: right, Distance: ${distance}`
      ));
      let moveDistance = 0;
      const computedDistance = distance > 1 ? (40 * distance) : ((40 * distance));
      this.animations.play('walk_right');
      const startX = this.x;
      const movement = setInterval(() => {

        console.log('Player coords:', this.x, this.y);

        if(!this.game.isTerminated()) {

          if (moveDistance >= computedDistance) {
            this.animations.stop(DEFAULT_FRAME, true);
            clearInterval(movement);
            resolve('Animation Complete');
            console.log('Final coords:', this.x, this.y);
          } else {
            this.x += 4;
            moveDistance += 4;
          }

        } else {
  
          this.animations.stop(DEFAULT_FRAME, true);
          clearInterval(movement);
          this.game.dispatch(addConsoleMessage(
            `Player-environment collision detected, backtracking 1 step.`
          ));
          this.returnFromCollision(this.x - startX, "left").then((result) => {
            console.log('Result', result);
            resolve('Animation Complete');
          });
        }

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
        console.log('Player coords:', this.x, this.y);
        if (moveDistance >= computedDistance) {
          this.animations.stop(DEFAULT_FRAME, true);
          clearInterval(movement);
          resolve('Animation Complete');
          console.log('Final coords:', this.x, this.y);
        } else {
          this.y += 4;
          moveDistance += 4;
        }
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
        console.log('Player coords:', this.x, this.y);
        if (moveDistance >= computedDistance) {
          this.animations.stop(DEFAULT_FRAME, true);
          clearInterval(movement);
          resolve('Animation Complete');
          console.log('Final coords:', this.x, this.y);
        } else {
          this.y -= 4;
          moveDistance += 4;
        }
      }, 100);
    });
  }
}

export default Player;