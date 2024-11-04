/*
 * @lc app=leetcode id=806 lang=javascript
 *
 * [806] Number of Lines To Write String
 *
 * https://leetcode.com/problems/number-of-lines-to-write-string/description/
 *
 * algorithms
 * Easy (69.28%)
 * Likes:    612
 * Dislikes: 1338
 * Total Accepted:    87.8K
 * Total Submissions: 126.4K
 * Testcase Example:  '[10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]\n' +
  '"abcdefghijklmnopqrstuvwxyz"'
 *
 * You are given a string s of lowercase English letters and an array widths
 * denoting how many pixels wide each lowercase English letter is.
 * Specifically, widths[0] is the width of 'a', widths[1] is the width of 'b',
 * and so on.
 *
 * You are trying to write s across several lines, where each line is no longer
 * than 100 pixels. Starting at the beginning of s, write as many letters on
 * the first line such that the total width does not exceed 100 pixels. Then,
 * from where you stopped in s, continue writing as many letters as you can on
 * the second line. Continue this process until you have written all of s.
 *
 * Return an array result of length 2 where:
 *
 *
 * result[0] is the total number of lines.
 * result[1] is the width of the last line in pixels.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: widths =
 * [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],
 * s = "abcdefghijklmnopqrstuvwxyz"
 * Output: [3,60]
 * Explanation: You can write s as follows:
 * abcdefghij  // 100 pixels wide
 * klmnopqrst  // 100 pixels wide
 * uvwxyz      // 60 pixels wide
 * There are a total of 3 lines, and the last line is 60 pixels wide.
 *
 * Example 2:
 *
 *
 * Input: widths =
 * [4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],
 * s = "bbbcccdddaaa"
 * Output: [2,4]
 * Explanation: You can write s as follows:
 * bbbcccdddaa  // 98 pixels wide
 * a            // 4 pixels wide
 * There are a total of 2 lines, and the last line is 4 pixels wide.
 *
 *
 * Constraints:
 *
 *
 * widths.length == 26
 * 2 <= widths[i] <= 10
 * 1 <= s.length <= 1000
 * s contains only lowercase English letters.
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {
  let lines = 1
  let width = 0

  const LINE_WIDTH = 100

  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    const w = widths[char.codePointAt() - 97]

    if (width + w <= LINE_WIDTH) {
      width += w

      continue
    }

    lines += 1
    width = w
  }

  return [lines, width]
};
// @lc code=end

console.log(
  numberOfLines(
    [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],
    "abcdefghijklmnopqrstuvwxyz"
  )
)
