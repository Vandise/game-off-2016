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
    const caniUseNow = false;
    const item = store.getState().inventory;

    store.getState().client.collisionGroup.deleteNamedGroup('game_end');
    store.getState().client.gateLayer.visible = true;

    if (item === null || item.name != args[0]) {
      store.dispatch(console(`You do not have the item '${args[0]}' in your inventory`));
    } else {
      if (!caniUseNow) {
        store.dispatch(console(`Unable to use item '${args[0]}' at this time`));
        resolve('Use function complete');
      } else {
        return false;
      } 
    }
  });
};