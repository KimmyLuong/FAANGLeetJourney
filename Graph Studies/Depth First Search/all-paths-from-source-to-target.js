/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
const allPathsSourceTarget = function(graph) {
    const paths = []

    if(graph === undefined || graph.length === 0) {
        return paths
    }

    const dfs = (node, path) => {
        path.push(node)
        if(node == graph.length - 1) {
            paths.push([...path])
            return
        }
        const nextPaths = graph[node]
        for(let nextPath of nextPaths) {
            dfs(nextPath, [...path])
        }
    }

    dfs(0, [])
    return paths
}



console.log(allPathsSourceTarget([[1,2],[3],[3],[]]))