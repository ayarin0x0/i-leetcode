/*
 * @lc app=leetcode id=961 lang=javascript
 *
 * [961] N-Repeated Element in Size 2N Array
 *
 * https://leetcode.com/problems/n-repeated-element-in-size-2n-array/description/
 *
 * algorithms
 * Easy (77.02%)
 * Likes:    1360
 * Dislikes: 332
 * Total Accepted:    249K
 * Total Submissions: 323.1K
 * Testcase Example:  '[1,2,3,3]'
 *
 * You are given an integer array nums with the following properties:
 *
 *
 * nums.length == 2 * n.
 * nums contains n + 1 unique elements.
 * Exactly one element of nums is repeated n times.
 *
 *
 * Return the element that is repeated n times.
 *
 *
 * Example 1:
 * Input: nums = [1,2,3,3]
 * Output: 3
 * Example 2:
 * Input: nums = [2,1,2,5,3,2]
 * Output: 2
 * Example 3:
 * Input: nums = [5,1,5,2,5,3,5,4]
 * Output: 5
 *
 *
 * Constraints:
 *
 *
 * 2 <= n <= 5000
 * nums.length == 2 * n
 * 0 <= nums[i] <= 10^4
 * nums contains n + 1 unique elements and one of them is repeated exactly n
 * times.
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
  const map = Object.create(null)

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]

    if (map[num] === undefined) {
      map[num] = 1

      continue
    }

    return num
  }
};
// @lc code=end

console.log(
  // repeatedNTimes([1, 2, 3, 3])
  repeatedNTimes([5,1,5,2,5,3,5,4])
)
