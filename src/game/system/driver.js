import { SYSTEM_LANGUAGE } from '../constants/system';
import { addConsoleMessage } from '../actions/consoleActions';

const Lexer = require(`./${SYSTEM_LANGUAGE}/lexer`);
const Parser = require(`./${SYSTEM_LANGUAGE}/parser`);
const nodes = require(`./${SYSTEM_LANGUAGE}/astnodes/index`).default;
const Runtime = require(`./${SYSTEM_LANGUAGE}/runtime/index`).default;

export default class SystemDriver {

  constructor(codeText, store) {
    this.codeText = codeText;
    this.store = store;
  }

  compile() {
    if (this.codeText != null && this.codeText.length > 0) {
      let ast = null;
      const lexer = new Lexer();
      const parser = new Parser({
        ast: nodes,
      });

      let code = "";
      const data = this.codeText.split('\n');     // there's a bug in the parser with whitespace.
      data.forEach((line) => {
        if(line === '') return;
        code += line.replace(/^[ ]+|[ ]+$/g,'');
        code += "\n";        
      });
      lexer.setInput(code);

      try {
        ast = parser.parse(lexer);
      } catch(e) {
        this.store.dispatch(addConsoleMessage(e.message));
      }

      console.log(ast);

      try {      
        (new Runtime(ast, this.store, addConsoleMessage).execute());
      } catch(e) {
        this.store.dispatch(addConsoleMessage(e.message));
      }
    }
    return false;    
  }

}
