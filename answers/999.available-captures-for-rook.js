/*
 * @lc app=leetcode id=999 lang=javascript
 *
 * [999] Available Captures for Rook
 *
 * https://leetcode.com/problems/available-captures-for-rook/description/
 *
 * algorithms
 * Easy (69.54%)
 * Likes:    722
 * Dislikes: 637
 * Total Accepted:    71.1K
 * Total Submissions: 102.1K
 * Testcase Example:  '[[".",".",".",".",".",".",".","."],
 * [".",".",".","p",".",".",".","."],[".",".",".","R",".",".",".","p"],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]'
 *
 * You are given an 8 x 8 matrix representing a chessboard. There is exactly
 * one white rook represented by 'R', some number of white bishops 'B', and
 * some number of black pawns 'p'. Empty squares are represented by '.'.
 *
 * A rook can move any number of squares horizontally or vertically (up, down,
 * left, right) until it reaches another piece or the edge of the board. A rook
 * is attacking a pawn if it can move to the pawn's square in one move.
 *
 * Note: A rook cannot move through other pieces, such as bishops or pawns.
 * This means a rook cannot attack a pawn if there is another piece blocking
 * the path.
 *
 * Return the number of pawns the white rook is attacking.
 *
 *
 * Example 1:
 *
 *
 * Input: board =
 * [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","R",".",".",".","p"],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]
 *
 * Output: 3
 *
 * Explanation:
 *
 * In this example, the rook is attacking all the pawns.
 *
 *
 * Example 2:
 *
 *
 * Input: board =
 * [[".",".",".",".",".",".","."],[".","p","p","p","p","p",".","."],[".","p","p","B","p","p",".","."],[".","p","B","R","B","p",".","."],[".","p","p","B","p","p",".","."],[".","p","p","p","p","p",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]
 *
 * Output: 0
 *
 * Explanation:
 *
 * The bishops are blocking the rook from attacking any of the pawns.
 *
 *
 * Example 3:
 *
 *
 * Input: board =
 * [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","p",".",".",".","."],["p","p",".","R",".","p","B","."],[".",".",".",".",".",".",".","."],[".",".",".","B",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."]]
 *
 * Output: 3
 *
 * Explanation:
 *
 * The rook is attacking the pawns at positions b5, d6, and f5.
 *
 *
 *
 * Constraints:
 *
 *
 * board.length == 8
 * board[i].length == 8
 * board[i][j] is either 'R', '.', 'B', or 'p'
 * There is exactly one cell with board[i][j] == 'R'
 *
 *
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
  const rowMap = Object.create(null)
  const colMap = Object.create(null)

  const rook = {
    y: -1,
    x: -1,
  }

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const entity = board[row][col]

      if (entity === '.') {
        continue
      }

      if (entity === 'R') {
        rook.y = row
        rook.x = col
      }

      // entity = 'R' || entity = 'B' || entity = 'p'
      if (rowMap[row] === undefined) {
        rowMap[row] = []
      }

      if (colMap[col] === undefined) {
        colMap[col] = []
      }

      if (entity === 'B') {
        rowMap[row].push(-col)
        colMap[col].push(-row)
      } else {
        rowMap[row].push(col)
        colMap[col].push(row)
      }
    }
  }

  let result = 0

  const targetRow = rowMap[rook.y]
  const targetCol = colMap[rook.x]

  // console.log('R', rook)
  // console.log('targetRow', targetRow)
  // console.log('targetCol', targetCol)

  const startX = targetRow.indexOf(rook.x)

  // Left
  for (let i = startX - 1; i >= 0; i--) {
    if (targetRow[i] < 0) {
      break
    }

    result += 1
    break
  }

  // Right
  for (let i = startX + 1; i < targetRow.length; i++) {
    if (targetRow[i] < 0) {
      break
    }

    result += 1
    break
  }

  const startY = targetCol.indexOf(rook.y)

  // Top
  for (let i = startY - 1; i >= 0; i--) {
    if (targetCol[i] < 0) {
      break
    }

    result += 1
    break
  }

  // Bottom
  for (let i = startY + 1; i < targetCol.length; i++) {
    if (targetCol[i] < 0) {
      break
    }

    result += 1
    break
  }

  return result
};
// @lc code=end

console.log(
  // numRookCaptures([[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","R",".",".",".","p"],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]])
  // numRookCaptures([[".",".",".",".",".",".","."],[".","p","p","p","p","p",".","."],[".","p","p","B","p","p",".","."],[".","p","B","R","B","p",".","."],[".","p","p","B","p","p",".","."],[".","p","p","p","p","p",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]])
  // numRookCaptures([
  //   [".",".",".",".",".",".",".","."],
  //   [".",".",".","p",".",".",".","."],
  //   [".",".",".","R",".",".",".","p"],
  //   [".",".",".",".",".",".",".","."],
  //   [".",".",".",".",".",".",".","."],
  //   [".",".",".","p",".",".",".","."],
  //   [".",".",".",".",".",".",".","."],
  //   [".",".",".",".",".",".",".","."]
  // ])
  // numRookCaptures([
  //   [".",".",".",".",".",".",".","."],
  //   [".","p","p","p","p","p",".","."],
  //   [".","p","p","B","p","p",".","."],
  //   [".","p","B","R","B","p",".","."],
  //   [".","p","p","B","p","p",".","."],
  //   [".","p","p","p","p","p",".","."],
  //   [".",".",".",".",".",".",".","."],
  //   [".",".",".",".",".",".",".","."]
  // ])
  numRookCaptures([
    [".",".",".",".",".",".",".","."],
    [".",".",".","p",".",".",".","."],
    [".",".",".","p",".",".",".","."],
    ["p","p",".","R",".","p","B","."],
    [".",".",".",".",".",".",".","."],
    [".",".",".","B",".",".",".","."],
    [".",".",".","p",".",".",".","."],
    [".",".",".",".",".",".",".","."]
  ])
)
