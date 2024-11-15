/*
 * @lc app=leetcode id=989 lang=javascript
 *
 * [989] Add to Array-Form of Integer
 *
 * https://leetcode.com/problems/add-to-array-form-of-integer/description/
 *
 * algorithms
 * Easy (45.08%)
 * Likes:    3483
 * Dislikes: 295
 * Total Accepted:    278.2K
 * Total Submissions: 617.7K
 * Testcase Example:  '[1,2,0,0]\n34'
 *
 * The array-form of an integer num is an array representing its digits in left
 * to right order.
 *
 *
 * For example, for num = 1321, the array form is [1,3,2,1].
 *
 *
 * Given num, the array-form of an integer, and an integer k, return the
 * array-form of the integer num + k.
 *
 *
 * Example 1:
 *
 *
 * Input: num = [1,2,0,0], k = 34
 * Output: [1,2,3,4]
 * Explanation: 1200 + 34 = 1234
 *
 *
 * Example 2:
 *
 *
 * Input: num = [2,7,4], k = 181
 * Output: [4,5,5]
 * Explanation: 274 + 181 = 455
 *
 *
 * Example 3:
 *
 *
 * Input: num = [2,1,5], k = 806
 * Output: [1,0,2,1]
 * Explanation: 215 + 806 = 1021
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= num.length <= 10^4
 * 0 <= num[i] <= 9
 * num does not contain any leading zeros except for the zero itself.
 * 1 <= k <= 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
  if (k === 0) {
    return num
  }

  k = toArrayForm(k)

  const result = []

  let base
  let another

  if (num.length >= k.length) {
    base = num
    another = k
  } else {
    base = k
    another = num
  }

  let basePointer = base.length - 1
  let anotherPointer = another.length - 1

  let carry = 0

  for (let i = 0; i < base.length; i++) {
    const a = base[basePointer - i]
    const b = another[anotherPointer - i] ?? 0

    const sum = a + b + carry

    result.unshift(sum % 10)
    carry = Math.floor(sum / 10)
  }

  if (carry > 0) {
    result.unshift(carry)
  }

  return result
};

function toArrayForm(k) {
  const result = []

  for (;k > 0;) {
    result.unshift(k % 10)
    k = Math.floor(k / 10)
  }

  return result
}
// @lc code=end

console.log(
  // addToArrayForm([1, 2, 0, 0], 0)
  addToArrayForm([0], 23)
  // addToArrayForm([1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3], 516)
)
