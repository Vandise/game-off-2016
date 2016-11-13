import { INITIALIZE_CLIENT } from '../constants/actions';
import GameClient from '../client/hackableMi';

export function initializeClient(dispatch) {
  const payload = {
    client: GameClient,
    dispatch,
  };
  return {
    type: INITIALIZE_CLIENT,
    payload,
  };
}