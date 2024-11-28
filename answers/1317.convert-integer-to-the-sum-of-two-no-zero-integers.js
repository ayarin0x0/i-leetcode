/*
 * @lc app=leetcode id=1317 lang=javascript
 *
 * [1317] Convert Integer to the Sum of Two No-Zero Integers
 *
 * https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/description/
 *
 * algorithms
 * Easy (54.04%)
 * Likes:    417
 * Dislikes: 316
 * Total Accepted:    52.1K
 * Total Submissions: 96.7K
 * Testcase Example:  '2'
 *
 * No-Zero integer is a positive integer that does not contain any 0 in its
 * decimal representation.
 *
 * Given an integer n, return a list of two integers [a, b] where:
 *
 *
 * a and b are No-Zero integers.
 * a + b = n
 *
 *
 * The test cases are generated so that there is at least one valid solution.
 * If there are many valid solutions, you can return any of them.
 *
 *
 * Example 1:
 *
 *
 * Input: n = 2
 * Output: [1,1]
 * Explanation: Let a = 1 and b = 1.
 * Both a and b are no-zero integers, and a + b = 2 = n.
 *
 *
 * Example 2:
 *
 *
 * Input: n = 11
 * Output: [2,9]
 * Explanation: Let a = 2 and b = 9.
 * Both a and b are no-zero integers, and a + b = 11 = n.
 * Note that there are other valid answers as [8, 3] that can be accepted.
 *
 *
 *
 * Constraints:
 *
 *
 * 2 <= n <= 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
  for (let i = 1; i < n; i++) {
    const a = i
    const b = n - i

    if (String(a).includes('0') || String(b).includes('0')) {
      continue
    }

    return [a, b]
  }
};
// @lc code=end

console.log(
  getNoZeroIntegers(11)
)
