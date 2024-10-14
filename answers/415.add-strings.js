/*
 * @lc app=leetcode id=415 lang=javascript
 *
 * [415] Add Strings
 *
 * https://leetcode.com/problems/add-strings/description/
 *
 * algorithms
 * Easy (51.60%)
 * Likes:    5084
 * Dislikes: 762
 * Total Accepted:    719.1K
 * Total Submissions: 1.4M
 * Testcase Example:  '"11"\n"123"'
 *
 * Given two non-negative integers, num1 and num2 represented as string, return
 * the sum of num1 and num2 as a string.
 *
 * You must solve the problem without using any built-in library for handling
 * large integers (such as BigInteger). You must also not convert the inputs to
 * integers directly.
 *
 *
 * Example 1:
 *
 *
 * Input: num1 = "11", num2 = "123"
 * Output: "134"
 *
 *
 * Example 2:
 *
 *
 * Input: num1 = "456", num2 = "77"
 * Output: "533"
 *
 *
 * Example 3:
 *
 *
 * Input: num1 = "0", num2 = "0"
 * Output: "0"
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= num1.length, num2.length <= 10^4
 * num1 and num2 consist of only digits.
 * num1 and num2 don't have any leading zeros except for the zero itself.
 *
 *
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let result = ''

  let base
  let another

  // base always > another
  if (num1.length >= num2.length) {
    base = num1
    another = num2
  } else {
    base = num2
    another = num1
  }

  let carry = 0

  let anotherPointer = another.length - 1

  for (let i = base.length - 1; i >= 0; i--, anotherPointer--) {
    const sum = (base[i] - '0') + ((another[anotherPointer] || 0)  - '0') + carry
    carry = sum >= 10 ? 1 : 0

    result = sum % 10 + result
  }

  if (carry !== 0) {
    result = carry + result
  }

  return result
};
// @lc code=end

console.log(
  addStrings('584', '18')
)
