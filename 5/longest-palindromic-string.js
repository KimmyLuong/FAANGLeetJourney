/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function(s) {
    let palindrome = ''
    
    for(let index = 0; index < s.length; index ++) {
        let left = index
        let right = index
        while(left >= 0 && right < s.length && s[left] === s[right]) {
            const stringSlice = s.slice(left, right+1)
            if(s[left] === s[right] && stringSlice.length > palindrome.length) {
                palindrome = stringSlice
            } 
            left--
            right++
        }

        left = index
        right = index+1
        while(left >= 0 && right < s.length && s[left] === s[right]){
            const stringSlice = s.slice(left, right+1)
            if(s[left] === s[right] && stringSlice.length > palindrome.length) {
                palindrome = stringSlice
            } 
            left--
            right++
        }
    }
    

    return palindrome
}

console.log(longestPalindrome('ss'))
console.log(longestPalindrome('babad'))
console.log(longestPalindrome('cbbd'))
console.log(longestPalindrome('ac'))