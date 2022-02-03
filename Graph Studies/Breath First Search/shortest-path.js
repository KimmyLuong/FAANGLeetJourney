/**
 * @param {number[][]} grid
 * @return {number}
 */
 var shortestPathBinaryMatrix = function(grid) {
    const queue = []
    queue.unshift([0,0,1])
    if(grid[grid.length-1][grid[0].length-1] !== 0 || grid[0][0] !== 0) return -1
    if(grid.length === 1 && grid[0].length === 1) return 1
    
    grid[0][0] = 1
    const possibleMoves = [[-1, -1], [-1, 0], [0, -1], [1, 0], [0, 1], [1, 1], [-1, 1], [1, -1]]
    
    while(queue.length !== 0) {
        const coordinate = queue.pop()
            for(const move of possibleMoves) {
                const coordinate0 = coordinate[0] + move[0];
                const coordinate1 = coordinate[1] + move[1];
                if(coordinate0 >= 0 && coordinate1 >= 0 && coordinate0 < grid.length && coordinate1 < grid[0].length) {
                    if(grid[coordinate0][coordinate1] === 0) {
                        if(coordinate0 === grid.length -1 && coordinate1 === grid[0].length-1) return coordinate[2] + 1
                        queue.unshift([coordinate0, coordinate1, coordinate[2]+1])
                        grid[coordinate0][coordinate1] = coordinate[2] + 1
                    }
                }
            }
        
    }
    return -1
}

// console.log(shortestPathBinaryMatrix([[0,0,0],[1,1,0],[1,1,0]]))
console.log(shortestPathBinaryMatrix([[0,1,1,0,0,0],[0,1,0,1,1,0],[0,1,1,0,1,0],[0,0,0,1,1,0],[1,1,1,1,1,0],[1,1,1,1,1,0]])) //14