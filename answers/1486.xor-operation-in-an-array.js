/*
 * @lc app=leetcode id=1486 lang=javascript
 *
 * [1486] XOR Operation in an Array
 *
 * https://leetcode.com/problems/xor-operation-in-an-array/description/
 *
 * algorithms
 * Easy (86.25%)
 * Likes:    1402
 * Dislikes: 334
 * Total Accepted:    210.2K
 * Total Submissions: 243.5K
 * Testcase Example:  '5\n0'
 *
 * You are given an integer n and an integer start.
 *
 * Define an array nums where nums[i] = start + 2 * i (0-indexed) and n ==
 * nums.length.
 *
 * Return the bitwise XOR of all elements of nums.
 *
 *
 * Example 1:
 *
 *
 * Input: n = 5, start = 0
 * Output: 8
 * Explanation: Array nums is equal to [0, 2, 4, 6, 8] where (0 ^ 2 ^ 4 ^ 6 ^
 * 8) = 8.
 * Where "^" corresponds to bitwise XOR operator.
 *
 *
 * Example 2:
 *
 *
 * Input: n = 4, start = 3
 * Output: 8
 * Explanation: Array nums is equal to [3, 5, 7, 9] where (3 ^ 5 ^ 7 ^ 9) =
 * 8.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= n <= 1000
 * 0 <= start <= 1000
 * n == nums.length
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
  let result = 0

  for (let i = 0; i < n; i++) {
    const num = start + 2 * i
    result ^= num
  }

  return result
};
// @lc code=end

console.log(
  // xorOperation(5, 0)
  xorOperation(4, 3)
)
