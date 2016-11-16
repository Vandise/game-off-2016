import { EXECUTE_CODE, TERMINATE_CODE } from '../constants/actions';

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