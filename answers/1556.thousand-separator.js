/*
 * @lc app=leetcode id=1556 lang=javascript
 *
 * [1556] Thousand Separator
 *
 * https://leetcode.com/problems/thousand-separator/description/
 *
 * algorithms
 * Easy (53.78%)
 * Likes:    494
 * Dislikes: 41
 * Total Accepted:    57K
 * Total Submissions: 106.1K
 * Testcase Example:  '987'
 *
 * Given an integer n, add a dot (".") as the thousands separator and return it
 * in string format.
 *
 *
 * Example 1:
 *
 *
 * Input: n = 987
 * Output: "987"
 *
 *
 * Example 2:
 *
 *
 * Input: n = 1234
 * Output: "1.234"
 *
 *
 *
 * Constraints:
 *
 *
 * 0 <= n <= 2^31 - 1
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
  const THOUSAND_SEPARATOR = '.'

  let result = ''

  const s = String(n)
  let count = 0

  for (let i = s.length - 1; i >= 0; i--) {
    count += 1

    if (count === 4) {
      count = 1

      result = THOUSAND_SEPARATOR + result
    }

    result = s[i] + result
  }

  return result
};
// @lc code=end
console.log(
  thousandSeparator(12456234)
)
