import Phaser from 'phaser';
import { setMenu } from '../../actions/menuActions';

export default class extends Phaser.State {

  init() {
    
  }

  preload() {
    this.load.spritesheet('mi', 'assets/player.png', 32, 36, 12);
    this.load.audio('dungeon_music', ['assets/audio/dungeon_1.mp3', 'assets/audio/dungeon_1.mp3', 'assets/audio/intro.mp3', ]);
  }

  create() {
    // Lots of stuff to do here!
    // - Initialize player
    // - load command (Mi script terminal)
    // - load command console
    // - show player inventory (1 item)
    this.game.dispatch(setMenu('codeMenu', true));
    console.log('Developer playgroup and mi language testing');
    this.game.music = this.add.audio('dungeon_music');
    this.game.music.play();
    return true;
  }

  update() {
    
  }

}