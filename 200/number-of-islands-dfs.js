/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    let res = 0
    const dfs = (grid, row, column) => {
        
        if(grid[row][column] === '0') return
        
        grid[row][column] = '0'
        if(row + 1 < grid.length){
            dfs(grid, row + 1, column)    
        }
        if(row - 1 >= 0) {
            dfs(grid, row - 1, column)    
        }
        if(column + 1 < grid[0].length) {
            dfs(grid, row, column + 1)    
        }
        if(column - 1 >= 0) {
            dfs(grid, row, column - 1)    
        }
        
    }
    
    for(let row = 0; row < grid.length; row++) {
        for(let column = 0; column < grid[0].length; column++) {
            if(grid[row][column] === '1') {
                
                dfs(grid, row, column)
                res++
            }
        }
    }
    
    return res
};