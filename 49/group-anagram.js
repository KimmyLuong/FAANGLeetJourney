/**
 * 
 * @param {string[]} strs 
 * @returns {string[][]}
 */
const groupAnagrams = (strs) => {
    const map = {}

    for(let word of strs) {
        const sortedWord = word.split('').sort()
        if(map[sortedWord]) {
            map[sortedWord] = [...map[sortedWord], word]
        }
        else {
            map[sortedWord] = [word]
        }
    }

    return Object.values(map)
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"])) // [["bat"],["nat","tan"],["ate","eat","tea"]]