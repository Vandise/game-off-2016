export default class IfNode {

  constructor(conditional, body) {
    this.conditional = conditional;
    this.body = body;
  }

  compile(store, console, context) {
    //store.dispatch(console(`Compiling If Node`));
    return this.conditional.compile(store, console, context).then((result) => {
      if (result) {
        return this.body.compile(store, console, context);
      }
      //
      // TODO:
      //  else clause support
      return new Promise((resolve, reject) => {
        resolve('Conditional is false');
      });
    });
  }

}