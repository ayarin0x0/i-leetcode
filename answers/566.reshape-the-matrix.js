/*
 * @lc app=leetcode id=566 lang=javascript
 *
 * [566] Reshape the Matrix
 *
 * https://leetcode.com/problems/reshape-the-matrix/description/
 *
 * algorithms
 * Easy (63.40%)
 * Likes:    3543
 * Dislikes: 418
 * Total Accepted:    396.9K
 * Total Submissions: 625.6K
 * Testcase Example:  '[[1,2],[3,4]]\n1\n4'
 *
 * In MATLAB, there is a handy function called reshape which can reshape an m x
 * n matrix into a new one with a different size r x c keeping its original
 * data.
 *
 * You are given an m x n matrix mat and two integers r and c representing the
 * number of rows and the number of columns of the wanted reshaped matrix.
 *
 * The reshaped matrix should be filled with all the elements of the original
 * matrix in the same row-traversing order as they were.
 *
 * If the reshape operation with given parameters is possible and legal, output
 * the new reshaped matrix; Otherwise, output the original matrix.
 *
 *
 * Example 1:
 *
 *
 * Input: mat = [[1,2],[3,4]], r = 1, c = 4
 * Output: [[1,2,3,4]]
 *
 *
 * Example 2:
 *
 *
 * Input: mat = [[1,2],[3,4]], r = 2, c = 4
 * Output: [[1,2],[3,4]]
 *
 *
 *
 * Constraints:
 *
 *
 * m == mat.length
 * n == mat[i].length
 * 1 <= m, n <= 100
 * -1000 <= mat[i][j] <= 1000
 * 1 <= r, c <= 300
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
  const size = mat.length * mat[0].length

  if (r * c !== size) {
    return mat
  }

  const result = []
  const picker = MatPicker(mat)

  for (let i = 0; i < r; i++) {
    result.push(picker.next(c))
  }

  return result

  function MatPicker(mat) {
    const columnCount = mat[0].length

    let y = 0
    let x = 0

    return {
      next(count) {
        const result = []

        for (let i = 0; i < count; i++) {
          result.push(mat[y][x])

          x += 1

          if (x >= columnCount) {
            x = 0
            y += 1
          }
        }

        return result
      }
    }
  }
};
// @lc code=end

console.log(
  matrixReshape(
    [[1, 2, 3],[4, 5, 6]],
    3,
    2,
  )
)
