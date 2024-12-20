/*
 * @lc app=leetcode id=1436 lang=javascript
 *
 * [1436] Destination City
 *
 * https://leetcode.com/problems/destination-city/description/
 *
 * algorithms
 * Easy (79.52%)
 * Likes:    2233
 * Dislikes: 105
 * Total Accepted:    286.6K
 * Total Submissions: 360.6K
 * Testcase Example:  '[["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]'
 *
 * You are given the array paths, where paths[i] = [cityAi, cityBi] means there
 * exists a direct path going from cityAi to cityBi. Return the destination
 * city, that is, the city without any path outgoing to another city.
 *
 * It is guaranteed that the graph of paths forms a line without any loop,
 * therefore, there will be exactly one destination city.
 *
 *
 * Example 1:
 *
 *
 * Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao
 * Paulo"]]
 * Output: "Sao Paulo"
 * Explanation: Starting at "London" city you will reach "Sao Paulo" city which
 * is the destination city. Your trip consist of: "London" -> "New York" ->
 * "Lima" -> "Sao Paulo".
 *
 *
 * Example 2:
 *
 *
 * Input: paths = [["B","C"],["D","B"],["C","A"]]
 * Output: "A"
 * Explanation: All possible trips are: 
 * "D" -> "B" -> "C" -> "A". 
 * "B" -> "C" -> "A". 
 * "C" -> "A". 
 * "A". 
 * Clearly the destination city is "A".
 *
 *
 * Example 3:
 *
 *
 * Input: paths = [["A","Z"]]
 * Output: "Z"
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= paths.length <= 100
 * paths[i].length == 2
 * 1 <= cityAi.length, cityBi.length <= 10
 * cityAi != cityBi
 * All strings consist of lowercase and uppercase English letters and the space
 * character.
 *
 *
 */

// @lc code=start
/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
  const map = Object.create(null)

  for (let i = 0; i < paths.length; i++) {
    const [from, to] = paths[i]

    if (map[from] === undefined) {
      map[from] = 0
    }

    if (map[to] === undefined) {
      map[to] = 0
    }

    map[from] += 2
    map[to] += 1
  }

  for (const city in map) {
    if (map[city] === 1) {
      return city
    }
  }
};
// @lc code=end
