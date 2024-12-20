/*
 * @lc app=leetcode id=1266 lang=javascript
 *
 * [1266] Minimum Time Visiting All Points
 *
 * https://leetcode.com/problems/minimum-time-visiting-all-points/description/
 *
 * algorithms
 * Easy (82.46%)
 * Likes:    2215
 * Dislikes: 230
 * Total Accepted:    241K
 * Total Submissions: 292.5K
 * Testcase Example:  '[[1,1],[3,4],[-1,0]]'
 *
 * On a 2D plane, there are n points with integer coordinates points[i] = [xi,
 * yi]. Return the minimum time in seconds to visit all the points in the order
 * given by points.
 *
 * You can move according to these rules:
 *
 *
 * In 1 second, you can either:
 *
 *
 * move vertically by one unit,
 * move horizontally by one unit, or
 * move diagonally sqrt(2) units (in other words, move one unit vertically then
 * one unit horizontally in 1 second).
 *
 *
 * You have to visit the points in the same order as they appear in the
 * array.
 * You are allowed to pass through points that appear later in the order, but
 * these do not count as visits.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: points = [[1,1],[3,4],[-1,0]]
 * Output: 7
 * Explanation: One optimal path is [1,1] -> [2,2] -> [3,3] -> [3,4] -> [2,3]
 * -> [1,2] -> [0,1] -> [-1,0]
 * Time from [1,1] to [3,4] = 3 seconds
 * Time from [3,4] to [-1,0] = 4 seconds
 * Total time = 7 seconds
 *
 * Example 2:
 *
 *
 * Input: points = [[3,2],[-2,2]]
 * Output: 5
 *
 *
 *
 * Constraints:
 *
 *
 * points.length == n
 * 1 <= n <= 100
 * points[i].length == 2
 * -1000 <= points[i][0], points[i][1] <= 1000
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
  let result = 0

  for (let i = 1; i < points.length; i++) {
    const [x1, y1] = points[i - 1]
    const [x2, y2] = points[i]

    result += Math.max(
      Math.abs(x2 - x1),
      Math.abs(y2 - y1),
    )
  }

  return result
};
// @lc code=end
