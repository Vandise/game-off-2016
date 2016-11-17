export default class OperatorNode {

  constructor(exp1, op, exp2) {
    this.exp1 = exp1;
    this.op = op;
    this.exp2 = exp2;
  }

  compile(store, console, context) {
    return new Promise((resolve, reject) => {
      const left = this.exp1.compile(store, console, context);
      const right = this.exp2.compile(store, console, context);
      left.then((leftVal) => {
        right.then((rightVal) => {
          let result = 0;
          switch(this.op){
            case '+':
              result = leftVal + rightVal;
              break;
            case '-':
              result = leftVal - rightVal;
              break;
            case '*':
              result = leftVal * rightVal;
              break;
            case '/':
              result = leftVal / rightVal;
              break;
            case '%':
              result = leftVal % rightVal;
              break;
            case '^':
              result = Math.pow(leftVal, rightVal);
              break;
          }
          resolve(Math.round(result));
        });
      });
    });
  }

}