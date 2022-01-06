/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
    const windowTracker = {}
    const windowCopy = {}
    for(let char of t) {
        windowTracker[char] = windowTracker[char] === undefined ? 1 : windowTracker[char] + 1
    }

    for(let char of t) {
        windowCopy[char] = 0
    }

    let result = ''
    let leftPointer = 0
    
    for(let rightPointer = 0; rightPointer <= s.length; rightPointer++) {
        while(compareMaps(windowTracker, windowCopy)) {
            const slice = s.slice(leftPointer, rightPointer)
            if(result === '') {
                result = slice
            }
            // console.log(s.slice(leftPointer, rightPointer))
            if(slice.length < result.length) {
                result = slice
            }
            if(windowCopy[s.charAt(leftPointer)] !== undefined) {
                windowCopy[s.charAt(leftPointer)] = windowCopy[s.charAt(leftPointer)] - 1
            }
            leftPointer++
        }
        if(windowCopy[s.charAt(rightPointer)] !== undefined) {
            windowCopy[s.charAt(rightPointer)] = windowCopy[s.charAt(rightPointer)] + 1
        }

    }


    return result
}

const compareMaps = (map1, map2) => {
    const keys1 = Object.keys(map1)
    const keys2 = Object.keys(map2)
    if(keys1.length !== keys2.length) {
        return false
    }

    for(let key of keys1) {
        if(map1[key] > map2[key]) {
            return false
        }
    }

    return true
}

console.log(minWindow('ADOBECODEBANC', 'ABC'))
// console.log(minWindow('ABAACBAB', 'ABC'))
