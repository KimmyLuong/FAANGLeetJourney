
  // Definition for a Node.
function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
}
 

/**
 * @param {Node} node
 * @return {Node}
 */
 var cloneGraph = function(node) {
    console.log(node.val)
};

console.log(cloneGraph([[2,4],[1,3],[2,4],[1,3]]))