/*
 * @lc app=leetcode id=1496 lang=javascript
 *
 * [1496] Path Crossing
 *
 * https://leetcode.com/problems/path-crossing/description/
 *
 * algorithms
 * Easy (62.51%)
 * Likes:    1489
 * Dislikes: 46
 * Total Accepted:    171.5K
 * Total Submissions: 274.6K
 * Testcase Example:  '"NES"'
 *
 * Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing
 * moving one unit north, south, east, or west, respectively. You start at the
 * origin (0, 0) on a 2D plane and walk on the path specified by path.
 *
 * Return true if the path crosses itself at any point, that is, if at any time
 * you are on a location you have previously visited. Return false
 * otherwise.
 *
 *
 * Example 1:
 *
 *
 * Input: path = "NES"
 * Output: false
 * Explanation: Notice that the path doesn't cross any point more than once.
 *
 *
 * Example 2:
 *
 *
 * Input: path = "NESWW"
 * Output: true
 * Explanation: Notice that the path visits the origin twice.
 *
 *
 * Constraints:
 *
 *
 * 1 <= path.length <= 10^4
 * path[i] is either 'N', 'S', 'E', or 'W'.
 *
 *
 */

// @lc code=start
/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
  const map = Object.create(null)

  let x = 0
  let y = 0

  map[toCoord(x, y)] = true

  for (let i = 0; i < path.length; i++) {
    const direciton = path[i]

    switch (direciton) {
      case 'N':
        y += 1
        break
      case 'S':
        y -= 1
        break
      case 'E':
        x += 1
        break
      case 'W':
        x -= 1
        break
    }

    const coord = toCoord(x, y)
    if (map[coord] === undefined) {
      map[coord] = true
    } else {
      return true
    }
  }

  return false
};

function toCoord(x, y) {
  return `${x},${y}`
}

// @lc code=end
