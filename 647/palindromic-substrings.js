/**
 * @param {string} s
 * @return {number}
 */
const countSubstrings = function(s) {
    let subtringCount = 0
    let palinResults = []
    for(let index = 0; index < s.length; index++) {
        let left = index
        let right = index
        while(left >= 0 && right < s.length && s[left] === s[right]) {
            subtringCount++
            palinResults.push(s.slice(left, right+1))
            left--
            right++
        }

        left = index
        right = index+1
        while(left >= 0 && right < s.length && s[left] === s[right]) {
            subtringCount++
            palinResults.push(s.slice(left, right+1))
            left--
            right++
        }
    }
    console.log(palinResults)
    return subtringCount
}

console.log(countSubstrings('aaaa'))
console.log(countSubstrings('abc'))