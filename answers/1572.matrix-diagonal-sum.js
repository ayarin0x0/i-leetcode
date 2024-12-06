/*
 * @lc app=leetcode id=1572 lang=javascript
 *
 * [1572] Matrix Diagonal Sum
 *
 * https://leetcode.com/problems/matrix-diagonal-sum/description/
 *
 * algorithms
 * Easy (83.28%)
 * Likes:    3534
 * Dislikes: 57
 * Total Accepted:    397.6K
 * Total Submissions: 477.1K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * Given a square matrix mat, return the sum of the matrix diagonals.
 *
 * Only include the sum of all the elements on the primary diagonal and all the
 * elements on the secondary diagonal that are not part of the primary
 * diagonal.
 *
 *
 * Example 1:
 *
 *
 * Input: mat = [[1,2,3],
 * [4,5,6],
 * [7,8,9]]
 * Output: 25
 * Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
 * Notice that element mat[1][1] = 5 is counted only once.
 *
 *
 * Example 2:
 *
 *
 * Input: mat = [[1,1,1,1],
 * [1,1,1,1],
 * [1,1,1,1],
 * [1,1,1,1]]
 * Output: 8
 *
 *
 * Example 3:
 *
 *
 * Input: mat = [[5]]
 * Output: 5
 *
 *
 *
 * Constraints:
 *
 *
 * n == mat.length == mat[i].length
 * 1 <= n <= 100
 * 1 <= mat[i][j] <= 100
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
  let result = 0

  const len = mat.length

  for (let i = 0; i < len; i++) {
    result += mat[i][i]
    result += mat[i][len - 1 - i]
  }

  if (len % 2 === 1) {
    const center = Math.floor(len / 2)

    result -= mat[center][center]
  }

  return result
};
// @lc code=end
