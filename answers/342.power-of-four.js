/*
 * @lc app=leetcode id=342 lang=javascript
 *
 * [342] Power of Four
 *
 * https://leetcode.com/problems/power-of-four/description/
 *
 * algorithms
 * Easy (46.77%)
 * Likes:    3949
 * Dislikes: 398
 * Total Accepted:    712.8K
 * Total Submissions: 1.5M
 * Testcase Example:  '16'
 *
 * Given an integer n, return true if it is a power of four. Otherwise, return
 * false.
 *
 * An integer n is a power of four, if there exists an integer x such that n ==
 * 4^x.
 *
 *
 * Example 1:
 * Input: n = 16
 * Output: true
 * Example 2:
 * Input: n = 5
 * Output: false
 * Example 3:
 * Input: n = 1
 * Output: true
 *
 *
 * Constraints:
 *
 *
 * -2^31 <= n <= 2^31 - 1
 *
 *
 *
 * Follow up: Could you solve it without loops/recursion?
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
  if (n <= 0) {
    return false
  }

  if (n === 1) {
    return true
  }

  for (;n != 4;) {
    if (n % 4 !== 0) {
      return false
    }

    n = n / 4
  }

  return true
}
// @lc code=end
