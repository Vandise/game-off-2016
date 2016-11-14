export default class LiteralNode {

  constructor(value) {
    this.value = value;
  }

  compile() {
    return this.value;   
  }

}