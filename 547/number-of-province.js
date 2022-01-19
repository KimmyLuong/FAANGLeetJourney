/**
 * @param {number[][]} isConnected
 * @return {number}
 */
const findCircleNum = function(isConnected) {
    const n = isConnected.length
    const root = Array.from(Array(n).keys())
    const rank = Array(n).fill(0)
    let count = n
    const find = (index) => {
        if (index === root[index]) {
            return index
        }
        return root[index] = find(root[index])
    }

    const union = (x, y) => {
        let rootX = find(x)
        let rootY = find(y)
        if(rootX !== rootY) {
            if(rank[rootX] > rank[rootY]) {
                root[rootY] = rootX
            }
            else if(rank[rootY] > rank[rootX]) {
                root[rootX] = rootY
            }
            else {
                root[rootY] = rootX
                rank[rootX] += 1
            }
            count--
        }
    }

    for(let row = 0; row < n; row++) {
        for(let col = row; col < isConnected[row].length; col++) {
            if(isConnected[row][col] === 1) {
                union(row, col)
            }
        }
    } 
    
    return count
    
}

console.log(findCircleNum([[1,1,0],[1,1,0],[0,0,1]])) //2


// # UnionFind class
// class UnionFind:
//     def __init__(self, size):
//         self.root = [i for i in range(size)]
//         # Use a rank array to record the height of each vertex, i.e., the "rank" of each vertex.
//         # The initial "rank" of each vertex is 1, because each of them is
//         # a standalone vertex with no connection to other vertices.
//         self.rank = [1] * size
//         self.count = size

//     # The find function here is the same as that in the disjoint set with path compression.
//     def find(self, x):
//         if x == self.root[x]:
//             return x
//         self.root[x] = self.find(self.root[x])
//         return self.root[x]

//     # The union function with union by rank
//     def union(self, x, y):
//         rootX = self.find(x)
//         rootY = self.find(y)
//         if rootX != rootY:
//             if self.rank[rootX] > self.rank[rootY]:
//                 self.root[rootY] = rootX
//             elif self.rank[rootX] < self.rank[rootY]:
//                 self.root[rootX] = rootY
//             else:
//                 self.root[rootY] = rootX
//                 self.rank[rootX] += 1
//             self.count -= 1

//     def getCount(self):
//         return self.count


// class Solution:
//     def findCircleNum(self, isConnected: List[List[int]]) -> int:
//         if not isConnected or len(isConnected) == 0:
//             return 0
//         n = len(isConnected)
//         uf = UnionFind(n)
//         for row in range(n):
//             for col in range(row + 1, n):
//                 if isConnected[row][col] == 1:
//                     uf.union(row, col)
//         return uf.getCount()