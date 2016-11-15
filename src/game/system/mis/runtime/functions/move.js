import * as e from '../exceptions/index';

export default (args, context, store, console) => {
  if (args.length < 1) {
    throw e.InvalidParameters(
      "Function move expects at least 1 parameter (direction), 0 given"
    );
  }
  if(typeof args[0] != "string") throw e.InvalidParameters(
    `Function move expects first parameter (direction) to be type of string, ${typeof args[0]} given`
  );
  return store.getState().client.player.move(...args);
};