/*
 * @lc app=leetcode id=168 lang=javascript
 *
 * [168] Excel Sheet Column Title
 *
 * https://leetcode.com/problems/excel-sheet-column-title/description/
 *
 * algorithms
 * Easy (39.47%)
 * Likes:    5614
 * Dislikes: 827
 * Total Accepted:    558.2K
 * Total Submissions: 1.3M
 * Testcase Example:  '1'
 *
 * Given an integer columnNumber, return its corresponding column title as it
 * appears in an Excel sheet.
 *
 * For example:
 *
 *
 * A -> 1
 * B -> 2
 * C -> 3
 * ...
 * Z -> 26
 * AA -> 27
 * AB -> 28
 * ...
 *
 *
 *
 * Example 1:
 *
 *
 * Input: columnNumber = 1
 * Output: "A"
 *
 *
 * Example 2:
 *
 *
 * Input: columnNumber = 28
 * Output: "AB"
 *
 *
 * Example 3:
 *
 *
 * Input: columnNumber = 701
 * Output: "ZY"
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= columnNumber <= 2^31 - 1
 *
 *
 */

// @lc code=start
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
  let result = ''

  for (;;) {
    /**
     * 如果不减一, 按照正常逻辑, 25 是 Y, 26 却是 A0, 但是 26 理应是 Z, 并且这个 26 进制也不存在补 0 的说法
     * 所以减一之后让 charCode 的范围从 A-A0 变为 A-Z, 减一的部分在 fromCharCode 这里补上
     * 所以 65 写的更清楚点应该是 64 + 1
     */
    columnNumber--

    const times = Math.floor(columnNumber / 26)
    const left = columnNumber % 26

    if (times === 0) {
      result = String.fromCharCode(65 + left) + result
      break
    }

    result = String.fromCharCode(65 + left) + result
    columnNumber = times
  }

  return result
}
// @lc code=end
