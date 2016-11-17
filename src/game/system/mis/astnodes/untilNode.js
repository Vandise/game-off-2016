export default class UntilNode {

  constructor(expressions, condition) {
    this.expressions = expressions;
    this.condition = condition;
  }

  compile(store, console, context) {
    return new Promise((resolve, reject) => {
      (function loop(n, s, con, c, i) {
        n.condition.compile(s, con, c).then((isComplete) => {
          if(!isComplete && i < 25) {
            n.expressions.compile(s, con, c).then((result) => {
              loop(n, s, con, c, i + 1);
            });
          } else {
            resolve(isComplete);
          }
        });
      })(this, store, console, context, 0);
    });
  }

}