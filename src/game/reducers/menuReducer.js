import { TOGGLE_MENU } from '../constants/actions';
const initialState = {};

export default (state = initialState, action) => {
  if (action.type === TOGGLE_MENU) {
    const data = {};
    data[action.payload.menuName] = {
      open: action.payload.display,
    };
    return Object.assign({}, state, data);
  }
  return state;
};