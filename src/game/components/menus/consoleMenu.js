import React from 'react';

// eslint-disable-next-line no-unused-vars
import Styles from '../../../stylesheets/menus/consoleMenu';

export default (props) => {
  const messages = props.console.messages;
  messages.reverse();
  return (
    <div className='consoleMenu'>
      <div className='header'>
        <h3>Console</h3>
      </div>
      <div className='consoleBody'>
        <ul className='messages'>
          {messages.map((msg, index) => {
            return (
              <li key={index} className={index % 2 === 0 ? 'even' : 'odd'}>
                {msg.message}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};