/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = function(n) {
    let offset = 1
    let res = [0]
    for(let i = 1; i <= n; i++) {
        if(i === offset*2){
            offset*=2
        }
        const calc = 1 + res[i-offset]
        res.push(calc)
    }
    return res
}

console.log(countBits(5))