/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 *
 * https://leetcode.com/problems/search-insert-position/description/
 *
 * algorithms
 * Easy (44.46%)
 * Likes:    14830
 * Dislikes: 638
 * Total Accepted:    2.4M
 * Total Submissions: 5.5M
 * Testcase Example:  '[1,3,5,6]\n5'
 *
 * Given a sorted array of distinct integers and a target value, return the
 * index if the target is found. If not, return the index where it would be if
 * it were inserted in order.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,3,5,6], target = 5
 * Output: 2
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1,3,5,6], target = 2
 * Output: 1
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [1,3,5,6], target = 7
 * Output: 4
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 10^4
 * -10^4 <= nums[i] <= 10^4
 * nums contains distinct values sorted in ascending order.
 * -10^4 <= target <= 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let leftPointer = 0
  let rightPointer = nums.length

  if (target < nums[leftPointer]) {
    return leftPointer
  }

  if (target === nums[leftPointer]) {
    return leftPointer
  }

  if (target > nums[rightPointer - 1]) {
    return rightPointer
  }

  if (target === nums[rightPointer - 1]) {
    return rightPointer - 1
  }

  let position = 0

  for (;;) {
    position = parseInt((leftPointer + rightPointer) / 2)

    const leftValue = nums[position - 1] || -Infinity
    const rightValue = nums[position] || Infinity

    if (target < leftValue) {
      rightPointer = position

      continue
    }

    if (target > rightValue) {
      leftPointer = position

      continue
    }

    if (target === leftValue) {
      return position - 1
    }

    if (target === rightValue) {
      return position
    }

    if (target > leftValue && target < rightValue) {
      return position
    }
  }
}
// @lc code=end
