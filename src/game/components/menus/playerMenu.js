import React from 'react';

// eslint-disable-next-line no-unused-vars
import Styles from '../../../stylesheets/menus/playerMenu';

export default (props) => {
  return (
    <div className='playerMenu'>
      <div className='header'>
        <h3>Player</h3>
      </div>
      <div className='data'>
        <div className='itemContainer'>
          <div className='sectionLabel'>Inventory</div>
          <div className='itemSlot'></div>
        </div>
        <div className='gameData'>
          <div className='sectionLabel'>Metrics</div>
        </div>
      </div>
    </div>
  );
};