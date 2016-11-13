import { createStore, combineReducers } from 'redux';
import Reducers from '../reducers/index';

const initialState = {
  client: null,
};

const reducers = combineReducers(Reducers);

export default (state = initialState) => {
  const store = createStore(reducers, state);
  store.subscribe(() => {
    
  });
  return store;  
};
