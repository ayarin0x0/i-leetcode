/*
 * @lc app=leetcode id=892 lang=javascript
 *
 * [892] Surface Area of 3D Shapes
 *
 * https://leetcode.com/problems/surface-area-of-3d-shapes/description/
 *
 * algorithms
 * Easy (66.83%)
 * Likes:    575
 * Dislikes: 748
 * Total Accepted:    43.3K
 * Total Submissions: 64.7K
 * Testcase Example:  '[[1,2],[3,4]]'
 *
 * You are given an n x n grid where you have placed some 1 x 1 x 1 cubes. Each
 * value v = grid[i][j] represents a tower of v cubes placed on top of cell (i,
 * j).
 *
 * After placing these cubes, you have decided to glue any directly adjacent
 * cubes to each other, forming several irregular 3D shapes.
 *
 * Return the total surface area of the resulting shapes.
 *
 * Note: The bottom face of each shape counts toward its surface area.
 *
 *
 * Example 1:
 *
 *
 * Input: grid = [[1,2],[3,4]]
 * Output: 34
 *
 *
 * Example 2:
 *
 *
 * Input: grid = [[1,1,1],[1,0,1],[1,1,1]]
 * Output: 32
 *
 *
 * Example 3:
 *
 *
 * Input: grid = [[2,2,2],[2,1,2],[2,2,2]]
 * Output: 46
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
var surfaceArea = function(grid) {
  const n = grid.length

  let result = 0
  let prevRow = []
  for (let y = 0; y < n; y++) {
    const row = grid[y]

    for (let x = 0; x < n; x++) {
      const value = row[x]

      if (value === 0) {
        continue
      }

      let area = value * 4 + 2
      // minus top
      area -= Math.min(value, prevRow[x] || 0) * 2
      // minus left
      area -= Math.min(value, row[x - 1] || 0) * 2

      result += area
    }

    prevRow = row
  }

  return result
};
// @lc code=end
console.log(
  // surfaceArea([[1,2],[3,4]])
  surfaceArea([[1,1,1],[1,0,1],[1,1,1]])
)
