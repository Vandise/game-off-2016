import React from 'react';
import { connect } from 'react-redux';
import menuList from '../components/menus/index';

export function menuContainer({ dispatch, state }) {
  return (
    <div className='menuContainer'>
      {Object.keys(menuList).map((menu) => {
        const Component = menuList[menu];
        if (state.menu[menu] && state.menu[menu].open) {
          return ( <Component dispatch={dispatch} {...state} key={menu} /> );
        }
        return null;
      })}
    </div>
  );
}

menuContainer.propTypes = {
  dispatch: React.PropTypes.func,
  menus: React.PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    state
  };
};

export default connect(mapStateToProps)(menuContainer);