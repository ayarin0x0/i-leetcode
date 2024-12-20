/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 *
 * https://leetcode.com/problems/happy-number/description/
 *
 * algorithms
 * Easy (55.36%)
 * Likes:    10533
 * Dislikes: 1487
 * Total Accepted:    1.6M
 * Total Submissions: 2.8M
 * Testcase Example:  '19'
 *
 * Write an algorithm to determine if a number n is happy.
 *
 * A happy number is a number defined by the following process:
 *
 *
 * Starting with any positive integer, replace the number by the sum of the
 * squares of its digits.
 * Repeat the process until the number equals 1 (where it will stay), or it
 * loops endlessly in a cycle which does not include 1.
 * Those numbers for which this process ends in 1 are happy.
 *
 *
 * Return true if n is a happy number, and false if not.
 *
 *
 * Example 1:
 *
 *
 * Input: n = 19
 * Output: true
 * Explanation:
 * 1^2 + 9^2 = 82
 * 8^2 + 2^2 = 68
 * 6^2 + 8^2 = 100
 * 1^2 + 0^2 + 0^2 = 1
 *
 *
 * Example 2:
 *
 *
 * Input: n = 2
 * Output: false
 *
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
var isHappy = function(n) {
  const tracker = Object.create(null)

  for (;;) {
    let sum = 0

    for (;n > 0;) {
      const digit = n % 10
      sum += digit * digit
      n = Math.floor(n / 10)
    }

    // 收束到 1
    if (sum === 1) {
      return true
    }

    // 命中历史记录, 遇见了 endless loop
    if (tracker[sum] === true) {
      return false
    }

    // 记录到历史中
    tracker[sum] = true
    n = sum
  }
}
// @lc code=end
