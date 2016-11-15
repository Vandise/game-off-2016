export default class IfNode {

  constructor(contidional, body) {
    this.contidional = contidional;
    this.body = body;
  }

  compile(store, console, context) {
    //store.dispatch(console(`Compiling If Node`));
  }

}