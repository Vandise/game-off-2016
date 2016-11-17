import * as e from '../runtime/exceptions/index';

export default class GetLocalNode {

  constructor(variable) {
    this.variable = variable;
  }

  compile(store, console, context) {
    //store.dispatch(console(`Compiling GetLocal Node: ${this.variable}`));
    return new Promise((resolve, reject) => {
      if (Object.keys(context.variables).indexOf(this.variable) < 0) {
        reject(e.UndefinedVariable(this.variable));
      }
      resolve(context.variables[this.variable]);
    });
  }

}