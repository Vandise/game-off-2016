import { INITIALIZE_CLIENT } from '../constants/actions';

const initialState = {};

export default (state = initialState, action) => {
  if (action.type === INITIALIZE_CLIENT) {
    const Client = action.payload.client;
    return new Client(action.payload.dispatch);
  }
  return state;
};