/*
 * @lc app=leetcode id=1018 lang=javascript
 *
 * [1018] Binary Prefix Divisible By 5
 *
 * https://leetcode.com/problems/binary-prefix-divisible-by-5/description/
 *
 * algorithms
 * Easy (46.84%)
 * Likes:    740
 * Dislikes: 190
 * Total Accepted:    59.7K
 * Total Submissions: 127.5K
 * Testcase Example:  '[0,1,1]'
 *
 * You are given a binary array nums (0-indexed).
 *
 * We define xi as the number whose binary representation is the subarray
 * nums[0..i] (from most-significant-bit to least-significant-bit).
 *
 *
 * For example, if nums = [1,0,1], then x0 = 1, x1 = 2, and x2 = 5.
 *
 *
 * Return an array of booleans answer where answer[i] is true if xi is
 * divisible by 5.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [0,1,1]
 * Output: [true,false
 * ,false]
 * Explanation: The input numbers in binary are 0, 01, 011; which are 0, 1, and
 * 3 in base-10.
 * Only the first number is divisible by 5, so answer[0] is true.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1,1,1]
 * Output: [false
 * ,false
 * ,false]
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
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {
  const result = []

  let left = 0

  /**
   * 这里不可以累计计算 nums[0] 到 nums[i] 的和然后 % 5 进行计算
   * 因为测试用例给的 nums 可能会远远超出 Number.MAX_SAFE_INTEGER
   * 导致一个超大的数字无法 % 5
   */
  for (let i = 0; i < nums.length; i++) {
    const bit = nums[i]
    const cur = left * 2 + bit
    left = cur % 5

    result.push(cur % 5 === 0)
  }

  return result
};

// @lc code=end
console.log(
  // prefixesDivBy5([1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1])
  prefixesDivBy5([1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1])
)
