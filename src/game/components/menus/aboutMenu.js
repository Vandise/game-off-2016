import React from 'react';
import { setMenu } from '../../actions/menuActions';

export default (props) => {
  return (
    <div className='menu'>
      <div className='message-modal'>
        <div className='modal-header'>
          <h2 className='pixeled'>HackableMi</h2>
        </div>
        <div className='modal-body'>
          <p>By Benjamin J. Anderson. Published under MIT license.</p>
          <p>Art retrieved from Open Game Art.</p>
          <p>Music published under Creative Commons by Eric Skiff (ericskiff.com)</p>
        </div>
        <div className='modal-footer'>
          <span className='button' onClick={ () => props.dispatch(setMenu('aboutMenu', false)) }>Close</span>
        </div>
      </div>
    </div>
  );
};