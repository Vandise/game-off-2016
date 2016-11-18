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

        //var platformbmd = this.game.add.bitmapData(80, 16);
        //platformbmd.ctx.rect(0, 0, 80, 16);
        //platformbmd.ctx.fillStyle = "#fff";
        //platformbmd.ctx.fill();        
        
      /*
      let gfx = this.game.add.graphics(0,0);
      gfx.beginFill(0x00FFFF, 1);
      gfx.boundsPadding = 0;
      gfx.drawRect(obj.x, obj.y, obj.width, obj.height);

      //let sSprite = this.game.add.sprite(0, 0);
      //sSprite.addChild(gfx);
      */
      this.game.physics.enable(sprite, Phaser.Physics.ARCADE);
      collisionBounds.add(sprite);
    });
    return collisionBounds;
  }

}

export default CollisionGroup;