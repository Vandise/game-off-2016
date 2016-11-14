import Phaser from 'phaser';
import Player from '../objects/player';
import { setMenu } from '../../actions/menuActions';
import { addConsoleMessage } from '../../actions/consoleActions';

export default class extends Phaser.State {

  init() {
    
  }

  preload() {
    this.load.image('gridBg', 'assets/gridsquare.jpg', 32, 36);
    this.load.spritesheet('mi', 'assets/player.png', 32, 36, 12);
    this.load.audio('dungeon_music', ['assets/audio/dungeon_1.mp3', 'assets/audio/dungeon_2.mp3', 'assets/audio/intro.mp3', ]);
  }

  create() {
    this.game.time.advancedTiming = true;
    const gridSprite = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'gridBg');
    // Lots of stuff to do here!
    // - Initialize player
    // - load command (Mi script terminal)
    // - load command console
    // - show player inventory (1 item)
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.game.player = new Player(this.game).load();
    // testing animations for fun
    //this.game.player.animations.play('walk_up');
    //this.game.player.move_up();

    this.game.dispatch(setMenu('codeMenu', true));
    this.game.dispatch(setMenu('consoleMenu', true));
    this.game.dispatch(setMenu('playerMenu', true));
    this.game.dispatch(addConsoleMessage('Initialized Playground testing area'));
    this.game.music = this.add.audio('dungeon_music');
    this.game.music.play();
    return true;
  }

  render() {
    this.game.debug.text(this.game.time.fps, 2, 14, "#00ff00");    
  }

  update() {
    
  }

}