export default class LiteralNode {

  constructor(value) {
    this.value = value;
  }

  compile(store, console, context) {
    //store.dispatch(console(`Compiling literal value: ${this.value}`));
    return this.value;
  }

}