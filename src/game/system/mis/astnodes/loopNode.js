export default class LoopNode {

  constructor(expressions, condition) {
    this.expressions = expressions;
    this.condition = condition;
  }

  compile(store, console, context) {
    //store.dispatch(console(`Compiling Loop Node`));
    this.condition.compile(store, console, context);
    this.expressions.compile(store, console, context);
  }

}