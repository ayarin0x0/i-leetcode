/*
 * @lc app=leetcode id=171 lang=javascript
 *
 * [171] Excel Sheet Column Number
 *
 * https://leetcode.com/problems/excel-sheet-column-number/description/
 *
 * algorithms
 * Easy (62.88%)
 * Likes:    4805
 * Dislikes: 372
 * Total Accepted:    721.7K
 * Total Submissions: 1.1M
 * Testcase Example:  '"A"'
 *
 * Given a string columnTitle that represents the column title as appears in an
 * Excel sheet, return its corresponding column number.
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
 * Input: columnTitle = "A"
 * Output: 1
 *
 *
 * Example 2:
 *
 *
 * Input: columnTitle = "AB"
 * Output: 28
 *
 *
 * Example 3:
 *
 *
 * Input: columnTitle = "ZY"
 * Output: 701
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= columnTitle.length <= 7
 * columnTitle consists only of uppercase English letters.
 * columnTitle is in the range ["A", "FXSHRXW"].
 *
 *
 */

// @lc code=start
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
  let result = 0
  let multiplier = 1

  for (let i = columnTitle.length - 1; i >= 0; i--) {
    const base = columnTitle.charCodeAt(i) - 64
    result += base * multiplier

    multiplier *= 26
  }

  return result
}
// @lc code=end
titleToNumber('ZY')
