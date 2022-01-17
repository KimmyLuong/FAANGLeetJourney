/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    const cleanedString = s.toLowerCase().replace(/[^A-Za-z0-9]/g, '')
    let leftPointer = 0
    let rightPointer = cleanedString.length-1
   
    while(leftPointer < rightPointer) {
        if(cleanedString[leftPointer] !== cleanedString[rightPointer]) return false    
        
        leftPointer++
        rightPointer--
    }
    
    return true
};