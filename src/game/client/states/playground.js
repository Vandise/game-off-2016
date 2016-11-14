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
    console.log('Developer playgroup and mi language testing');
    return true;
  }

  update() {
    
  }

}