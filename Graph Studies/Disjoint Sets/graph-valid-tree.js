/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
const validTree = function(n, edges) {
    if(edges.length !== n-1) return false
    const root = Array.from(Array(n).keys())
    const find = (x) => {
        while(x !== root[x]) {
            x = root[x]
        }
        return x
    }

    const union = (x, y) => {
        rootX = find(x)
        rootY = find(y)
        if(rootX === rootY) return false
        if(rootX !== rootY) {
            if(root[rootY] !== rootY) {
                console.log('yay')
            }
            root[rootY] = rootX
        }

        return true
    }

    for( let edge of edges) {
        const a = edge[0]
        const b = edge[1]

        if(!union(a,b)) return false
    }

    return true
}

// console.log(validTree(5, [[0,1],[0,2],[0,3],[1,4]]))
console.log(validTree(5, [[0,1],[1,2],[2,3],[1,3],[1,4]]))

// 0 0 1 2 4