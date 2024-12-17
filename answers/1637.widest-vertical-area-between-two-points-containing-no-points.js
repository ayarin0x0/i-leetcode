/*
 * @lc app=leetcode id=1637 lang=javascript
 *
 * [1637] Widest Vertical Area Between Two Points Containing No Points
 *
 * https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/description/
 *
 * algorithms
 * Easy (87.35%)
 * Likes:    942
 * Dislikes: 1745
 * Total Accepted:    180.5K
 * Total Submissions: 206.8K
 * Testcase Example:  '[[8,7],[9,9],[7,4],[9,7]]'
 *
 * Given n points on a 2D plane where points[i] = [xi, yi], Return the widest
 * vertical area between two points such that no points are inside the area.
 *
 * A vertical area is an area of fixed-width extending infinitely along the
 * y-axis (i.e., infinite height). The widest vertical area is the one with the
 * maximum width.
 *
 * Note that points on the edge of a vertical area are not considered included
 * in the area.
 *
 *
 * Example 1:
 * ​
 *
 * Input: points = [[8,7],[9,9],[7,4],[9,7]]
 * Output: 1
 * Explanation: Both the red and the blue area are optimal.
 *
 *
 * Example 2:
 *
 *
 * Input: points = [[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]]
 * Output: 3
 *
 *
 *
 * Constraints:
 *
 *
 * n == points.length
 * 2 <= n <= 10^5
 * points[i].length == 2
 * 0 <= xi, yi <= 10^9
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
  const xPoints = []

  for (let i = 0; i < points.length; i++) {
    const [x] = points[i]

    xPoints.push(x)
  }

  xPoints.sort((a, b) => a - b)

  let result = 0
  for (let i = 1; i < xPoints.length; i++) {
    const prev = xPoints[i - 1]
    const cur = xPoints[i]

    result = Math.max(cur - prev, result)
  }

  return result
};
// @lc code=end
