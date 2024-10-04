/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 *
 * https://leetcode.com/problems/pascals-triangle-ii/description/
 *
 * algorithms
 * Easy (61.72%)
 * Likes:    4163
 * Dislikes: 311
 * Total Accepted:    732.4K
 * Total Submissions: 1.2M
 * Testcase Example:  '3'
 *
 * Given an integer rowIndex, return the rowIndex^th (0-indexed) row of the
 * Pascal's triangle.
 *
 * In Pascal's triangle, each number is the sum of the two numbers directly
 * above it as shown:
 *
 *
 * Example 1:
 * Input: rowIndex = 3
 * Output: [1,3,3,1]
 * Example 2:
 * Input: rowIndex = 0
 * Output: [1]
 * Example 3:
 * Input: rowIndex = 1
 * Output: [1,1]
 *
 *
 * Constraints:
 *
 *
 * 0 <= rowIndex <= 33
 *
 *
 *
 * Follow up: Could you optimize your algorithm to use only O(rowIndex) extra
 * space?
 *
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  const halfRows = []

  halfRows[0] = [1]

  for (let i = 1; i <= rowIndex; i++) {
    halfRows[i] = []
    halfRows[i][0] = 1

    for (let j = 1; j < (Math.floor(i / 2) + 1); j++) {
      if (!halfRows[i - 1][j]) {
        halfRows[i][j] = 2 * (halfRows[i - 1][j - 1])
      } else {
        halfRows[i][j] = halfRows[i - 1][j - 1] + halfRows[i - 1][j]
      }
    }
  }
  const targetRow = halfRows[rowIndex]

  /* @Mirror */
  let leftPointer = 0
  let rightPointer = rowIndex

  for (; leftPointer < rightPointer; leftPointer++, rightPointer--) {
    targetRow[rightPointer] = targetRow[leftPointer]
  }

  return targetRow
}
// @lc code=end
