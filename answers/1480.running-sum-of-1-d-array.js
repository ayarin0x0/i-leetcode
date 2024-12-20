/*
 * @lc app=leetcode id=1480 lang=javascript
 *
 * [1480] Running Sum of 1d Array
 *
 * https://leetcode.com/problems/running-sum-of-1d-array/description/
 *
 * algorithms
 * Easy (86.88%)
 * Likes:    7995
 * Dislikes: 351
 * Total Accepted:    2M
 * Total Submissions: 2.2M
 * Testcase Example:  '[1,2,3,4]'
 *
 * Given an array nums. We define a running sum of an array as runningSum[i] =
 * sum(nums[0]…nums[i]).
 *
 * Return the running sum of nums.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,2,3,4]
 * Output: [1,3,6,10]
 * Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
 *
 * Example 2:
 *
 *
 * Input: nums = [1,1,1,1,1]
 * Output: [1,2,3,4,5]
 * Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1,
 * 1+1+1+1+1].
 *
 * Example 3:
 *
 *
 * Input: nums = [3,1,2,10,1]
 * Output: [3,4,6,16,17]
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 1000
 * -10^6 <= nums[i] <= 10^6
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  const result = []
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    sum += num

    result[i] = sum
  }

  return result
};
// @lc code=end
