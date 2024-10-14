/*
 * @lc app=leetcode id=463 lang=javascript
 *
 * [463] Island Perimeter
 *
 * https://leetcode.com/problems/island-perimeter/description/
 *
 * algorithms
 * Easy (73.11%)
 * Likes:    6886
 * Dislikes: 395
 * Total Accepted:    668.5K
 * Total Submissions: 914.3K
 * Testcase Example:  '[[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]'
 *
 * You are given row x col grid representing a map where grid[i][j] = 1
 * represents land and grid[i][j] = 0 represents water.
 *
 * Grid cells are connected horizontally/vertically (not diagonally). The grid
 * is completely surrounded by water, and there is exactly one island (i.e.,
 * one or more connected land cells).
 *
 * The island doesn't have "lakes", meaning the water inside isn't connected to
 * the water around the island. One cell is a square with side length 1. The
 * grid is rectangular, width and height don't exceed 100. Determine the
 * perimeter of the island.
 *
 *
 * Example 1:
 *
 *
 * Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
 * Output: 16
 * Explanation: The perimeter is the 16 yellow stripes in the image above.
 *
 *
 * Example 2:
 *
 *
 * Input: grid = [[1]]
 * Output: 4
 *
 *
 * Example 3:
 *
 *
 * Input: grid = [[1,0]]
 * Output: 4
 *
 *
 *
 * Constraints:
 *
 *
 * row == grid.length
 * col == grid[i].length
 * 1 <= row, col <= 100
 * grid[i][j] is 0 or 1.
 * There is exactly one island in grid.
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  let perimeter = 0

  const rows = grid.length
  const cols = grid[0].length

  for (let i = 0; i < rows - 1; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 0) {
        continue
      }

      perimeter += 4
      if (grid[i + 1][j] === 1) {
        perimeter -= 2
      }
      if (grid[i][j + 1] === 1) {
        perimeter -= 2
      }
    }
  }

  const lastRow = rows - 1
  for (let j = 0; j < cols; j++) {
    if (grid[lastRow][j] === 0) {
      continue
    }

    perimeter += 4
    if (grid[lastRow][j + 1] === 1) {
      perimeter -= 2
    }
  }

  return perimeter
};
// @lc code=end

// console.log(
//   islandPerimeter(
//     [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
//   )
// )

console.log(
  islandPerimeter(
    [[1,1,1],[1,0,1]]
  )
)
