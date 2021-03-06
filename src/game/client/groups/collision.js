class CollisionGroup extends Phaser.Group {

  constructor(game, collisionBoundsArray) {
    super(game);
    this.boundsArray = collisionBoundsArray;
  }

  deleteNamedGroup(name) {
    this.forEach((obj) => {
      if (obj.name === name) {
        obj.kill();
      }
    });
  }

  load() {
    this.boundsArray.forEach((obj) => {
      
      let gfx = this.game.add.bitmapData(obj.width, obj.height);
      gfx.ctx.rect(0, 0, obj.width, obj.height);
      gfx.ctx.fillStyle = "#fff";
      gfx.ctx.fill();
      let sprite = this.game.add.sprite(obj.x, obj.y, gfx, 0, this);
      sprite.name = obj.name;
      sprite.immovable = true;

      this.game.physics.enable(sprite, Phaser.Physics.ARCADE);
      this.add(sprite);
      this.visible = false;
    });
    return this;
  }

}

export default CollisionGroup;