/**
 * @param {string} s
 * @return {number}
 */
 const numDecodings = function(s) {
    if(s.substring(0, 1) === '0') {
        return 0
    }

    const tabulationTable = Array(s.length + 1).fill(0)

    tabulationTable[0] = 1
    tabulationTable[1] = 1

    for(let index = 2; index <= s.length; index ++) {
        if(s.charAt(index) !== 0) {
            tabulationTable[index] = tabulationTable[index-1]
        }

        if((s.charAt(index-1) === 1 || s.charAt(index-1) === 2)) {
            tabulationTable[index] += tabulationTable[index-2]
        }
        console.log(tabulationTable)
    }

}
//Doesn't work requires revisit maybe later
// console.log(numDecodings('226'))
// console.log(numDecodings('2101'))
console.log(numDecodings('10011'))
// console.log(numDecodings('12'))
// console.log(numDecodings('10'))
// console.log(numDecodings('0006'))