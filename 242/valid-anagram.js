/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
    const resultTable = {}
    for(let char of s) {
        resultTable[char] = resultTable[char] === undefined ? 1 : resultTable[char] + 1
    }
    for(let char of t) {
        resultTable[char]--
    }

    return Object.values(resultTable).find(number => number !== 0) === undefined
}

console.log(isAnagram('anagram', 'nagaram')) //true

console.log(isAnagram('rat', 'car')) //false