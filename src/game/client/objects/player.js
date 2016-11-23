import { addConsoleMessage } from '../../actions/consoleActions';
import { addItem, useItem } from '../../actions/playerActions';

const SPRITE_SHEET = 'mi';
const DEFAULT_FRAME = 7;
const ANIMATION_SPEED = 8;
const MOVE_SPEED = 85;

class Player extends Phaser.Sprite {

  constructor(game, startX, startY) {
    // (11*40)-20, (3*40)-20
    super(game, (startX * 40) - 20, (startY * 40) - 20, SPRITE_SHEET, DEFAULT_FRAME);
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
    window.player = this;
    return this;    
  }

  getCoordinates() {
    return {
      x: this.x,
      y: this.y,
    };
  }

  pickUpItem(self, item) {
    this.game.dispatch(addItem(
      {
        name: item.name,
        image: `/assets/items/${item.name}.png`,
      }
    ));
    this.game.dispatch(addConsoleMessage(
      `Picked up item: ${item.name}`
    ));
    item.kill();
  }

  returnFromCollision(returnDistance, direction) {
    return new Promise((resolve, reject) => {
      this.animations.play(`walk_${direction}`);
      let travelDistance = 0;

      this.game.dispatch(addConsoleMessage(
        `Player-environment collision detected, backtracking 1 step.`
      ));

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
              this.y -= 4;
              break;
            case "down":
              this.y += 4;
              break;
          }
          travelDistance += 4;
        }

      }, MOVE_SPEED);
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

        ////console.log('Player coords:', this.x, this.y);

        if(!this.game.isTerminated()) {

          if (moveDistance >= computedDistance) {
            this.animations.stop(DEFAULT_FRAME, true);
            clearInterval(movement);
            resolve('Animation Complete');
            //console.log('Final coords:', this.x, this.y);
          } else {
            this.x -= 4;
            moveDistance += 4;
          }

        } else {
  
          this.animations.stop(DEFAULT_FRAME, true);
          clearInterval(movement);
          this.returnFromCollision(startX - this.x, "right").then((result) => {
            //console.log('Result', result);
            resolve('Animation Complete');
          });
        }

      }, MOVE_SPEED);
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

        //console.log('Player coords:', this.x, this.y);

        if(!this.game.isTerminated()) {

          if (moveDistance >= computedDistance) {
            this.animations.stop(DEFAULT_FRAME, true);
            clearInterval(movement);
            resolve('Animation Complete');
            //console.log('Final coords:', this.x, this.y);
          } else {
            this.x += 4;
            moveDistance += 4;
          }

        } else {
  
          this.animations.stop(DEFAULT_FRAME, true);
          clearInterval(movement);
          this.returnFromCollision(this.x - startX, "left").then((result) => {
            //console.log('Result', result);
            resolve('Animation Complete');
          });
        }

      }, MOVE_SPEED);
    });

  }

  move_down(distance) {
    return new Promise((resolve, reject) => {
      this.game.dispatch(addConsoleMessage(
        `Player moved: up, Distance: ${distance}`
      ));
      let moveDistance = 0;
      const computedDistance = (40*distance);
      this.animations.play('walk_down');
      let startY = this.y;
      const movement = setInterval(() => {

        //console.log('Player coords:', this.x, this.y);

        if(!this.game.isTerminated()) {

          if (moveDistance >= computedDistance) {
            this.animations.stop(DEFAULT_FRAME, true);
            clearInterval(movement);
            resolve('Animation Complete');
            //console.log('Final coords:', this.x, this.y);
          } else {
            this.y += 4;
            moveDistance += 4;
          }

        } else {
  
          this.animations.stop(DEFAULT_FRAME, true);
          clearInterval(movement);
          this.returnFromCollision(this.y - startY, "up").then((result) => {
            //console.log('Result', result);
            resolve('Animation Complete');
          });
        }

      }, MOVE_SPEED);
    });
  }

  move_up(distance) {
    return new Promise((resolve, reject) => {
      this.game.dispatch(addConsoleMessage(
        `Player moved: down, Distance: ${distance}`
      ));
      let moveDistance = 0;
      const computedDistance = (40*distance);
      this.animations.play('walk_up');
      let startY = this.y;
      const movement = setInterval(() => {

        //console.log('Player coords:', this.x, this.y);

        if(!this.game.isTerminated()) {

          if (moveDistance >= computedDistance) {
            this.animations.stop(DEFAULT_FRAME, true);
            clearInterval(movement);
            resolve('Animation Complete');
            //console.log('Final coords:', this.x, this.y);
          } else {
            this.y -= 4;
            moveDistance += 4;
          }

        } else {
  
          this.animations.stop(DEFAULT_FRAME, true);
          clearInterval(movement);
          this.returnFromCollision(startY - this.y, "down").then((result) => {
            //console.log('Result', result);
            resolve('Animation Complete');
          });
        }

      }, MOVE_SPEED);
    });
  }
}

export default Player;