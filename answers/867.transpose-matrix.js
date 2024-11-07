/*
 * @lc app=leetcode id=867 lang=javascript
 *
 * [867] Transpose Matrix
 *
 * https://leetcode.com/problems/transpose-matrix/description/
 *
 * algorithms
 * Easy (72.65%)
 * Likes:    3820
 * Dislikes: 446
 * Total Accepted:    439.4K
 * Total Submissions: 603.2K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * Given a 2D integer array matrix, return the transpose of matrix.
 *
 * The transpose of a matrix is the matrix flipped over its main diagonal,
 * switching the matrix's row and column indices.
 *
 *
 *
 *
 * Example 1:
 *
 *
 * Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * Output: [[1,4,7],[2,5,8],[3,6,9]]
 *
 *
 * Example 2:
 *
 *
 * Input: matrix = [[1,2,3],[4,5,6]]
 * Output: [[1,4],[2,5],[3,6]]
 *
 *
 *
 * Constraints:
 *
 *
 * m == matrix.length
 * n == matrix[i].length
 * 1 <= m, n <= 1000
 * 1 <= m * n <= 10^5
 * -10^9 <= matrix[i][j] <= 10^9
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
  const result = []

  const maxY = matrix.length
  const maxX = matrix[0].length

  for (let i = 0; i < maxX; i++) {
    result[i] = []
  }

  for (let y = 0; y < maxY; y++) {
    for (let x = 0; x < maxX; x++) {
      result[x][y] = matrix[y][x]
    }
  }

  return result
};
// @lc code=end

console.log(
  // transpose([[1,2,3,4],[4,5,6,7],[7,8,9,10],[10,11,12,13]])
  transpose([[1,2,3],[4,5,6]])
)
// 1  2  3  4
// 4  5  6  7
// 7  8  9  10
// 10 11 12 13


// 1  2  3
// 4  5  6
