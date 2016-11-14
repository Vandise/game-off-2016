import { TOGGLE_MENU, CLOSE_ALL_MENUS } from '../constants/actions';
const initialState = {};

export default (state = initialState, action) => {
  if (action.type === TOGGLE_MENU) {
    const data = {};
    data[action.payload.menuName] = {
      open: action.payload.display,
    };
    return Object.assign({}, state, data);
  }

  if (action.type === CLOSE_ALL_MENUS) {
    const data = {};
    Object.keys(state).forEach( (key) => {
      data[key] = { open: false };
    });
    return data;
  }
  return state;
};