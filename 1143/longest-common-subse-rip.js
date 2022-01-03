/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
const longestCommonSubsequence = function(text1, text2) {
    return helper(text1, text2, text1.length-1, text2.length-1)
}

const helper = (text1, text2, index1, index2, memo={}) => {
    if(index1 < 0 || index2 < 0) {
        return 0
    }
    const key = `${index1},${index2}`
    if(key in memo) {
        return memo[key]
    }
    let result 

    if(text1.charAt(index1) === text2.charAt(index2)) {
        result = helper(text1, text2, index1-1, index2-1, memo) + 1
    }
    else {
        result = Math.max(helper(text1, text2, index1-1, index2, memo), helper(text1, text2, index1, index2-1, memo))
    }
    memo[key]=result
    return result
}

console.log(longestCommonSubsequence("ylqpejqbalahwr", "yrkzavgdmdgtqpg"))