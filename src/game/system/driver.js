import { SYSTEM_LANGUAGE } from '../constants/system';
import { addConsoleMessage } from '../actions/consoleActions';

const Lexer = require(`./${SYSTEM_LANGUAGE}/lexer`);
const Parser = require(`./${SYSTEM_LANGUAGE}/parser`);
const nodes = require(`./${SYSTEM_LANGUAGE}/astnodes/index`).default;

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

      let ast = null;
      const lexer = new Lexer();
      const parser = new Parser({
        ast: nodes,
      });

      lexer.setInput(this.codeText);

      try {
        ast = parser.parse(lexer);
      } catch(e) {
        this.store.dispatch(addConsoleMessage(e.message));
      }

      console.log(this.codeText);
      console.log(ast);

      if (ast != null) {
        ast.forEach((node) => {
          node.compile(this.store, addConsoleMessage);
        });
      }
      return true;
    }
    return false;    
  }

}
