/*
 * @lc app=leetcode id=1252 lang=javascript
 *
 * [1252] Cells with Odd Values in a Matrix
 *
 * https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/description/
 *
 * algorithms
 * Easy (78.90%)
 * Likes:    1237
 * Dislikes: 1531
 * Total Accepted:    121.9K
 * Total Submissions: 154.4K
 * Testcase Example:  '2\n3\n[[0,1],[1,1]]'
 *
 * There is an m x n matrix that is initialized to all 0's. There is also a 2D
 * array indices where each indices[i] = [ri, ci] represents a 0-indexed
 * location to perform some increment operations on the matrix.
 *
 * For each location indices[i], do both of the following:
 *
 *
 * Increment all the cells on row ri.
 * Increment all the cells on column ci.
 *
 *
 * Given m, n, and indices, return the number of odd-valued cells in the matrix
 * after applying the increment to all locations in indices.
 *
 *
 * Example 1:
 *
 *
 * Input: m = 2, n = 3, indices = [[0,1],[1,1]]
 * Output: 6
 * Explanation: Initial matrix = [[0,0,0],[0,0,0]].
 * After applying first increment it becomes [[1,2,1],[0,1,0]].
 * The final matrix is [[1,3,1],[1,3,1]], which contains 6 odd numbers.
 *
 *
 * Example 2:
 *
 *
 * Input: m = 2, n = 2, indices = [[1,1],[0,0]]
 * Output: 0
 * Explanation: Final matrix = [[2,2],[2,2]]. There are no odd numbers in the
 * final matrix.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= m, n <= 50
 * 1 <= indices.length <= 100
 * 0 <= ri < m
 * 0 <= ci < n
 *
 *
 *
 * Follow up: Could you solve this in O(n + m + indices.length) time with only
 * O(n + m) extra space?
 *
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(m, n, indices) {
  const rowAcc = []

  for (let i = 0; i < m; i++) {
    rowAcc[i] = 0
  }

  const colAcc = []

  for (let i = 0; i < n; i++) {
    colAcc[i] = 0
  }

  for (let i = 0; i < indices.length; i++) {
    const [y, x] = indices[i]

    rowAcc[y] += 1
    colAcc[x] += 1
  }

  let result = 0

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if ((rowAcc[r] + colAcc[c]) % 2 === 1) {
        result += 1
      }
    }
  }

  return result
};
// @lc code=end
