/*
 * @lc app=leetcode id=414 lang=javascript
 *
 * [414] Third Maximum Number
 *
 * https://leetcode.com/problems/third-maximum-number/description/
 *
 * algorithms
 * Easy (35.75%)
 * Likes:    3084
 * Dislikes: 3222
 * Total Accepted:    588.2K
 * Total Submissions: 1.6M
 * Testcase Example:  '[3,2,1]'
 *
 * Given an integer array nums, return the third distinct maximum number in
 * this array. If the third maximum does not exist, return the maximum
 * number.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [3,2,1]
 * Output: 1
 * Explanation:
 * The first distinct maximum is 3.
 * The second distinct maximum is 2.
 * The third distinct maximum is 1.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1,2]
 * Output: 2
 * Explanation:
 * The first distinct maximum is 2.
 * The second distinct maximum is 1.
 * The third distinct maximum does not exist, so the maximum (2) is returned
 * instead.
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [2,2,3,1]
 * Output: 1
 * Explanation:
 * The first distinct maximum is 3.
 * The second distinct maximum is 2 (both 2's are counted together since they
 * have the same value).
 * The third distinct maximum is 1.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 10^4
 * -2^31 <= nums[i] <= 2^31 - 1
 *
 *
 *
 * Follow up: Can you find an O(n) solution?
 */

// @lc code=start

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let candidates = [nums[0], -Infinity, -Infinity]

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i]

    if (num > candidates[0]) {
      candidates[2] = candidates[1]
      candidates[1] = candidates[0]
      candidates[0] = num
    } else if (num < candidates[0] && num > candidates[1]) {
      candidates[2] = candidates[1]
      candidates[1] = num
    } else if (num < candidates[1] && num > candidates[2]) {
      candidates[2] = num
    }
  }

  if (candidates[2] === -Infinity) {
    return candidates[0]
  }

  return candidates[2]
};
// @lc code=end

console.log(thirdMax([2, 2, 1]))
