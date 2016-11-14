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

  move_left() {
    let distance = 0;
    const movement = setInterval(() => {
      if (distance >= 40) {
        clearInterval(movement);
        return true;
      }
      this.x -= 4;
      distance += 4;
    }, 75);
  }

  move_up() {
    let distance = 0;
    const movement = setInterval(() => {
      if (distance >= 40) {
        clearInterval(movement);
        return true;
      }
      this.y += 4;
      distance += 4;
    }, 75);
  }
}

export default Player;