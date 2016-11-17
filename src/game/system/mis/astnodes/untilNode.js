export default class UntilNode {

  constructor(expressions, condition) {
    this.expressions = expressions;
    this.condition = condition;
  }

  //
  // TODO: fix grammar to compile to getlocal
  //
  compile(store, console, context) {
    return new Promise((resolve, reject) => {
      (function loop(node, store, console, context, index){
        const condition = node.condition.compile(store, console, context);
        const expressions = node.expressions.compile(store, console, context);
        condition.then((isComplete) => {
          if (!isComplete && index < 25) {
            expressions.then((result) => {
              loop(node, store, console, context, index+1);
            });
          } else {
            resolve(`Until node compiled in ${index} cycles`);
          }
        });
      })(this, store, console, context, 0);
    });
  }

}