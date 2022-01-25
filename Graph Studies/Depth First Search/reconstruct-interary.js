/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
const findItinerary = function(tickets) {
    const ticketMap = {}
    const stack = []
    const result = []
    tickets.forEach(ticket => {
        if(!ticketMap[ticket[0]]) {
            ticketMap[ticket[0]] = [ticket[1]]
        }
        else {
            ticketMap[ticket[0]] = [...ticketMap[ticket[0]], ticket[1]]
        }
    })
    Object.keys(ticketMap).forEach(key => ticketMap[key].sort())
    const dfs = (node) => {
        console.log(ticketMap)
        console.log(result)
        while(ticketMap[node] && ticketMap[node].length > 0) {
            dfs(ticketMap[node].shift())
        }
        result.unshift(node)
    }
    dfs('JFK')
    return result
}

// console.log(findItinerary([["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]])) //["JFK","MUC","LHR","SFO","SJC"]
// console.log(findItinerary([["JFK","SFO"],["JFK","ATL"], ["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]])) //["JFK","ATL","JFK","SFO","ATL","SFO"]
console.log(findItinerary([["JFK","KUL"],["JFK","NRT"],["NRT","JFK"]])) //["JFK","ATL","JFK","SFO","ATL","SFO"]