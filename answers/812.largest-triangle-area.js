/*
 * @lc app=leetcode id=812 lang=javascript
 *
 * [812] Largest Triangle Area
 *
 * https://leetcode.com/problems/largest-triangle-area/description/
 *
 * algorithms
 * Easy (61.23%)
 * Likes:    539
 * Dislikes: 1592
 * Total Accepted:    56.8K
 * Total Submissions: 92.6K
 * Testcase Example:  '[[0,0],[0,1],[1,0],[0,2],[2,0]]'
 *
 * Given an array of points on the X-Y plane points where points[i] = [xi, yi],
 * return the area of the largest triangle that can be formed by any three
 * different points. Answers within 10^-5 of the actual answer will be
 * accepted.
 *
 *
 * Example 1:
 *
 *
 * Input: points = [[0,0],[0,1],[1,0],[0,2],[2,0]]
 * Output: 2.00000
 * Explanation: The five points are shown in the above figure. The red triangle
 * is the largest.
 *
 *
 * Example 2:
 *
 *
 * Input: points = [[1,0],[0,0],[0,1]]
 * Output: 0.50000
 *
 *
 *
 * Constraints:
 *
 *
 * 3 <= points.length <= 50
 * -50 <= xi, yi <= 50
 * All the given points are unique.
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
  let result = 0

  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      for (let k = j + 1; k < points.length; k++) {
        const area = calcArea(points[i], points[j], points[k])

        result = Math.max(area, result)
      }
    }
  }

  return result

  // https://leetcode.com/problems/largest-triangle-area/solutions/122711/c-java-python-solution-with-explanation-and-prove/?source=vscode
  function calcArea([x1, y1], [x2, y2], [x3, y3]) {
    return Math.abs((x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2))) / 2
  }
};
// @lc code=end

console.log(
  largestTriangleArea( [[1,0],[0,0],[0,1]])
)
