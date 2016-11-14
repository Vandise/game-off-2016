import React from 'react';
import { setMenu } from '../../actions/menuActions';
import { transitionGameState } from '../../actions/clientActions';

// eslint-disable-next-line no-unused-vars
import Styles from '../../../stylesheets/menus/mainMenu';

export default (props) => {
  return (
    <div className='menu'>
      <h1>Hackable Mi!</h1>
      <p>Guide Mi through timeless code and bugs</p>
      <div className='mainMenu'>
        <ul className='menuOptions'>
          <li>How to play</li>
          <li>Tutorial</li>
          <li onClick={ () => props.dispatch(transitionGameState('Playground')) }>Playground</li>
          <li onClick={ () => props.dispatch(setMenu('aboutMenu', true)) }>About</li>
        </ul>
      </div>
    </div>
  );
};