import React from 'react';
import { executeCode } from '../../actions/playerActions';

// eslint-disable-next-line no-unused-vars
import Styles from '../../../stylesheets/menus/codeMenu';

export default class extends React.Component {

  constructor(props) {
    super(props);
    this.handleTabs = this.handleTabs.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.runCode = this.runCode.bind(this);
  }

  handleTabs(e) {
    const tabKey = 9;
    if (e.keyCode === tabKey) {
      const reference = this.refs.miCode;
      let val = reference.value,
          start = reference.selectionStart,
          end = reference.selectionEnd;
      this.refs.miCode.value = val.substring(0, start) + '  ' + val.substring(end);
      this.refs.miCode.selectionStart = this.refs.miCode.selectionEnd = start + 2;
      e.preventDefault();
      return false;
    }
  }

  runCode() {
    const code = this.refs.miCode.value;
    this.props.dispatch(executeCode(code));
  }

  clearForm() {
    this.refs.miCode.value = '';
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
          <span className='button' onClick={() => this.runCode() }>Run</span>
          <span className='button'>Terminate</span>
          <span className='button' onClick={() => this.clearForm() }>Clear</span>
        </div>
      </div>
    );
  }

};