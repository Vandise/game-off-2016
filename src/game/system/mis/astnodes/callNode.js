export default class CallNode {

  constructor(name, parameters) {
    this.name = name;
    this.parameters = parameters;
  }

  compile(store, console) {
    store.dispatch(console(`Compiling Call to ${this.name}`));
    this.parameters.forEach((param) => {
      param.compile(store, console);
    });
  }

}