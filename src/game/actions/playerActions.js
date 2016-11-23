import { EXECUTE_CODE, TERMINATE_CODE, ADD_ITEM, USE_ITEM } from '../constants/actions';

export function executeCode(code) {
  return {
    type: EXECUTE_CODE,
    payload: {
      code,
    }
  };
};

export function terminateCode(hault = true) {
  return {
    type: TERMINATE_CODE,
    payload: {
      status: hault,
    },
  };
};

export function addItem(itemObj) {
  return {
    type: ADD_ITEM,
    payload: itemObj,
  };
};

export function useItem() {
  return {
    type: USE_ITEM,
    payload: {},
  };
};