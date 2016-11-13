import Phaser from 'phaser';

export default class extends Phaser.State {

  init() {
    
  }

  preload() {
    const text = this.add.text(this.world.centerX, this.world.centerY, 'Hackable Mi', { font: '16px Arial', fill: '#dddddd', align: 'center' });
    text.anchor.setTo(0.5, 0.5);
  }

  create() {
    return true;    
  }

}