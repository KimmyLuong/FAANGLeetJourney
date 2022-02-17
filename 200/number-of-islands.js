/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function(grid) {
    const queue = []
    const possibleMoves = [[0, 1], [1, 0], [-1, 0], [0, -1]]
    let res = 0
    for(let row = 0; row < grid.length; row++) {
        for(let column = 0; column < grid[0].length; column++) {
            if(grid[row][column] === '1') {
                queue.push([row, column])
                res++
                while(queue.length > 0) {
                    const nodeToVisit = queue.pop()
                    grid[nodeToVisit[0]][nodeToVisit[1]] = '0'
                    for(let move of possibleMoves) {
                        const moveRow = nodeToVisit[0] + move[0]
                        const moveColumn = nodeToVisit[1] + move[1]
                        if(moveRow >= 0 && moveRow < grid.length && moveColumn >= 0 && moveColumn < grid[0].length && grid[moveRow][moveColumn] === '1') {
                            queue.push([moveRow, moveColumn])
                        }
                    }
                }
            }
        }
    }

    return res
}

console.log(numIslands(
    [
        ["1","1","1","1","0"],
        ["1","1","0","1","0"],
        ["1","1","0","0","0"],
        ["0","0","0","0","0"]
    ]
)) //1

console.log(numIslands(
    [
        ["1","1","0","0","0"],
        ["1","1","0","0","0"],
        ["0","0","1","0","0"],
        ["0","0","0","1","1"]
    ]
)) //3