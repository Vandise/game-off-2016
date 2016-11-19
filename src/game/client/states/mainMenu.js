import Phaser from 'phaser';
import { setMenu } from '../../actions/menuActions';

export default class extends Phaser.State {

  init() {
    
  }

  preload() {
    this.load.image('mainmenu_bg', 'assets/mainmenu_bg.jpg');
    this.load.image('greeting_bubble', 'assets/greeting_bubble.png');
    this.load.image('blank_bubble', 'assets/blank_bubble.png');
    this.load.spritesheet('mi', 'assets/player.png', 32, 36, 12);
    this.load.audio('intro_music', 'assets/audio/intro.mp3');
  }

  create() {
    const bg = this.add.sprite(950, 600, 'mainmenu_bg');
    const mi = this.add.sprite(445, 490, 'mi');
    this.game.music = this.add.audio('intro_music');
    this.game.music.play();
    mi.animations.add('walk_down', [6, 7, 8], 8, true);
    mi.animations.play('walk_down');
    let scale = 1;
    const scaling = setInterval(() => {
      scale += 0.01
      mi.scale.setTo(scale, scale);
    }, 60);
    setTimeout(() => {
      let bubble = this.add.sprite(0, 0, 'greeting_bubble');
      bubble.scale.setTo(0.2, 0.2);
      mi.animations.stop(null, true);
      mi.frame = 7;
      bubble = mi.addChild(bubble);
      bubble.y -= 27;
      bubble.x += 6;
      clearInterval(scaling);
    }, 5500);
    bg.x = 0;
    bg.y = 0;
    bg.height = this.game.height;
    bg.width = this.game.width;
    this.game.dispatch(setMenu('mainMenu', true));
    return true;    
  }

}