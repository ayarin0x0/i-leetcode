/*
 * @lc app=leetcode id=1005 lang=javascript
 *
 * [1005] Maximize Sum Of Array After K Negations
 *
 * https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/description/
 *
 * algorithms
 * Easy (51.53%)
 * Likes:    1580
 * Dislikes: 118
 * Total Accepted:    101.1K
 * Total Submissions: 195.9K
 * Testcase Example:  '[4,2,3]\n1'
 *
 * Given an integer array nums and an integer k, modify the array in the
 * following way:
 *
 *
 * choose an index i and replace nums[i] with -nums[i].
 *
 *
 * You should apply this process exactly k times. You may choose the same index
 * i multiple times.
 *
 * Return the largest possible sum of the array after modifying it in this
 * way.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [4,2,3], k = 1
 * Output: 5
 * Explanation: Choose index 1 and nums becomes [4,-2,3].
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [3,-1,0,2], k = 3
 * Output: 6
 * Explanation: Choose indices (1, 2, 2) and nums becomes [3,1,0,2].
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [2,-3,-1,5,-4], k = 2
 * Output: 13
 * Explanation: Choose indices (1, 4) and nums becomes [2,3,-1,5,4].
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 10^4
 * -100 <= nums[i] <= 100
 * 1 <= k <= 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
  nums.sort((a, b) => a - b)

  let result = 0
  let i = 0

  // handle negatives
  for (;i < nums.length; i++) {
    const num = nums[i]

    if (num >= 0 || k === 0) {
      break
    }

    nums[i] = -num
    k -= 1
  }

  if (k > 0) {
    i = Math.max(i - 1, 0)

    if (k % 2 === 1) {
      const lastNegative = Math.abs(nums[i])
      const firstPositive = nums[i + 1] ?? Infinity

      if (lastNegative >= firstPositive) {
        nums[i + 1] = -firstPositive
      } else {
        nums[i] = -lastNegative
      }
    }
  }

  for (let i = 0; i < nums.length; i++) {
    result += nums[i]
  }

  return result
};
// @lc code=end

console.log(
  // largestSumAfterKNegations([4,2,3], 1)
  // largestSumAfterKNegations([3,-1,0,2], 3)
  // largestSumAfterKNegations([2,-3,-1,5,-4], 2)
  // largestSumAfterKNegations([5], 2)
  // largestSumAfterKNegations([-8,3,-5,-3,-5,-2], 6)
  largestSumAfterKNegations([-2,5,0,2,-2], 3)
)

// -2 -2 0 2 5
