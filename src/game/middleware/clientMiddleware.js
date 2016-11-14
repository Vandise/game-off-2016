import * as types from '../constants/actions';
import SystemDriver from '../system/driver';

export const clientMiddleware = () => {
  return store => next => action => {
    if (action.type === types.TRANSITION_STATE) {
      store.getState().client.transitionState(action.payload.requestedState);
    }
    return next(action);
  };
};

export default clientMiddleware;