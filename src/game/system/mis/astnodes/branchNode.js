export default class BranchNode {

  constructor(nodes) {
    this.nodes = nodes;    
  }

  pushNode(node) {
    this.nodes.push(node);
  }

  pushNodes(nodes) {
    this.nodes = this.nodes.concat(nodes);    
  }

  compile(store, console) {
    store.dispatch(console(`Compiling AST Branch: ${this.nodes.length} nodes`));
    this.nodes.forEach((node) => {
      node.compile(store, console);
    });
  }

}