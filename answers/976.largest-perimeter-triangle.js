/*
 * @lc app=leetcode id=976 lang=javascript
 *
 * [976] Largest Perimeter Triangle
 *
 * https://leetcode.com/problems/largest-perimeter-triangle/description/
 *
 * algorithms
 * Easy (56.46%)
 * Likes:    2998
 * Dislikes: 415
 * Total Accepted:    254.7K
 * Total Submissions: 450.4K
 * Testcase Example:  '[2,1,2]'
 *
 * Given an integer array nums, return the largest perimeter of a triangle with
 * a non-zero area, formed from three of these lengths. If it is impossible to
 * form any triangle of a non-zero area, return 0.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [2,1,2]
 * Output: 5
 * Explanation: You can form a triangle with three side lengths: 1, 2, and 2.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1,2,1,10]
 * Output: 0
 * Explanation:
 * You cannot use the side lengths 1, 1, and 2 to form a triangle.
 * You cannot use the side lengths 1, 1, and 10 to form a triangle.
 * You cannot use the side lengths 1, 2, and 10 to form a triangle.
 * As we cannot use any three side lengths to form a triangle of non-zero area,
 * we return 0.
 *
 *
 *
 * Constraints:
 *
 *
 * 3 <= nums.length <= 10^4
 * 1 <= nums[i] <= 10^6
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
  nums.sort((a, b) => b - a)

  for (let i = 0; i < nums.length - 2; i++) {
    const a = nums[i]
    const b = nums[i + 1]
    const c = nums[i + 2]

    if (b + c > a) {
      return a + b + c
    }
  }

  return 0
};

function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a
}
// @lc code=end
// 10 5 4 3 2 1

// 10 2 1 1
