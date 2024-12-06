/*
 * @lc app=leetcode id=1582 lang=javascript
 *
 * [1582] Special Positions in a Binary Matrix
 *
 * https://leetcode.com/problems/special-positions-in-a-binary-matrix/description/
 *
 * algorithms
 * Easy (68.67%)
 * Likes:    1458
 * Dislikes: 70
 * Total Accepted:    151.6K
 * Total Submissions: 220.9K
 * Testcase Example:  '[[1,0,0],[0,0,1],[1,0,0]]'
 *
 * Given an m x n binary matrix mat, return the number of special positions in
 * mat.
 *
 * A position (i, j) is called special if mat[i][j] == 1 and all other elements
 * in row i and column j are 0 (rows and columns are 0-indexed).
 *
 *
 * Example 1:
 *
 *
 * Input: mat = [[1,0,0],[0,0,1],[1,0,0]]
 * Output: 1
 * Explanation: (1, 2) is a special position because mat[1][2] == 1 and all
 * other elements in row 1 and column 2 are 0.
 *
 *
 * Example 2:
 *
 *
 * Input: mat = [[1,0,0],[0,1,0],[0,0,1]]
 * Output: 3
 * Explanation: (0, 0), (1, 1) and (2, 2) are special positions.
 *
 *
 *
 * Constraints:
 *
 *
 * m == mat.length
 * n == mat[i].length
 * 1 <= m, n <= 100
 * mat[i][j] is either 0 or 1.
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
  const rowMap = []
  const colMap = []

  for (let i = 0; i < mat.length; i++) {
    rowMap[i] = 0
    for (let j = 0; j < mat[0].length; j++) {
      if (colMap[j] === undefined) {
        colMap[j] = 0
      }

      if (mat[i][j] === 1) {
        rowMap[i] += 1
        colMap[j] += 1
      }
    }
  }

  let result = 0

  for (let i = 0; i < rowMap.length; i++) {
    if (rowMap[i] !== 1) {
      continue
    }

    for (let j = 0; j < colMap.length; j++) {
      if (colMap[j] !== 1) {
        continue
      }

      if (mat[i][j] === 1) {
        result += 1
      }
    }
  }

  return result
};
// @lc code=end

console.log(
  numSpecial([[1,0,0],[0,0,1],[1,0,0]])
)
// 0 1 0 0
// 0 0 1 1

// [1, 2]
// [0, 1, 1, 1]
// 1
// 2
