/*
 * @lc app=leetcode id=258 lang=javascript
 *
 * [258] Add Digits
 *
 * https://leetcode.com/problems/add-digits/description/
 *
 * algorithms
 * Easy (65.98%)
 * Likes:    4889
 * Dislikes: 1940
 * Total Accepted:    852.1K
 * Total Submissions: 1.3M
 * Testcase Example:  '38'
 *
 * Given an integer num, repeatedly add all its digits until the result has
 * only one digit, and return it.
 *
 *
 * Example 1:
 *
 *
 * Input: num = 38
 * Output: 2
 * Explanation: The process is
 * 38 --> 3 + 8 --> 11
 * 11 --> 1 + 1 --> 2
 * Since 2 has only one digit, return it.
 *
 *
 * Example 2:
 *
 *
 * Input: num = 0
 * Output: 0
 *
 *
 *
 * Constraints:
 *
 *
 * 0 <= num <= 2^31 - 1
 *
 *
 *
 * Follow up: Could you do it without any loop/recursion in O(1) runtime?
 *
 */

// @lc code=start
var addDigits2 = function(num) {
  const raw = num
  for (;;) {
    let sum = 0

    for (;num > 0;) {
      const digit = num % 10
      sum += digit
      num = Math.floor(num / 10)
    }

    if (sum < 10) {
      console.log(`${raw} -> ${sum}`)
      return sum
    }

    num = sum
  }
}

for (let i = 0; i < 200; i++) {
  if (i % 10 === 0) {
    console.log('-------')
  }
  addDigits(i)
}

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  if (num === 0) {
    return num
  }

  const remainder = num % 9

  return remainder === 0 ? 9 : remainder
}
// @lc code=end
