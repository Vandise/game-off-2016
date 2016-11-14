import { TOGGLE_MENU, CLOSE_ALL_MENUS } from '../constants/actions';

export function setMenu(menuName, display) {
  return {
    type: TOGGLE_MENU,
    payload: {
      menuName,
      display,
    }
  };
};

export function closeAllMenus() {
  return {
    type: CLOSE_ALL_MENUS,
  };
}