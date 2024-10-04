/*
 * @lc app=leetcode id=263 lang=javascript
 *
 * [263] Ugly Number
 *
 * https://leetcode.com/problems/ugly-number/description/
 *
 * algorithms
 * Easy (42.03%)
 * Likes:    3439
 * Dislikes: 1725
 * Total Accepted:    563.4K
 * Total Submissions: 1.3M
 * Testcase Example:  '6'
 *
 * An ugly number is a positive integer whose prime factors are limited to 2,
 * 3, and 5.
 *
 * Given an integer n, return true if n is an ugly number.
 *
 *
 * Example 1:
 *
 *
 * Input: n = 6
 * Output: true
 * Explanation: 6 = 2 × 3
 *
 *
 * Example 2:
 *
 *
 * Input: n = 1
 * Output: true
 * Explanation: 1 has no prime factors, therefore all of its prime factors are
 * limited to 2, 3, and 5.
 *
 *
 * Example 3:
 *
 *
 * Input: n = 14
 * Output: false
 * Explanation: 14 is not ugly since it includes the prime factor 7.
 *
 *
 *
 * Constraints:
 *
 *
 * -2^31 <= n <= 2^31 - 1
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
  if (n === 0) {
    return false
  }

  for (;n !== 1;) {
    let remainder = n % 2

    if (remainder === 0) {
      n = n / 2
      continue
    }

    remainder = n % 3

    if (remainder === 0) {
      n = n / 3
      continue
    }

    remainder = n % 5

    if (remainder === 0) {
      n = n / 5
      continue
    }

    return false
  }

  return true
}
// @lc code=end
console.log(
  isUgly(7)
)
