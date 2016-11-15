export default class AssignmentNode {

  constructor(variable, expression) {
    this.variable = variable;
    this.expression = expression;
  }

  compile(store, console, context) {
    //store.dispatch(console(`Compiling Assignment Node: ${this.variable}`));
    this.expression.compile(store, console);
  }

}