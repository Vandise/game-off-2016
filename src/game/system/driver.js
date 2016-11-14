import { SYSTEM_LANGUAGE } from '../constants/system';

const Lexer = require(`./${SYSTEM_LANGUAGE}/lexer`);

export default class SystemDriver {

  constructor(codeText, store) {
    this.codeText = codeText;
    this.store = store;
  }

  evaluate() {
    if (this.codeText != null && this.codeText.length > 0) {
      return true;
    }
    return false;    
  }

}
