import React from 'react';
import { connect } from 'react-redux';
import { initializeClient } from '../actions/clientActions';

export function gameHandler({ dispatch, client }) {
  if (client != null && !client.isInitialized) {
    client.initialize();
  } else {
    dispatch(initializeClient(dispatch));
  }
  return null;
}

gameHandler.propTypes = {
  dispatch: React.PropTypes.func,
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(gameHandler);