import React from 'react';
import { setMenu } from '../../actions/menuActions';

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
          <li onClick={ () => props.dispatch(setMenu('aboutMenu', true)) }>About</li>
        </ul>
      </div>
    </div>
  );
};