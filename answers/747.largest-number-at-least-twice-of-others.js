/*
 * @lc app=leetcode id=747 lang=javascript
 *
 * [747] Largest Number At Least Twice of Others
 *
 * https://leetcode.com/problems/largest-number-at-least-twice-of-others/description/
 *
 * algorithms
 * Easy (49.65%)
 * Likes:    1230
 * Dislikes: 912
 * Total Accepted:    267.4K
 * Total Submissions: 537K
 * Testcase Example:  '[3,6,1,0]'
 *
 * You are given an integer array nums where the largest integer is unique.
 *
 * Determine whether the largest element in the array is at least twice as much
 * as every other number in the array. If it is, return the index of the
 * largest element, or return -1 otherwise.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [3,6,1,0]
 * Output: 1
 * Explanation: 6 is the largest integer.
 * For every other number in the array x, 6 is at least twice as big as x.
 * The index of value 6 is 1, so we return 1.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1,2,3,4]
 * Output: -1
 * Explanation: 4 is less than twice the value of 3, so we return -1.
 *
 *
 *
 * Constraints:
 *
 *
 * 2 <= nums.length <= 50
 * 0 <= nums[i] <= 100
 * The largest element in nums is unique.
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
  let candidate
  let candidateIndex

  let max = nums[0]
  let maxIndex = 0

  // 从 0, 1 间选一个小的开始,
  // 避免之后的流程中出现无法判断第一个数是否是其他数两倍的情况,
  // 比如: [5, 0, 0, 1] 中, 5 一开始就是最大的, 无法与其他数做两倍的比较
  if (nums[0] < nums[1]) {
    candidate = nums[1]
    candidateIndex = 1

    max = nums[0]
    maxIndex = 0
  } else {
    candidate = nums[0]
    candidateIndex = 0

    max = nums[1]
    maxIndex = 1
  }

  let isWinner = false

  for (let i = 2; i < nums.length; i++) {
    const num = nums[i]

    if (num > max) {
      if (num >= max * 2) {
        isWinner = true
      } else {
        isWinner = false
      }

      maxIndex = i
      max = num
    } else {
      if (max < num * 2) {
        isWinner = false
      }
    }
  }

  if (max > candidate) {
    if (max >= candidate * 2 && isWinner) {
      return maxIndex
    } else {
      return -1
    }
  } else {
    if (candidate >= max * 2) {
      return candidateIndex
    } else {
      return -1
    }
  }
};
// @lc code=end

console.log(
  dominantIndex([1, 2, 3, 4])
)

// 2, 1
