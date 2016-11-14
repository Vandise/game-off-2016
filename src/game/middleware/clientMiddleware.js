import * as types from '../constants/actions';

export const clientMiddleware = () => {
  return store => next => action => {
    if (action.type === types.TRANSITION_STATE) {
      store.getState().client.transitionState(action.payload.requestedState);
    }
    return next(action);
  };
};

export default clientMiddleware;