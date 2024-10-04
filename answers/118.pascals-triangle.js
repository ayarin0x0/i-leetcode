/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 *
 * https://leetcode.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (72.99%)
 * Likes:    11912
 * Dislikes: 378
 * Total Accepted:    1.5M
 * Total Submissions: 2M
 * Testcase Example:  '5'
 *
 * Given an integer numRows, return the first numRows of Pascal's triangle.
 *
 * In Pascal's triangle, each number is the sum of the two numbers directly
 * above it as shown:
 *
 *
 * Example 1:
 * Input: numRows = 5
 * Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 * Example 2:
 * Input: numRows = 1
 * Output: [[1]]
 *
 *
 * Constraints:
 *
 *
 * 1 <= numRows <= 30
 *
 *
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const result = [[1]]

  if (numRows === 1) {
    return result
  }

  let lastLine = result[0]
  for (let i = 1; i < numRows; i++) {
    const line = []

    for (let j = 0; j <= i; j++) {
      const num = (lastLine[j - 1] || 0) + (lastLine[j] || 0)

      line.push(num)
    }

    result.push(line)
    lastLine = line
  }

  return result
}
// @lc code=end
