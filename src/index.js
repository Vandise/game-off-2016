import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// eslint-disable-next-line no-unused-vars
import Styles from './stylesheets/main.scss';

const el = document.getElementById('main');

ReactDOM.render(
  <Provider store={ null }>
    <div className="wrapper" id="gameContainer">
      <p>Hello Game World!</p>
    </div>
  </Provider>,
  el
);
