/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
const validPath = function(n, edges, source, destination) {
    const stack = []
    const adjacencyList = {}
    const visited = new Set()

    for(let edge of edges) {
        if(!adjacencyList[edge[0]]) {
            adjacencyList[edge[0]] = [edge[1]]
        }
        else {
            adjacencyList[edge[0]] = [...adjacencyList[edge[0]], edge[1]]
        }
        if(!adjacencyList[edge[1]]) {
            adjacencyList[edge[1]] = [edge[0]]
        }
        else {
            adjacencyList[edge[1]] = [...adjacencyList[edge[1]], edge[0]]
        }
    }
    
    stack.push(source)

    while(stack.length !== 0) {
        const nextVisit = stack.shift()
        if(nextVisit === destination) return true
        if(!visited.has(nextVisit)) {
            visited.add(nextVisit)
            stack.push(...adjacencyList[nextVisit])
        }
    }
    return false
}

console.log(validPath(3, [[0,1], [1,2], [2,0]], 0, 2))
console.log(validPath(6, [[0,1],[0,2],[3,5],[5,4],[4,3]], 0, 5))