import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import GameStore from './game/store/gameStore';
import GameContainer from './game/containers/gameContainer';
import MenuContainer from './game/containers/menuContainer';

// eslint-disable-next-line no-unused-vars
import Styles from './stylesheets/main.scss';

const el = document.getElementById('main');
const store = GameStore();

ReactDOM.render(
  <Provider store={ store }>
    <div className="wrapper" id="gameContainer">
      <MenuContainer />
      <GameContainer />
    </div>
  </Provider>,
  el
);
