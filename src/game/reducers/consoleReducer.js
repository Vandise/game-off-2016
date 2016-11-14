import { ADD_CONSOLE_MESSAGE } from '../constants/actions';
const initialState = {};

export default (state = initialState, action) => {
  if (action.type === ADD_CONSOLE_MESSAGE) {
    const messages = state.messages.slice();
    messages.push({
      message: action.payload.message,
      type: action.payload.type,
    });
    return Object.assign({}, state, { messages });
  }
  return state;
};