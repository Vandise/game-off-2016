import React from 'react';
import { setMenu } from '../../actions/menuActions';

export default class SettingsMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.client.getUserConfiguration();
  }

  setCollisionBounds() {
    const status = this.state.showBounds ? false : true;
    this.setState({
      showBounds: status,
    });
    this.props.client.setCollisionBoundsVisibility(status);
  }

  render() {
    return (
      <div className='menu'>
        <div className='message-modal'>
          <div className='modal-header'>
            <h2>Game Settings</h2>
          </div>
          <div className='modal-body settings'>
            <div>
              <label htmlFor='showBounds'>
                Show Collision Bounds: 
                <input
                  type='checkbox'
                  id='showBounds'
                  checked={this.state.showBounds}
                  onChange={() => this.setCollisionBounds()}
                />
              </label>
            </div>
          </div>
          <div className='modal-footer'>
            <span className='button' onClick={ () => this.props.dispatch(setMenu('settingsMenu', false)) }>Close</span>
          </div>
        </div>
      </div>
    );
  }

}