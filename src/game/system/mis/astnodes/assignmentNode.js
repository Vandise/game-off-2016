export default class AssignmentNode {

  constructor(variable, expression) {
    this.variable = variable;
    this.expression = expression;
  }

  compile(store, console, context) {
    //store.dispatch(console(`Compiling assign node ${this.variable}`));
    return this.expression.compile(store, console).then((expval) => {
      return new Promise((resolve, reject) => {
        context.variables[this.variable] = expval;
        resolve('Assignment Compiled');
      });
    });
  }

}