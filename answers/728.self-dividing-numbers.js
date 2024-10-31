/*
 * @lc app=leetcode id=728 lang=javascript
 *
 * [728] Self Dividing Numbers
 *
 * https://leetcode.com/problems/self-dividing-numbers/description/
 *
 * algorithms
 * Easy (79.06%)
 * Likes:    1798
 * Dislikes: 378
 * Total Accepted:    260.6K
 * Total Submissions: 329.4K
 * Testcase Example:  '1\n22'
 *
 * A self-dividing number is a number that is divisible by every digit it
 * contains.
 *
 *
 * For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 ==
 * 0, and 128 % 8 == 0.
 *
 *
 * A self-dividing number is not allowed to contain the digit zero.
 *
 * Given two integers left and right, return a list of all the self-dividing
 * numbers in the range [left, right] (both inclusive).
 *
 *
 * Example 1:
 * Input: left = 1, right = 22
 * Output: [1,2,3,4,5,6,7,8,9,11,12,15,22]
 * Example 2:
 * Input: left = 47, right = 85
 * Output: [48,55,66,77]
 *
 *
 * Constraints:
 *
 *
 * 1 <= left <= right <= 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  const result = []

  for (let i = left; i <= right; i++) {
    if (isSelfDividing(i)) {
      result.push(i)
    }
  }

  return result

  function isSelfDividing(num) {
    const digits = String(num).split('')

    for (let i = 0; i < digits.length; i++) {
      const digit = digits[i]

      if (digit === '0') {
        return false
      }

      if (num % Number(digit) !== 0) {
        return false
      }
    }

    return true
  }
};
// @lc code=end
