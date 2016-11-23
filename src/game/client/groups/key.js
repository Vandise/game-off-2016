const KEY_SPRITE_INDEX = 54;
const KEY_SPRITE_NAME = 'silver_key';
const SPRITESHEET = 'items';

let keys = {};

class KeyGroup extends Phaser.Group {

  constructor(game) {
    super(game);
  }

  load() {
    keys = this.game.add.group();
    keys.enableBody = true;
    keys.visible = true;
    this.game.map.createFromObjects(
      'events', KEY_SPRITE_NAME, SPRITESHEET, KEY_SPRITE_INDEX, true, false, keys);
    return keys;
  }

}

export default KeyGroup;