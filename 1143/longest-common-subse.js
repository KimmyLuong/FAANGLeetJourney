/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
const longestCommonSubsequence = function(text1, text2, result=0) {
    const originalText1 = text1
    const char = text2.slice(0,1)
    const restChar = text2.slice(1, text2.length)
    let max = 0
    if(char.length === 0) {
        return result
    }
    const splitResult = text1.split(char)
    console.log(splitResult)
    console.log(char)
    if(splitResult.length !== 1) {
        result++
        if(result > max) {
            max = result
        }

        return longestCommonSubsequence(splitResult[1], restChar, result)
    }

    else {
        result = 0
        console.log('hi', text1)
        return longestCommonSubsequence(text1, restChar, result)
    }
}


console.log(longestCommonSubsequence("oxcpqrsvwf", "shmtulqrypy"))