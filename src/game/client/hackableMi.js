import 'pixi';
import 'p2';
import Phaser from 'phaser';
import MainMenu from './states/mainMenu';
import Playground from './states/playground';
import Loading from './states/loading';
import { closeAllMenus } from '../actions/menuActions';

export default class extends Phaser.Game {

  constructor(dispatch, container = 'gameContainer', width = 960, height = 600) {
    super(width, height, Phaser.AUTO, container, null);
    this.playerInventory = null;
    this.player = null;
    this.isInitialized = false;
    this.state.add('MainMenu', MainMenu, false);
    this.state.add('Playground', Playground, false);
    this.state.add('Loading', Loading, false);
    this.dispatch = dispatch;
    this.music = null;
    this.map = null;
    this.collisionGroup = null;
    this.keyGroup = null;
    this.systemGrid = null;
    this.terminated = false;
    this.nextState = null;
  }

  initialize() {
    this.isInitialized = true;
    this.state.start('MainMenu');
  }

  transitionState(state) {
    if (this.music != null) {
      this.music.pause();
    }
    this.dispatch(closeAllMenus());
    this.nextState = state;
    this.state.start('Loading');
  }

  setUserProperty(property, field, value) {
    const validProperties = ['systemGrid', 'terminated'];
    if (validProperties.indexOf(property) != -1) {
      this[property][field] = value;
    }
  }

  getUserConfiguration() {
    return {
      showBounds: this.collisionGroup.visible,
      systemGrid: this.systemGrid.visible,
    };
  }

  setCollisionBoundsVisibility(visible) {
    if (this.collisionGroup) {
      this.collisionGroup.visible = visible;
    }
  }

  isTerminated() {
    return this.terminated;
  }

  systemTerminate(status) {
    this.terminated = status;
  }

  systemResume() {
    this.terminated = false;
  }

}