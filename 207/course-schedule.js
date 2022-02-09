/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = function(numCourses, prerequisites) {
    const visited = new Set()
    const adjacencyList = {}
    for(let index = 0; index < numCourses; index++){
        adjacencyList[index] = []
    }

    prerequisites.forEach(preReq => adjacencyList[preReq[0]] = [...adjacencyList[preReq[0]], preReq[1]])
    
    const dfs = (course) => {
        if(visited.has(course)) return false
        if(adjacencyList[course] === []) return true

        visited.add(course)
        for(let preReqs of adjacencyList[course]) {
            if(!dfs(preReqs)) return false
        }
        visited.delete(course)
        adjacencyList[course] = []
        return true
    }
    for(let index = 0; index < numCourses; index++) {
        if(!dfs(index)) return false
    }
    return true
}

console.log(canFinish(2, [[1, 0]]))