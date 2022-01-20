/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
const smallestStringWithSwaps = function(s, pairs) {
    const root = Array.from(Array(s.length).keys())
    const rank = Array(s.length).fill(0)
    const letterMap = {}

    const find = (x) => {
        if(x === root[x]){
            return x
        }
        return root[x] = find(root[x])
    }

    const union = (x,y) => {
        const rootX = find(x)
        const rootY = find(y)
        if(rootX !== rootY) {
            if(rank[rootX] > rank[rootY]) {
                root[rootY] = rootX
            }
            else if (rank[rootY] > rank[rootX]) {
                root[rootX] = rootY
            }
            else {
                root[rootY] = rootX
                rank[rootX] += 1
            }
        }
    }

    for(let pair of pairs) {
        union(pair[0], pair[1])
    }
    
    const sortedMap = Object.fromEntries(Object.entries(letterMap).map(entry => [entry[0], entry[1].sort((a,b) => b.localeCompare(a))]))
    for(let index = 0; index < root.length; index++) {
        const rootNode = find(index)
        const char = s[index]

        if(!letterMap[rootNode]) {
            letterMap[rootNode] = []
        }
        letterMap[rootNode].push(char)
    }

    Object.keys(letterMap).forEach((key) => {
        letterMap[key].sort()
    })
    let result = ''
    for(let rootNode of root) {
        result = result.concat(letterMap[rootNode].shift())
    }
    return result
}

console.log(smallestStringWithSwaps('dcab', [[0,3], [1,2]]))
console.log(smallestStringWithSwaps('dcab', [[0,3], [1,2], [0,2]]))