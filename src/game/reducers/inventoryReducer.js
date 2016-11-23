import { ADD_ITEM, USE_ITEM } from '../constants/actions';

const initialState = {};

export default (state = initialState, action) => {
  if (action.type === ADD_ITEM) {
    return action.payload;
  }
  if (action.type === USE_ITEM) {
    return null;
  }
  return state;
};