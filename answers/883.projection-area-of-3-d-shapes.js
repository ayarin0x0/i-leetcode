/*
 * @lc app=leetcode id=883 lang=javascript
 *
 * [883] Projection Area of 3D Shapes
 *
 * https://leetcode.com/problems/projection-area-of-3d-shapes/description/
 *
 * algorithms
 * Easy (73.33%)
 * Likes:    597
 * Dislikes: 1423
 * Total Accepted:    60K
 * Total Submissions: 81.8K
 * Testcase Example:  '[[1,2],[3,4]]'
 *
 * You are given an n x n grid where we place some 1 x 1 x 1 cubes that are
 * axis-aligned with the x, y, and z axes.
 *
 * Each value v = grid[i][j] represents a tower of v cubes placed on top of the
 * cell (i, j).
 *
 * We view the projection of these cubes onto the xy, yz, and zx planes.
 *
 * A projection is like a shadow, that maps our 3-dimensional figure to a
 * 2-dimensional plane. We are viewing the "shadow" when looking at the cubes
 * from the top, the front, and the side.
 *
 * Return the total area of all three projections.
 *
 *
 * Example 1:
 *
 *
 * Input: grid = [[1,2],[3,4]]
 * Output: 17
 * Explanation: Here are the three projections ("shadows") of the shape made
 * with each axis-aligned plane.
 *
 *
 * Example 2:
 *
 *
 * Input: grid = [[2]]
 * Output: 5
 *
 *
 * Example 3:
 *
 *
 * Input: grid = [[1,0],[0,2]]
 * Output: 8
 *
 *
 *
 * Constraints:
 *
 *
 * n == grid.length == grid[i].length
 * 1 <= n <= 50
 * 0 <= grid[i][j] <= 50
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
  const n = grid.length
  // View of XY
  const frontArr = (() => {
    const arr = []

    for (let i = 0; i < n; i++) {
      arr[i] = 0
    }

    return arr
  })()

  let fromTop = 0
  let fromLeft = 0

  // View of YZ
  for (let y = 0; y < n; y++) {
    const row = grid[y]

    let fromLeftMax = 0
    for (let x = 0; x < n; x++) {
      fromLeftMax = Math.max(row[x], fromLeftMax)
      frontArr[x] = Math.max(row[x], frontArr[x])

      if (row[x] !== 0) {
        fromTop += 1
      }
    }

    fromLeft += fromLeftMax
  }

  // View of XZ
  let fromFront = 0

  for (let i = 0; i < frontArr.length; i++) {
    fromFront += frontArr[i]
  }

  return fromTop + fromLeft + fromFront
};
// @lc code=end
// 1 2
// 3 4

console.log(
  projectionArea([[1,0],[0,2]])
)

// 0 2
// 1 0
