class UseGroup extends Phaser.Group {

  constructor(game, eventObjs) {
    super(game);
    this.eventObjs = eventObjs;
  }

  load() {
    this.eventObjs.forEach((obj) => {      
      let gfx = this.game.add.bitmapData(obj.width, obj.height);
      gfx.ctx.rect(0, 0, obj.width, obj.height);
      gfx.ctx.fillStyle = "yellow";
      gfx.ctx.fill();
      let sprite = this.game.add.sprite(obj.x, obj.y, gfx, 0, this);
      sprite.name = obj.name;
      sprite.immovable = true;

      this.game.physics.enable(sprite, Phaser.Physics.ARCADE);
      this.add(sprite);
      this.visible = true;
    });
    return this;
  }

}

export default UseGroup;