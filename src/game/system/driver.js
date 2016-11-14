import { SYSTEM_LANGUAGE } from '../constants/system';

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
      parser.parse(lexer);
      return true;
    }
    return false;    
  }

}
