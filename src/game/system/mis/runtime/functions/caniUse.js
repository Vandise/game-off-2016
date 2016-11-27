import * as e from '../exceptions/index';

export default (args, context, store, console) => {
  if (args.length < 1) {
    throw e.InvalidParameters(
      "Function caniUse expects 1 parameter (item_name), 0 given"
    );
  }
  if(typeof args[0] != "string") throw e.InvalidParameters(
    `Function use expects first parameter (item_name) to be type of string, ${typeof args[0]} given`
  );
  return new Promise((resolve, reject) => {
    let caniUseNow = false;
    const client = store.getState().client;
    const item = store.getState().inventory;

    if (item === null || item.name != args[0]) {
      store.dispatch(console(`You do not have the item '${args[0]}' in your inventory`));
      resolve(0);
      return 0;
    }
    if (item != null && item.name != client.usableItem) {
      store.dispatch(console(`You cannot use the item '${args[0]}' at this time`));
      resolve(0);
      return 0;
    }
    store.dispatch(console(`You can currently use the item '${args[0]}'`));
    resolve(1);
    return 1;
  });
};