import * as types from '../constants/actions';
import SystemDriver from '../system/driver';

export const clientMiddleware = () => {
  return store => next => action => {
    if (action.type === types.TRANSITION_STATE) {
      store.getState().client.transitionState(action.payload.requestedState);
    }
    if (action.type === types.EXECUTE_CODE) {
      const driver = new SystemDriver(action.payload.code, store);
      driver.compile();
    }
    if (action.type === types.TERMINATE_CODE) {
      store.getState().client.systemTerminate();
    }
    return next(action);
  };
};

export default clientMiddleware;