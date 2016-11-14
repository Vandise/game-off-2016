import { EXECUTE_CODE } from '../constants/actions';

export function executeCode(code) {
  return {
    type: EXECUTE_CODE,
    payload: {
      code,
    }
  };
};