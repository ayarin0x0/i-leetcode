/*
 * @lc app=leetcode id=1232 lang=javascript
 *
 * [1232] Check If It Is a Straight Line
 *
 * https://leetcode.com/problems/check-if-it-is-a-straight-line/description/
 *
 * algorithms
 * Easy (39.53%)
 * Likes:    2621
 * Dislikes: 283
 * Total Accepted:    271.2K
 * Total Submissions: 685.5K
 * Testcase Example:  '[[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]'
 *
 * You are given an array coordinates, coordinates[i] = [x, y], where [x, y]
 * represents the coordinate of a point. Check if these points make a straight
 * line in the XY plane.
 *
 *
 *
 *
 * Example 1:
 *
 *
 *
 *
 * Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
 * Output: true
 *
 *
 * Example 2:
 *
 *
 *
 *
 * Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
 * Output: false
 *
 *
 *
 * Constraints:
 *
 *
 * 2 <= coordinates.length <= 1000
 * coordinates[i].length == 2
 * -10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
 * coordinates contains no duplicate point.
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
  const NORMAL_LINE = 0
  const VERTICAL_LINE = 1
  const HORIZONTAL_LINE = 2

  const p1 = coordinates[0]
  const p2 = coordinates[1]

  let mode = NORMAL_LINE // normal mode. 1: x = n, 2: y = n

  const k = (p2[1] - p1[1]) / (p2[0] - p1[0])

  if (k === Infinity) {
    mode = VERTICAL_LINE
    const b = p1[0]

    for (let i = 2; i < coordinates.length; i++) {
      const [x, _] = coordinates[i]

      if (x !== b) {
        return false
      }
    }

    return true
  } else if (k === 0) {
    mode = HORIZONTAL_LINE
    const b = p1[1]

    for (let i = 2; i < coordinates.length; i++) {
      const [_, y] = coordinates[i]

      if (y !== b) {
        return false
      }
    }

    return true
  }

  const b = p1[1] - k * p1[0]

  for (let i = 2; i < coordinates.length; i++) {
    const [x, y] = coordinates[i]

    if (k * x + b !== y) {
      return false
    }
  }

  return true
};
// @lc code=end
console.log(
  // checkStraightLine([[1, 2], [1, 3]])
  checkStraightLine([[1, 2], [3, 2]])
)
