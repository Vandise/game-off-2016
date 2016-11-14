import { SYSTEM_LANGUAGE } from '../constants/system';
import { addConsoleMessage } from '../actions/consoleActions';

const Lexer = require(`./${SYSTEM_LANGUAGE}/lexer`);
const Parser = require(`./${SYSTEM_LANGUAGE}/parser`);

export default class SystemDriver {

  constructor(codeText, store) {
    this.codeText = codeText;
    this.store = store;
  }

  compile() {
    if (this.codeText != null && this.codeText.length > 0) {
      const context = {
        variables: {},
      };
      console.log(this.codeText);
      const lexer = new Lexer();
      const parser = new Parser();
      lexer.setInput(this.codeText);
      try {
        parser.parse(lexer);
      } catch(e) {
        this.store.dispatch(addConsoleMessage(e.message));
      }
      return true;
    }
    return false;    
  }

}
