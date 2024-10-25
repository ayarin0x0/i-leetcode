/*
 * @lc app=leetcode id=594 lang=javascript
 *
 * [594] Longest Harmonious Subsequence
 *
 * https://leetcode.com/problems/longest-harmonious-subsequence/description/
 *
 * algorithms
 * Easy (55.50%)
 * Likes:    2203
 * Dislikes: 268
 * Total Accepted:    174.9K
 * Total Submissions: 314.3K
 * Testcase Example:  '[1,3,2,2,5,2,3,7]'
 *
 * We define a harmonious array as an array where the difference between its
 * maximum value and its minimum value is exactly 1.
 *
 * Given an integer array nums, return the length of its longest harmonious
 * subsequence among all its possible subsequences.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,3,2,2,5,2,3,7]
 *
 * Output: 5
 *
 * Explanation:
 *
 * The longest harmonious subsequence is [3,2,2,2,3].
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1,2,3,4]
 *
 * Output: 2
 *
 * Explanation:
 *
 * The longest harmonious subsequences are [1,2], [2,3], and [3,4], all of
 * which have a length of 2.
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [1,1,1,1]
 *
 * Output: 0
 *
 * Explanation:
 *
 * No harmonic subsequence exists.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 2 * 10^4
 * -10^9 <= nums[i] <= 10^9
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  /**
   * [num, rightBorder]
   * e.g. [1, 2, 2, 2, 3]
   * 1: [1, 1]
   * 2: [2, 4]
   * 3: [3, 5]
   */
  const borderMap = []

  nums.sort((a, b) => a - b)

  let baseNum = nums[0]
  let border = {
    left: 0,
    right: 1,
  }

  for (let i = 1; i < nums.length + 1; i++) {
    const num = nums[i]

    if (num === baseNum) {
      border.right = i + 1

      continue
    }

    borderMap.push(baseNum, border.right)

    baseNum = num
    border.left = border.right // 新的 baseNum 的左边界就是上一个 baseNum 的右边界
    border.right = i + 1 // 新的 baseNum 的右边界就是当前的 i + 1, 也等同于 border.left + 1
  }

  // 只有一组数字
  if (borderMap.length <= 2) {
    return 0
  }

  let leftBorder = 0
  let max = 0

  for (let i = 3; i < borderMap.length; i += 2) {
    const prevNum = borderMap[i - 3]
    const prevNumRightBorder = borderMap[i - 2]

    const curNum = borderMap[i - 1]
    const curNumRightBorder = borderMap[i]

    if (curNum - prevNum === 1) {
      max = Math.max(curNumRightBorder - leftBorder, max)
    }

    leftBorder = prevNumRightBorder
  }

  return max
};
// @lc code=end

console.log(
  // findLHS([1,3,2,2,5,2,3,7]),
  // findLHS([1,2,3,4]),
  // findLHS([1,1,1,1]),
  // findLHS([1,3,5,7,9,11,13,15,17]),
  // findLHS([6993,-5344,4561,-5097,-6127,2565,7720,9245,9574,5103,8081,5074,3797,7441,5724,1726,1253,4923,6568,6114,186,1921,2150,8583,7266,3355,-8676,6936,3071,9464,-8216,6794,2405,9430,4485,8649,6503,6273,1116,-1186,3549,2169,6480,9574,-4935,8356,2346,2868,3301,8544,7345,2799,1001,9205,9366,6725,1744,4783,8438,3857,1797,9746,-8427,1814,1789,2925,1126,5669,3617,1890,6193,9153,3087,7985,3718,2956,9307,-8082,2305,6669,-2525,5247,7686,5976,-4027,2260,6688,2680,8038,1551,2688,1244,-8203,7534,4492,4834,9181,-4224,1502,6617,4992,4646,2193,2909,4091,8775]),
  // findLHS([5,25,84,27,36,5,46,29,13,57]),
  findLHS([1,2,3,3,1,-14,13,4]),
)

// 1 2 2 2 3
