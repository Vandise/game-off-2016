import 'pixi';
import 'p2';
import Phaser from 'phaser';
import MainMenu from './states/mainMenu';

export default class extends Phaser.Game {

  constructor(dispatch, container = 'gameContainer', width = 950, height = 600) {
    super(width, height, Phaser.AUTO, container, null);
    this.playerInventory = {};
    this.isInitialized = false;
    this.state.add('MainMenu', MainMenu, false);
    this.dispatch = dispatch;
  }

  initialize() {
    this.isInitialized = true;
    this.state.start('MainMenu');
  }

}