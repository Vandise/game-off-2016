import { TOGGLE_MENU } from '../constants/actions';

export function setMenu(menuName, display) {
  return {
    type: TOGGLE_MENU,
    payload: {
      menuName,
      display,
    }
  };
};