/**
 * @param {number[][]} grid
 * @return {number}
 */
 var orangesRotting = function(grid) {
    let freshOrange = 0
    let queue = []
    let time = 0

    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid[row].length; col++) {
            if(grid[row][col] === 2) {
                queue.unshift([row, col])
            }
            else if(grid[row][col] === 1) {
                freshOrange++
            }
        }
    }
    if(freshOrange === 0) return 0
    const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]]
    while(queue.length !== 0) {
        const depth = queue.length
        time++
        for(let index = 0; index < depth; index++) {
            const orange = queue.pop()
            for(let direction of directions) {
                const direction1 = orange[0] + direction[0]
                const direction2 = orange[1] + direction[1]
                if(direction1 >= 0 && direction1 < grid.length && direction2 >= 0 && direction2 < grid[0].length) {
                    
                    if(grid[direction1][direction2] === 1) {
                        grid[direction1][direction2] = 2
                        queue.unshift([direction1, direction2])
                        freshOrange--
                    }
                }
            }
        }
        if(freshOrange === 0) return time

    }

    return -1
}

console.log(orangesRotting([[2,1,1],[1,1,0],[0,1,1]]))