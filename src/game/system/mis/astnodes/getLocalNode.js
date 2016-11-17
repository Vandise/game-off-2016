import * as e from '../runtime/exceptions/index';

export default class GetLocalNode {

  constructor(variable) {
    this.variable = variable;
  }

  compile(store, console, context) {
    //store.dispatch(console(`Compiling GetLocal Node: ${this.variable}`));
    return new Promise((resolve, reject) => {
      if (!context.variables[this.variable]) {
        reject(e.UndefinedVariable(this.variable));
      }
      resolve(context.variables[this.variable]);
    });
  }

}