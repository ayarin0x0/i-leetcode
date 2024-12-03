/*
 * @lc app=leetcode id=1437 lang=javascript
 *
 * [1437] Check If All 1's Are at Least Length K Places Away
 *
 * https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/description/
 *
 * algorithms
 * Easy (58.15%)
 * Likes:    641
 * Dislikes: 225
 * Total Accepted:    83.2K
 * Total Submissions: 143.3K
 * Testcase Example:  '[1,0,0,0,1,0,0,1]\n2'
 *
 * Given an binary array nums and an integer k, return true if all 1's are at
 * least k places away from each other, otherwise return false.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,0,0,0,1,0,0,1], k = 2
 * Output: true
 * Explanation: Each of the 1s are at least 2 places away from each other.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1,0,0,1,0,1], k = 2
 * Output: false
 * Explanation: The second 1 and third 1 are only one apart from each
 * other.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 10^5
 * 0 <= k <= nums.length
 * nums[i] is 0 or 1
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
  if (k === 0) {
    return true
  }

  let i = 0

  for (;i < nums.length; i++) {
    if (nums[i] === 1) {
      break
    }
  }

  let count = 0
  i += 1

  for (; i < nums.length; i++) {
    const num = nums[i]

    if (num === 0) {
      count += 1

      continue
    }

    if (count < k) {
      return false
    }

    count = 0
  }

  return true
};
// @lc code=end

console.log(
  kLengthApart([1,0,0,0,1,0,0,1], 2)
  // kLengthApart([0,0,0,1,0,1], 2)
  // kLengthApart([0,1,0,0,1,0,0,1], 2)
)
