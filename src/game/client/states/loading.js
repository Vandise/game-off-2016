import Phaser from 'phaser';

const styles = { font: "32px pixeled", fill: '#000' };
let text = null;
let mi = null;
let progressBar = null;

export default class extends Phaser.State {

  preload() {
    this.game.load.onLoadStart.add(this.loadStart, this);
    this.game.load.onFileComplete.add(this.fileComplete, this);
    this.game.load.onLoadComplete.add(this.loadComplete, this);
    this.loadAssets();
  }

  loadAssets() {
    this.load.image('gridBg', 'assets/gridsquare.jpg', 32, 36);
    this.load.audio('dungeon_music', 'assets/audio/dungeon_1.mp3');
    this.load.audio('dungeon_2', 'assets/audio/dungeon_2.mp3');
    //this.load.tilemap('playground', 'assets/maps/json/playground.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('tiles', 'assets/maps/dungeon.png');
    this.load.spritesheet('items', 'assets/maps/items.png', 40, 40);
    this.game.load.start();
  }

  loadStart() {

    mi = this.add.sprite(this.game.world.centerX - 100, this.game.world.centerY - 100, 'mi');
    mi.scale.setTo(2, 2);
    mi.animations.add('walk_down', [6, 7, 8], 8, true);
    mi.animations.play('walk_down');

    let bubble = this.add.sprite(0, 0, 'blank_bubble');
    bubble.scale.setTo(0.3, 0.3);
    bubble = mi.addChild(bubble);
    bubble.y -= 40;
    bubble.x += 0;

    text = this.game.add.text(0, 0, 'Loading...', styles);
    text.anchor.set(0);
    text = bubble.addChild(text);
    text.y += 37;
    text.x += 35;

    progressBar = this.game.add.graphics(0, 0);
    progressBar.anchor.set(0.5);
    progressBar.beginFill(0xFF700B, 1);
    progressBar.drawRect(this.game.world.centerX - 210, this.game.world.centerY, 1, 25);

    const eventTimer = this.game.time.events.loop(1000, () => {
      if (progressBar.width < 300) {
      } else {
        this.game.time.events.remove(eventTimer);
      }
    }, this);

  }

  fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {
    text.setText(`Loading: ${progress}%`);
    progressBar.drawRect(this.game.world.centerX - 210, this.game.world.centerY, (300 * (progress/100)), 25); 
  }

  loadComplete() {
    this.game.load.onLoadComplete.removeAll();
  }

  create() {
    this.game.state.start(this.game.nextState);
  }

}