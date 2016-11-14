import React from 'react';

// eslint-disable-next-line no-unused-vars
import Styles from '../../../stylesheets/menus/mainMenu';

export default (props) => {
  return (
    <div className='menu'>
      <h1>Hackable Mi!</h1>
      <p>Teach Mi how to solve problems through code.</p>
      <div className='mainMenu'>
        <ul className='menuOptions'>
          <li>How to play</li>
          <li>Tutorial</li>
          <li>Playground</li>
          <li>About</li>
        </ul>
      </div>
    </div>
  );
};