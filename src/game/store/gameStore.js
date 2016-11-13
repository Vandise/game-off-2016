import { createStore, combineReducers } from 'redux';

const initialState = {

};

const reducers = () => {};

export default (state = initialState) => {
  const store = createStore(reducers, state);
  store.subscribe(() => {
    
  });
  return store;  
};
