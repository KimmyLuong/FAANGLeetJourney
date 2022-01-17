/**
 * 
 * @param {string} s 
 */
const isValid = (s) => {
    const parenthesesStack = []
    const map = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }
    for(let char of s){
        if(char === '(' || char === '{' || char === '[') {
            parenthesesStack.push(char)
        }
        else {
            if(map[parenthesesStack.pop()] !== char) return false
        }
    }
    return parenthesesStack.length === 0
}

console.log(isValid('()'))
console.log(isValid('(]'))
console.log(isValid('['))
console.log(isValid('()[]{}'))