/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    const charSet = new Set()
    let max = 0
    let leftPointer = 0
   
    for(let rightPointer = 0; rightPointer < s.length; rightPointer++) {
        // console.log('set', charSet)
        // console.log('char', s.charAt(rightPointer))
        
        while(charSet.has(s.charAt(rightPointer))) {
            charSet.delete(s.charAt(leftPointer))
            leftPointer += 1
        }
        console.log('set', charSet)
        charSet.add(s.charAt(rightPointer))
        console.log('set after', charSet)
        max = Math.max(max, rightPointer - leftPointer + 1)
    }

    return max
};

// console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring('bbbb'))
// console.log(lengthOfLongestSubstring('pwwkew'))
// console.log(lengthOfLongestSubstring('dvdf'))
