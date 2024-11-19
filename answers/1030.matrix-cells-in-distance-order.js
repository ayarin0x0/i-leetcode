/*
 * @lc app=leetcode id=1030 lang=javascript
 *
 * [1030] Matrix Cells in Distance Order
 *
 * https://leetcode.com/problems/matrix-cells-in-distance-order/description/
 *
 * algorithms
 * Easy (71.80%)
 * Likes:    768
 * Dislikes: 330
 * Total Accepted:    63.9K
 * Total Submissions: 88.9K
 * Testcase Example:  '1\n2\n0\n0'
 *
 * You are given four integers row, cols, rCenter, and cCenter. There is a rows
 * x cols matrix and you are on the cell with the coordinates (rCenter,
 * cCenter).
 *
 * Return the coordinates of all cells in the matrix, sorted by their distance
 * from (rCenter, cCenter) from the smallest distance to the largest distance.
 * You may return the answer in any order that satisfies this condition.
 *
 * The distance between two cells (r1, c1) and (r2, c2) is |r1 - r2| + |c1 -
 * c2|.
 *
 *
 * Example 1:
 *
 *
 * Input: rows = 1, cols = 2, rCenter = 0, cCenter = 0
 * Output: [[0,0],[0,1]]
 * Explanation: The distances from (0, 0) to other cells are: [0,1]
 *
 *
 * Example 2:
 *
 *
 * Input: rows = 2, cols = 2, rCenter = 0, cCenter = 1
 * Output: [[0,1],[0,0],[1,1],[1,0]]
 * Explanation: The distances from (0, 1) to other cells are: [0,1,1,2]
 * The answer [[0,1],[1,1],[0,0],[1,0]] would also be accepted as correct.
 *
 *
 * Example 3:
 *
 *
 * Input: rows = 2, cols = 3, rCenter = 1, cCenter = 2
 * Output: [[1,2],[0,2],[1,1],[0,1],[1,0],[0,0]]
 * Explanation: The distances from (1, 2) to other cells are: [0,1,1,2,2,3]
 * There are other answers that would also be accepted as correct, such as
 * [[1,2],[1,1],[0,2],[1,0],[0,1],[0,0]].
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= rows, cols <= 100
 * 0 <= rCenter < rows
 * 0 <= cCenter < cols
 *
 *
 */

// @lc code=start
/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function(rows, cols, rCenter, cCenter) {
  const buckets = []

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const distance = Math.abs(r - rCenter) + Math.abs(c - cCenter)

      if (buckets[distance] === undefined) {
        buckets[distance] = []
      }

      buckets[distance].push([r, c])
    }
  }

  const result = []

  for (let i = 0; i < buckets.length; i++) {
    const nodes = buckets[i]

    for (let j = 0; j < nodes.length; j++) {
      const node = nodes[j]

      result.push(node)
    }
  }

  return result
};
// @lc code=end

var _allCellsDistOrder = function(rows, cols, rCenter, cCenter) {
  const result = [[rCenter, cCenter]]

  let topDistance = rCenter
  let bottomDistance = rows - 1 - rCenter
  let leftDistance = cCenter
  let rightDistance = cols - 1 - cCenter

  const maxOffset = Math.max(topDistance, bottomDistance, leftDistance, rightDistance)

  for (let i = 1; i <= maxOffset; i++) {
    spread(rCenter, cCenter, i, 0, rows - 1, 0, cols - 1, result)
  }

  return result
};


// 不觉得这是错误的, 但是顺序不同
function spread(rCenter, cCenter, offset, topBorder, bottomBorder, leftBorder, rightBorder, result) {
  const topAnchor = {
    y: rCenter - offset,
    x: cCenter,
  }

  const bottomAnchor = {
    y: rCenter + offset,
    x: cCenter,
  }

  const leftAnchor = {
    y: rCenter,
    x: cCenter - offset,
  }

  const rightAnchor = {
    y: rCenter,
    x: cCenter + offset,
  }

  // top anchor
  if (topAnchor.y >= topBorder) {
    result.push([topAnchor.y, topAnchor.x])
  }

  // bottom anchor
  if (bottomAnchor.y <= bottomBorder) {
    result.push([bottomAnchor.y, bottomAnchor.x])
  }

  // left anchor
  if (leftAnchor.x >= leftBorder) {
    result.push([leftAnchor.y, leftAnchor.x])
  }

  // right anchor
  if (rightAnchor.x <= rightBorder) {
    result.push([rightAnchor.y, rightAnchor.x])
  }

  for (let i = 1; i <= offset + 1; i++) {
    // top anchor
    if (topAnchor.y >= topBorder) {
      // spread top left
      if (topAnchor.x - i >= leftBorder && topAnchor.x - i >= leftAnchor.x) {
        result.push([topAnchor.y, topAnchor.x - i])
      }
      // spread top right
      if (topAnchor.x + i <= rightBorder && topAnchor.x + i <= rightAnchor.x) {
        result.push([topAnchor.y, topAnchor.x + i])
      }
    }

    // bottom anchor
    if (bottomAnchor.y <= bottomBorder) {
      // spread bottom left
      if (bottomAnchor.x - i >= leftBorder && bottomAnchor.x - i >= leftAnchor.x) {
        result.push([bottomAnchor.y, bottomAnchor.x - i])
      }
      // spread bottom right
      if (bottomAnchor.x + i <= rightBorder && bottomAnchor.x + i <= rightAnchor.x) {
        result.push([bottomAnchor.y, bottomAnchor.x + i])
      }
    }

    // left anchor
    if (leftAnchor.x >= leftBorder) {
      // spread left top
      if (leftAnchor.y - i >= topBorder && leftAnchor.y - i > topAnchor.y) {
        result.push([leftAnchor.y - i, leftAnchor.x])
      }
      // spread left bottom
      if (leftAnchor.y + i <= bottomBorder && leftAnchor.y + i < bottomAnchor.y) {
        result.push([leftAnchor.y + i, leftAnchor.x])
      }
    }

    // right anchor
    if (rightAnchor.x <= rightBorder) {
      // spread right top
      if (rightAnchor.y - i >= topBorder && rightAnchor.y - i > topAnchor.y) {
        result.push([rightAnchor.y - i, rightAnchor.x])
      }
      // spread right bottom
      if (rightAnchor.y + i <= bottomBorder && rightAnchor.y + i < bottomAnchor.y) {
        result.push([rightAnchor.y + i, rightAnchor.x])
      }
    }
  }
}

console.log(
  allCellsDistOrder(1, 2, 0, 0)
  // allCellsDistOrder(2, 3, 1, 2)
  // allCellsDistOrder(3, 5, 2, 3)
)

// x Y
// x x

// x x o
// x o Y

// x x x x x
// x x x o x
// x x o Y o
