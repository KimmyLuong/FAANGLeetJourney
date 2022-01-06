/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const characterReplacement = function(s, k) {
    const repeatMap = new Map()
    let max = 0
    let leftPointer = 0
    
    for(let rightPointer = 0; rightPointer < s.length; rightPointer++) {
       const blah = repeatMap.get(s.charAt(rightPointer)) === undefined ? 1 : 1 + repeatMap.get(s.charAt(rightPointer))
       repeatMap.set(s.charAt(rightPointer), blah)
       while((rightPointer - leftPointer + 1) - Math.max(...repeatMap.values()) > k) {
            repeatMap.set(s.charAt(leftPointer), repeatMap.get(s.charAt(leftPointer))-1)
            leftPointer++
       }

       max = Math.max(max, rightPointer - leftPointer + 1)
    }

    return max
}

console.log(characterReplacement('ABAB', 2))

console.log(characterReplacement('AABABBA', 1))
