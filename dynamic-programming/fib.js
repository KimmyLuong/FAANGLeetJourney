

//unoptimized
// const fib = (n) => {
//     if (n <= 2) return 1
//     return fib(n-2) + fib(n-1)
// }

//memoized
const fib = (n, memo = {}) => {
    if(n in memo) return memo[n]
    if (n <= 2) return 1
    memo[n] = fib(n-2, memo) + fib(n-1, memo)
    return memo[n]
}



console.log(fib(100))