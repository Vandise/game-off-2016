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
    return new Promise((resolve, reject) => {
      (function loop(branch, store, console, context, index) {
        if (index < branch.nodes.length && !store.getState().client.isTerminated()) {
          const node = branch.nodes[index];
          const p = node.compile(store, console, context);
          window.console.log('Branch node compiled node', node, p);
          p.then((result) => {
            if (index === branch.nodes.length - 1) {
              resolve(branch);
            } else {
              loop(branch, store, console, context, index+1);
            }
          }).catch((err) => {
            store.getState().client.systemTerminate(true);
            store.dispatch(console(`${err.name}: ${err.message}`));
          });
        }
        if (store.getState().client.isTerminated()) {
          store.dispatch(console('System Terminated by user'));
        }
      })(this, store, console, context, 0);
    });
  }

}