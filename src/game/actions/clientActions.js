import * as types from '../constants/actions';
import GameClient from '../client/hackableMi';

export function initializeClient(dispatch) {
  const payload = {
    client: GameClient,
    dispatch,
  };
  return {
    type: types.INITIALIZE_CLIENT,
    payload,
  };
}

export function transitionGameState(requestedState) {
  const payload = {
    requestedState,
  };
  return {
    type: types.TRANSITION_STATE,
    payload,
  };
}