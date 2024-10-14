/*
 * @lc app=leetcode id=485 lang=javascript
 *
 * [485] Max Consecutive Ones
 *
 * https://leetcode.com/problems/max-consecutive-ones/description/
 *
 * algorithms
 * Easy (60.70%)
 * Likes:    5902
 * Dislikes: 459
 * Total Accepted:    1.4M
 * Total Submissions: 2.2M
 * Testcase Example:  '[1,1,0,1,1,1]'
 *
 * Given a binary array nums, return the maximum number of consecutive 1's in
 * the array.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,1,0,1,1,1]
 * Output: 3
 * Explanation: The first two digits or the last three digits are consecutive
 * 1s. The maximum number of consecutive 1s is 3.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1,0,1,1,0,1]
 * Output: 2
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 10^5
 * nums[i] is either 0 or 1.
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let max = 0

  let count = 0
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]

    if (num === 0) {
      max = Math.max(max, count)
      count = 0

      continue
    }

    count += 1
  }

  max = Math.max(max, count)

  return max
};
// @lc code=end
