/*
 * @lc app=leetcode id=1281 lang=javascript
 *
 * [1281] Subtract the Product and Sum of Digits of an Integer
 *
 * https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/description/
 *
 * algorithms
 * Easy (86.62%)
 * Likes:    2609
 * Dislikes: 235
 * Total Accepted:    532.5K
 * Total Submissions: 614.8K
 * Testcase Example:  '234'
 *
 * Given an integer number n, return the difference between the product of its
 * digits and the sum of its digits.
 *
 * Example 1:
 *
 *
 * Input: n = 234
 * Output: 15
 * Explanation:
 * Product of digits = 2 * 3 * 4 = 24
 * Sum of digits = 2 + 3 + 4 = 9
 * Result = 24 - 9 = 15
 *
 *
 * Example 2:
 *
 *
 * Input: n = 4421
 * Output: 21
 * Explanation:
 * Product of digits = 4 * 4 * 2 * 1 = 32
 * Sum of digits = 4 + 4 + 2 + 1 = 11
 * Result = 32 - 11 = 21
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= n <= 10^5
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  let product = 1
  let sum = 0

  n = splitN(n)

  for (let i = n.length - 1; i >= 0; i--) {
    product *= n[i]
    sum += n[i]
  }

  return product - sum
};

function splitN(n) {
  const arr = []

  for (;n > 0;) {
    arr.push(n % 10)
    n = Math.floor(n / 10)
  }

  return arr
}
// @lc code=end

console.log(
  subtractProductAndSum(234)
)
