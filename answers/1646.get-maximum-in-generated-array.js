/*
 * @lc app=leetcode id=1646 lang=javascript
 *
 * [1646] Get Maximum in Generated Array
 *
 * https://leetcode.com/problems/get-maximum-in-generated-array/description/
 *
 * algorithms
 * Easy (50.63%)
 * Likes:    760
 * Dislikes: 949
 * Total Accepted:    112.9K
 * Total Submissions: 222.9K
 * Testcase Example:  '7'
 *
 * You are given an integer n. A 0-indexed integer array nums of length n + 1
 * is generated in the following way:
 *
 *
 * nums[0] = 0
 * nums[1] = 1
 * nums[2 * i] = nums[i] when 2 <= 2 * i <= n
 * nums[2 * i + 1] = nums[i] + nums[i + 1] when 2 <= 2 * i + 1 <= n
 *
 *
 * Return the maximum integer in the array nums​​​.
 *
 *
 * Example 1:
 *
 *
 * Input: n = 7
 * Output: 3
 * Explanation: According to the given rules:
 * ⁠ nums[0] = 0
 * ⁠ nums[1] = 1
 * ⁠ nums[(1 * 2) = 2] = nums[1] = 1
 * ⁠ nums[(1 * 2) + 1 = 3] = nums[1] + nums[2] = 1 + 1 = 2
 * ⁠ nums[(2 * 2) = 4] = nums[2] = 1
 * ⁠ nums[(2 * 2) + 1 = 5] = nums[2] + nums[3] = 1 + 2 = 3
 * ⁠ nums[(3 * 2) = 6] = nums[3] = 2
 * ⁠ nums[(3 * 2) + 1 = 7] = nums[3] + nums[4] = 2 + 1 = 3
 * Hence, nums = [0,1,1,2,1,3,2,3], and the maximum is max(0,1,1,2,1,3,2,3) =
 * 3.
 *
 *
 * Example 2:
 *
 *
 * Input: n = 2
 * Output: 1
 * Explanation: According to the given rules, nums = [0,1,1]. The maximum is
 * max(0,1,1) = 1.
 *
 *
 * Example 3:
 *
 *
 * Input: n = 3
 * Output: 2
 * Explanation: According to the given rules, nums = [0,1,1,2]. The maximum is
 * max(0,1,1,2) = 2.
 *
 *
 *
 * Constraints:
 *
 *
 * 0 <= n <= 100
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
  const nums = [0, 1, 1]

  if (n < 3) {
    return nums[n]
  }

  let result = 0

  const len = Math.floor(n / 2)
  for (let i = 1; i <= len; i++) {
    nums[2 * i] = nums[i]

    if (2 * i + 1 <= n) {
      nums[2 * i + 1] = nums[i] + nums[i + 1]

      result = Math.max(nums[2 * i + 1], result)
    }
  }

  return result
};
// @lc code=end
console.log(
  getMaximumGenerated(7)
)

// nums[2 * i + 1] = nums[2 * i] + nums[i + 1]
