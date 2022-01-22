/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
 var cloneGraph = function(node) {
  const resultMap = {}
  
  const traverse = (graph) => {
      if(!graph) return graph
      if(!resultMap[graph.val]) {
          resultMap[graph.val] = new Node(graph.val, [])
          resultMap[graph.val].neighbors = graph.neighbors.map(neighbor => 
              traverse(neighbor)
          )    
      }
      return resultMap[graph.val]
      
  }
 return traverse(node)
  
}