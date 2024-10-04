/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 *
 * https://leetcode.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (52.72%)
 * Likes:    8784
 * Dislikes: 874
 * Total Accepted:    1.3M
 * Total Submissions: 2.4M
 * Testcase Example:  '"11"\n"1"'
 *
 * Given two binary strings a and b, return their sum as a binary string.
 *
 *
 * Example 1:
 * Input: a = "11", b = "1"
 * Output: "100"
 * Example 2:
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 *
 *
 * Constraints:
 *
 *
 * 1 <= a.length, b.length <= 10^4
 * a and b consist only of '0' or '1' characters.
 * Each string does not contain leading zeros except for the zero itself.
 *
 *
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  const len = Math.max(a.length, b.length)
  let binary = ''

  let carry = 0
  for (let i = 0; i < len; i++) {
    let sum = (Number(a[a.length - 1 - i]) || 0) + (Number(b[b.length - 1 - i]) || 0) + carry

    if (sum >= 2) {
      sum -= 2
      carry = 1
    } else {
      carry = 0
    }

    binary = sum + binary
  }

  if (carry === 1) {
    binary = carry + binary
  }

  return binary
}
// @lc code=end
