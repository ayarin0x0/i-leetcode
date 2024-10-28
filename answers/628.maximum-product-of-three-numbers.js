/*
 * @lc app=leetcode id=628 lang=javascript
 *
 * [628] Maximum Product of Three Numbers
 *
 * https://leetcode.com/problems/maximum-product-of-three-numbers/description/
 *
 * algorithms
 * Easy (45.16%)
 * Likes:    4264
 * Dislikes: 681
 * Total Accepted:    360.7K
 * Total Submissions: 798.5K
 * Testcase Example:  '[1,2,3]'
 *
 * Given an integer array nums, find three numbers whose product is maximum and
 * return the maximum product.
 *
 *
 * Example 1:
 * Input: nums = [1,2,3]
 * Output: 6
 * Example 2:
 * Input: nums = [1,2,3,4]
 * Output: 24
 * Example 3:
 * Input: nums = [-1,-2,-3]
 * Output: -6
 *
 *
 * Constraints:
 *
 *
 * 3 <= nums.length <= 10^4
 * -1000 <= nums[i] <= 1000
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  nums.sort((a, b) => a - b)

  const negativeFirst = nums[0]
  const negativeSecond = nums[1]

  const positiveFirst = nums[nums.length - 1]
  const positiveSecond = nums[nums.length - 2]
  const positiveThrid = nums[nums.length - 3]

  return Math.max(positiveFirst * negativeFirst * negativeSecond, positiveFirst * positiveSecond * positiveThrid)
};
// @lc code=end

console.log(
  maximumProduct([-10000,-2, -1,2,3,4,5])
)
