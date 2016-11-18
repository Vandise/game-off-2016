let collisionBounds = {};
class CollisionGroup extends Phaser.Group {

  constructor(game, collisionBoundsArray) {
    super(game);
    this.boundsArray = collisionBoundsArray;
  }

  load() {
    collisionBounds = this.game.add.group();
    collisionBounds.enableBody = true;
    this.boundsArray.forEach((obj) => {
      
      let gfx = this.game.add.bitmapData(obj.width, obj.height);
      gfx.ctx.rect(0, 0, obj.width, obj.height);
      gfx.ctx.fillStyle = "#fff";
      gfx.ctx.fill();
      let sprite = this.game.add.sprite(obj.x, obj.y, gfx, 0, collisionBounds);
      sprite.immovable = true;

      this.game.physics.enable(sprite, Phaser.Physics.ARCADE);
      collisionBounds.add(sprite);
      collisionBounds.visible = false;
    });
    return collisionBounds;
  }

}

export default CollisionGroup;