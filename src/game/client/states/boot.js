import Phaser from 'phaser';

const styles = { font: "32px pixeled", fill: '#fff' };
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
    this.load.image('mainmenu_bg', 'assets/mainmenu_bg.jpg');
    this.load.image('greeting_bubble', 'assets/greeting_bubble.png');
    this.load.image('blank_bubble', 'assets/blank_bubble.png');
    this.load.spritesheet('mi', 'assets/player.png', 32, 36, 12);
    this.load.audio('intro_music', 'assets/audio/intro.mp3');
    this.game.load.start();
  }

  loadStart() {

    text = this.game.add.text(this.game.world.centerX - 250, this.game.world.centerY - 210, 'Loading...', styles);
    text.anchor.set(0);
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
    this.game.state.start('MainMenu');
  }

}