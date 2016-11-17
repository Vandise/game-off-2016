import * as e from '../exceptions/index';

export default (args, context, store, console) => {
  if (args.length < 1) {
    throw e.InvalidParameters(
      "Function log expects at least 1 parameter (MiS value), 0 given"
    );
  }
  const logmsg = args.map((value) => {
    return ` ${value}`;
  });
  store.dispatch(console(`LOG: ${logmsg}`));
  return new Promise((resolve, reject) => {
    resolve('Log Message dispatched');
  });
};