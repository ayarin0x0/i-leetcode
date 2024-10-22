/*
 * @lc app=leetcode id=504 lang=javascript
 *
 * [504] Base 7
 *
 * https://leetcode.com/problems/base-7/description/
 *
 * algorithms
 * Easy (50.82%)
 * Likes:    813
 * Dislikes: 233
 * Total Accepted:    145.6K
 * Total Submissions: 286.2K
 * Testcase Example:  '100'
 *
 * Given an integer num, return a string of its base 7 representation.
 *
 *
 * Example 1:
 * Input: num = 100
 * Output: "202"
 * Example 2:
 * Input: num = -7
 * Output: "-10"
 *
 *
 * Constraints:
 *
 *
 * -10^7 <= num <= 10^7
 *
 *
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
  if (num === 0) {
    return '0'
  }

  let result = ''
  const prefix = num < 0 ? '-' : ''

  num = Math.abs(num)

  for (;num > 0;) {
    const cur = num % 7
    num = Math.floor(num / 7)

    result = cur + result
  }

  return prefix + result
};
// @lc code=end

console.log(
  convertToBase7(0)
)
