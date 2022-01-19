/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
const encode = function(strs) {
    const char = String.fromCharCode(257)
    return strs.join(char)
}

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
const decode = function(s) {
    let result = []
    let length = ''
    for(let index = 0; index < s.length; index++) {
        if(s[index] === '#') {
            const sliceLength = parseInt(length)
            result = [...result, s.slice(index+1, index+1+sliceLength)]
            index += sliceLength + 1
            length = ''
        }
        length = length.concat(s[index])

    }
    return result
}

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */

console.log(encode(['hello', 'world', 'word']))
console.log(decode('5#hello5#world4#word'))