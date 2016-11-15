export default class LoopNode {

  constructor(expressions, condition) {
    this.expressions = expressions;
    this.condition = condition;
  }

  compile(store, console) {
    store.dispatch(console(`Compiling Loop Node`));
    this.condition.compile(store, console);
    this.expressions.compile(store, console);
  }

}