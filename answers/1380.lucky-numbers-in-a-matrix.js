/*
 * @lc app=leetcode id=1380 lang=javascript
 *
 * [1380] Lucky Numbers in a Matrix
 *
 * https://leetcode.com/problems/lucky-numbers-in-a-matrix/description/
 *
 * algorithms
 * Easy (79.91%)
 * Likes:    2211
 * Dislikes: 115
 * Total Accepted:    258.7K
 * Total Submissions: 323.7K
 * Testcase Example:  '[[3,7,8],[9,11,13],[15,16,17]]'
 *
 * Given an m x n matrix of distinct numbers, return all lucky numbers in the
 * matrix in any order.
 *
 * A lucky number is an element of the matrix such that it is the minimum
 * element in its row and maximum in its column.
 *
 *
 * Example 1:
 *
 *
 * Input: matrix = [[3,7,8],[9,11,13],[15,16,17]]
 * Output: [15]
 * Explanation: 15 is the only lucky number since it is the minimum in its row
 * and the maximum in its column.
 *
 *
 * Example 2:
 *
 *
 * Input: matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
 * Output: [12]
 * Explanation: 12 is the only lucky number since it is the minimum in its row
 * and the maximum in its column.
 *
 *
 * Example 3:
 *
 *
 * Input: matrix = [[7,8],[1,2]]
 * Output: [7]
 * Explanation: 7 is the only lucky number since it is the minimum in its row
 * and the maximum in its column.
 *
 *
 *
 * Constraints:
 *
 *
 * m == mat.length
 * n == mat[i].length
 * 1 <= n, m <= 50
 * 1 <= matrix[i][j] <= 10^5.
 * All elements in the matrix are distinct.
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function(matrix) {
  const candidates = []

  const rows = matrix.length
  const cols = matrix[0].length

  for (let r = 0; r < rows; r++) {
    const row = matrix[r]
    let min = Infinity
    let index = -1

    for (let c = 0 ; c < cols; c++) {
      const num = row[c]

      /**
       * Constraints:
       * All elements in the matrix are distinct.
       *
       * 所以不需要判断 num === min
       */
      if (num > min) {
        continue
      }

      min = num
      index = c
    }

    candidates.push(index, min)
  }

  const result = []
  const cache = Object.create(null)

  outer: for (let i = 0; i < candidates.length; i += 2) {
    const col = candidates[i]

    if (cache[col] === true) {
      continue outer
    }

    const candidate = candidates[i + 1]

    for (let r = 0; r < rows; r++) {
      const num = matrix[r][col]

      if (candidate < num) {
        continue outer
      }
    }

    cache[col] = true
    result.push(candidate)
  }

  return result
};
// @lc code=end

console.log(
  // luckyNumbers([[3,7,8],[9,11,13],[15,16,17]])
  // luckyNumbers([[1,10,4,2],[9,3,8,7],[15,16,17,12]])
  luckyNumbers([[7,8],[1,2]])
)
