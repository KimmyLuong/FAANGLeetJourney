const gridTraveler = (m,n) => {
    const travelGrid = Array(m + 1).fill().map(() => Array(n+1).fill(0))
    travelGrid[1][1] = 1
    for(let y = 0; y <= m; y++) {
        for(let x=0; x <= n; x++) {
            const current = travelGrid[y][x]
            if(x+1 <=n){ 
                // console.log('x value:', x)
                // console.log('n value:', n)
                travelGrid[y][x+1] += current
            }
            if(y+1 <=m){ 
                // console.log('current', current)
                // console.log('huh', travelGrid[y+1][x])
                travelGrid[y+1][x] += current 
            }
        }
    }
    return travelGrid[m][n]

}

console.log(gridTraveler(3,3))

// 0 0 0
// 0 1 1
// 0 1 0