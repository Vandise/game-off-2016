import { ADD_CONSOLE_MESSAGE } from '../constants/actions';

export function addConsoleMessage(message, type = 0) {
  return {
    type: ADD_CONSOLE_MESSAGE,
    payload: {
      type,
      message,
    }
  };
};
