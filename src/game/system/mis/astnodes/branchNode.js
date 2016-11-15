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

  compile(store, console, context) {
    //store.dispatch(console(`Compiling AST Branch: ${this.nodes.length} nodes`));

    // ensure all animations complete before jumping to the next
    (function loop(nodes, store, console, context, index){
      if (nodes.length != 0) {
        const node = nodes.shift();
        node.compile(store, console, context).then((result) => {
          loop(nodes, store, console, context, index+1);
        });
      }
      return true;
    })(this.nodes, store, console, context, 0);
  }

}