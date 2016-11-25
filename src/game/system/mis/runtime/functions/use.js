import { useItem } from '../../../../actions/playerActions';
import * as e from '../exceptions/index';

export default (args, context, store, console) => {
  if (args.length < 1) {
    throw e.InvalidParameters(
      "Function use expects 1 parameter (item_name), 0 given"
    );
  }
  if(typeof args[0] != "string") throw e.InvalidParameters(
    `Function use expects first parameter (item_name) to be type of string, ${typeof args[0]} given`
  );
  return new Promise((resolve, reject) => {
    let caniUseNow = false;
    const client = store.getState().client;
    const item = store.getState().inventory;
    if (item.name === client.usableItem) {
      caniUseNow = true;
    }

    if (item === null || item.name != args[0]) {
      store.dispatch(console(`You do not have the item '${args[0]}' in your inventory`));
    } else {
      if (!caniUseNow) {
        store.dispatch(console(`Unable to use item '${args[0]}' at this time`));
        resolve('Use function complete');
      } else {
        store.dispatch(console(`Using item '${args[0]}'`));
        store.dispatch(useItem());
        store.getState().client.collisionGroup.deleteNamedGroup('game_end');
        store.getState().client.gateLayer.visible = true;
        resolve('Use function complete');
      } 
    }
  });
};