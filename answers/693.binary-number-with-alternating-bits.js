/*
 * @lc app=leetcode id=693 lang=javascript
 *
 * [693] Binary Number with Alternating Bits
 *
 * https://leetcode.com/problems/binary-number-with-alternating-bits/description/
 *
 * algorithms
 * Easy (62.97%)
 * Likes:    1371
 * Dislikes: 112
 * Total Accepted:    142.6K
 * Total Submissions: 226.2K
 * Testcase Example:  '5'
 *
 * Given a positive integer, check whether it has alternating bits: namely, if
 * two adjacent bits will always have different values.
 *
 *
 * Example 1:
 *
 *
 * Input: n = 5
 * Output: true
 * Explanation: The binary representation of 5 is: 101
 *
 *
 * Example 2:
 *
 *
 * Input: n = 7
 * Output: false
 * Explanation: The binary representation of 7 is: 111.
 *
 * Example 3:
 *
 *
 * Input: n = 11
 * Output: false
 * Explanation: The binary representation of 11 is: 1011.
 *
 *
 * Constraints:
 *
 *
 * 1 <= n <= 2^31 - 1
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
  const MASK = 1
  let tail = n & MASK

  n = n >>> 1

  for (;n > 0;) {
    const digit = n & MASK

    if (digit === tail) {
      return false
    }

    tail = digit
    n = n >>> 1
  }

  return true
};
// @lc code=end

console.log(
  hasAlternatingBits(5)
)
