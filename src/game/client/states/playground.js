import Phaser from 'phaser';
import Player from '../objects/player';
import CollisionGroup from '../groups/collision';
import KeyGroup from '../groups/key';
import UseGroup from '../groups/use';
import { setMenu } from '../../actions/menuActions';
import { addConsoleMessage } from '../../actions/consoleActions';

export default class extends Phaser.State {

  init() {
    
  }

  preload() {
    this.load.tilemap('playground', 'assets/maps/json/mod_1.json', null, Phaser.Tilemap.TILED_JSON);
  }

  create() {
    this.game.time.advancedTiming = true;
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.game.map = this.game.add.tilemap('playground');
    this.game.map.addTilesetImage('dungeon', 'tiles');
    this.game.map.addTilesetImage('items', 'items');
    this.game.pathLayer = this.game.map.createLayer('path');
    this.game.detailLayer = this.game.map.createLayer('details');
    this.game.gateLayer = this.game.map.createLayer('gatelayer');
    this.game.gateLayer.visible = false;

    this.game.pathLayer.resizeWorld();
    this.game.detailLayer.resizeWorld();
    this.game.gateLayer.resizeWorld();

    this.game.systemGrid = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'gridBg');
    this.game.systemGrid.visible = false;

    // Draw the collision bounds
    this.game.collisionGroup = new CollisionGroup(
      this.game, this.game.map.objects.collision).load();

    this.game.keyGroup = new KeyGroup(this.game).load();
    this.game.useGroup = new UseGroup(this.game, this.game.map.objects.events).load();

    const position = this.game.map.objects.player[0];
    this.game.player = new Player(this.game, position.x, position.y).load();

    this.game.dispatch(setMenu('codeMenu', true));
    this.game.dispatch(setMenu('consoleMenu', true));
    this.game.dispatch(setMenu('playerMenu', true));
    this.game.dispatch(addConsoleMessage('Initialized Playground testing area'));
    this.game.music = this.add.audio('dungeon_music');
    this.game.music.play();

    return true;
  }

  collided() {
    this.game.systemTerminate(true);
  }

  render() {
    this.game.debug.text(this.game.time.fps, 2, 14, "#00ff00");    
  }

  update() {
    // TODO: when collide is detected / off for an area, enable / disable specific items for the
    // use function
    this.game.physics.arcade.collide(this.game.player, this.game.collisionGroup, this.collided, null, this);
    this.game.physics.arcade.collide(this.game.player, this.game.keyGroup, this.game.player.pickUpItem, null, this);
  }

}