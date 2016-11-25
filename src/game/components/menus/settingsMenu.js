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

  setUserConfiguration(property, field, value) {
    this.props.client.setUserProperty(property, field, value);
    const state = {};
    state[property] = value;
    this.setState(state);
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
            <div>
              <label htmlFor='eventTiles'>
                Show Event Tiles: 
                <input
                  type='checkbox'
                  id='eventTiles'
                  checked={this.state.eventGroup}
                  onChange={() => this.setUserConfiguration('eventGroup', 'visible', this.state.eventGroup ? false : true)}
                />
              </label>
            </div>
            <div>
              <label htmlFor='systemGrid'>
                *Show System Grid: 
                <input
                  type='checkbox'
                  id='systemGrid'
                  checked={this.state.systemGrid}
                  onChange={() => this.setUserConfiguration('systemGrid', 'visible', this.state.systemGrid ? false : true)}
                />
              </label>
            </div>
            <div>
              <p>* Used for debugging purposes</p>
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