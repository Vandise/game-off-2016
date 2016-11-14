export default class GetLocalNode {

  constructor(variable) {
    this.variable = variable;
  }

  compile(store, console) {
    store.dispatch(console(`Compiling GetLocal Node: ${this.variable}`));
  }

}