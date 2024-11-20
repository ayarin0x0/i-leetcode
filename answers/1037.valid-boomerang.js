/*
 * @lc app=leetcode id=1037 lang=javascript
 *
 * [1037] Valid Boomerang
 *
 * https://leetcode.com/problems/valid-boomerang/description/
 *
 * algorithms
 * Easy (37.33%)
 * Likes:    431
 * Dislikes: 532
 * Total Accepted:    58.2K
 * Total Submissions: 155.9K
 * Testcase Example:  '[[1,1],[2,3],[3,2]]'
 *
 * Given an array points where points[i] = [xi, yi] represents a point on the
 * X-Y plane, return true if these points are a boomerang.
 *
 * A boomerang is a set of three points that are all distinct and not in a
 * straight line.
 *
 *
 * Example 1:
 * Input: points = [[1,1],[2,3],[3,2]]
 * Output: true
 * Example 2:
 * Input: points = [[1,1],[2,2],[3,3]]
 * Output: false
 *
 *
 * Constraints:
 *
 *
 * points.length == 3
 * points[i].length == 2
 * 0 <= xi, yi <= 100
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
  const p1 = points[0]
  const p2 = points[1]
  const p3 = points[2]

  return calcArea(p1, p2, p3) !== 0
};

function calcArea([x1, y1], [x2, y2], [x3, y3]) {
  return Math.abs((x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2))) / 2
}
// @lc code=end

console.log(
  // isBoomerang([[1,1],[2,3],[3,2]])
  // isBoomerang([[1,1],[2,2],[3,3]])
  // isBoomerang([[1,1],[2,3],[3,2]])
  // isBoomerang([[1,0],[0,0],[1,2]])
  // isBoomerang([[92,72],[12,40],[27,46]])
  isBoomerang([[73,31],[73,19],[73,45]])
)
