export default class LiteralNode {

  constructor(value) {
    this.value = value;
  }

  compile(store, console) {
    store.dispatch(console(`Compiling literal value: ${this.value}`)); 
  }

}