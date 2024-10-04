/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 *
 * https://leetcode.com/problems/sqrtx/description/
 *
 * algorithms
 * Easy (37.95%)
 * Likes:    7378
 * Dislikes: 4321
 * Total Accepted:    1.7M
 * Total Submissions: 4.3M
 * Testcase Example:  '4'
 *
 * Given a non-negative integer x, return the square root of x rounded down to
 * the nearest integer. The returned integer should be non-negative as well.
 *
 * You must not use any built-in exponent function or operator.
 *
 *
 * For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: x = 4
 * Output: 2
 * Explanation: The square root of 4 is 2, so we return 2.
 *
 *
 * Example 2:
 *
 *
 * Input: x = 8
 * Output: 2
 * Explanation: The square root of 8 is 2.82842..., and since we round it down
 * to the nearest integer, 2 is returned.
 *
 *
 *
 * Constraints:
 *
 *
 * 0 <= x <= 2^31 - 1
 *
 *
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x < 1) {
    return 0
  }

  if (x < 4) {
    return 1
  }

  let left = 2
  let right = parseInt(x / 2)

  for (let i = 0; i < 50; i++) {
    const offset = parseInt((right - left) / 2)
    const middle = left + offset

    if (offset === 0) {
      return middle
    }

    const middlePow = middle * middle

    if (middlePow > x) {
      right = middle
    } else if (middle < x) {
      left = middle
    } else {
      return middle
    }
  }
}
// @lc code=end
