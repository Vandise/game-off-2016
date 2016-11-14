import React from 'react';

// eslint-disable-next-line no-unused-vars
import Styles from '../../../stylesheets/menus/codeMenu';

export default class extends React.Component {

  constructor(props) {
    super(props);
    this.handleTabs = this.handleTabs.bind(this);
  }

  handleTabs(e) {
    const tabKey = 9;
    if (e.keyCode === tabKey) {
      let reference = this.refs.miCode;
      let val = reference.value,
          start = reference.selectionStart,
          end = reference.selectionEnd;
      this.refs.miCode.value = val.substring(0, start) + '  ' + val.substring(end);
      this.refs.miCode.selectionStart = this.refs.miCode.selectionEnd = start + 2;
      e.preventDefault();
      return false;
    }
  }

  render() {
    return (
      <div className='codeMenu'>
        <div className='header'>
          <h3>Code</h3>
        </div>
        <div className='codeBody'>
          <textarea className='miCode' ref='miCode' onKeyDown={(e) => this.handleTabs(e) }></textarea>
        </div>
        <div className='codeFooter'>
          <span className='button'>Run</span>
          <span className='button'>Clear</span>
        </div>
      </div>
    );
  }

};