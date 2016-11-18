import functions from './functions/index';

export default class Runtime {

  constructor(ast, store, addConsoleMessage) {
    this.ast = ast;
    this.store = store;
    this.addConsoleMessage = addConsoleMessage;
  }

  execute() {
    const context = {
      variables: {},
      functions,
    };
    if (this.ast != null) {
      this.ast.compile(this.store, this.addConsoleMessage, context).then((result) => {
        console.log('End Context', context);
        this.store.getState().client.systemResume();      
      });
    }
  }

}