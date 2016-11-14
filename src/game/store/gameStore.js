import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reducers from '../reducers/index';
import ClientMiddleware from '../middleware/clientMiddleware';

const initialState = {
  client: null,
  menu: {
    mainMenu: { open: false },
    aboutMenu: { open: false },
    codeMenu: { open: false }
  },
};

const reducers = combineReducers(Reducers);

export default (state = initialState) => {
  const store = createStore(reducers, state,
    applyMiddleware(thunk, ClientMiddleware())
  );
  store.subscribe(() => {
    
  });
  return store;  
};
