/*
 * @lc app=leetcode id=1608 lang=javascript
 *
 * [1608] Special Array With X Elements Greater Than or Equal X
 *
 * https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/description/
 *
 * algorithms
 * Easy (66.86%)
 * Likes:    2238
 * Dislikes: 447
 * Total Accepted:    207.5K
 * Total Submissions: 310.8K
 * Testcase Example:  '[3,5]'
 *
 * You are given an array nums of non-negative integers. nums is considered
 * special if there exists a number x such that there are exactly x numbers in
 * nums that are greater than or equal to x.
 *
 * Notice that x does not have to be an element in nums.
 *
 * Return x if the array is special, otherwise, return -1. It can be proven
 * that if nums is special, the value for x is unique.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [3,5]
 * Output: 2
 * Explanation: There are 2 values (3 and 5) that are greater than or equal to
 * 2.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [0,0]
 * Output: -1
 * Explanation: No numbers fit the criteria for x.
 * If x = 0, there should be 0 numbers >= x, but there are 2.
 * If x = 1, there should be 1 number >= x, but there are 0.
 * If x = 2, there should be 2 numbers >= x, but there are 0.
 * x cannot be greater since there are only 2 numbers in nums.
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [0,4,3,0,4]
 * Output: 3
 * Explanation: There are 3 values that are greater than or equal to 3.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 100
 * 0 <= nums[i] <= 1000
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
  nums.sort((a, b) => a - b)

  const len = nums.length

  let prev = -1

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    const count = len - i

    if (num === prev) {
      continue
    }

    if (num === count) {
      return num
    }

    if (num > count) {
      // num = count && num > prev
      if (count > prev) {
        return count
      }

      return -1
    }

    prev = num
  }

  return -1
};
// @lc code=end
console.log(
  specialArray([3, 6, 7, 7, 0])
)
