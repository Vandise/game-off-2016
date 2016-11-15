import { UndefinedFunction } from '../runtime/exceptions/index';

export default class CallNode {

  constructor(name, parameters) {
    this.name = name;
    this.parameters = parameters;
  }

  compile(store, console, context) {
    //store.dispatch(console(`Compiling Call to ${this.name}`));
    const params = this.parameters.map((param) => {
      return param.compile(store, console, context);
    });
    if (context.functions[this.name]) {
      return context.functions[this.name](params, context, store, console);
    }
    store.dispatch(console(`Call to undefined function ${this.name}`));
    throw UndefinedFunction();
  }

}