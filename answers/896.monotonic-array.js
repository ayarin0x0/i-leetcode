/*
 * @lc app=leetcode id=896 lang=javascript
 *
 * [896] Monotonic Array
 *
 * https://leetcode.com/problems/monotonic-array/description/
 *
 * algorithms
 * Easy (61.41%)
 * Likes:    3097
 * Dislikes: 96
 * Total Accepted:    467.8K
 * Total Submissions: 761.6K
 * Testcase Example:  '[1,2,2,3]'
 *
 * An array is monotonic if it is either monotone increasing or monotone
 * decreasing.
 *
 * An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j].
 * An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].
 *
 * Given an integer array nums, return true if the given array is monotonic, or
 * false otherwise.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,2,2,3]
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [6,5,4,4]
 * Output: true
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [1,3,2]
 * Output: false
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 10^5
 * -10^5 <= nums[i] <= 10^5
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
  if (nums.length < 3) {
    return true
  }

  // check
  let trend = 0

  let i = 1

  for (;i < nums.length; i++) {
    const cur = nums[i]
    const prev = nums[i - 1]

    if (cur === prev) {
      continue
    }

    if (cur > prev) {
      trend = 1
    } else {
      trend = -1
    }

    i += 1

    break
  }

  if (trend === 0) {
    return true
  }

  for (;i < nums.length; i++) {
    const cur = nums[i]
    const prev = nums[i - 1]

    if (cur === prev) {
      continue
    }

    const sign = Math.sign(cur - prev)

    if (sign !== trend) {
      return false
    }
  }

  return true
};
// @lc code=end

console.log(
  isMonotonic([5, 5])
)
