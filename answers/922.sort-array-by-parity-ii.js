/*
 * @lc app=leetcode id=922 lang=javascript
 *
 * [922] Sort Array By Parity II
 *
 * https://leetcode.com/problems/sort-array-by-parity-ii/description/
 *
 * algorithms
 * Easy (70.88%)
 * Likes:    2633
 * Dislikes: 97
 * Total Accepted:    272.1K
 * Total Submissions: 383.9K
 * Testcase Example:  '[4,2,5,7]'
 *
 * Given an array of integers nums, half of the integers in nums are odd, and
 * the other half are even.
 *
 * Sort the array so that whenever nums[i] is odd, i is odd, and whenever
 * nums[i] is even, i is even.
 *
 * Return any answer array that satisfies this condition.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [4,2,5,7]
 * Output: [4,5,2,7]
 * Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been
 * accepted.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [2,3]
 * Output: [2,3]
 *
 *
 *
 * Constraints:
 *
 *
 * 2 <= nums.length <= 2 * 10^4
 * nums.length is even.
 * Half of the integers in nums are even.
 * 0 <= nums[i] <= 1000
 *
 *
 *
 * Follow Up: Could you solve it in-place?
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
  let oddPointer = 0

  for (let i = 1; i < nums.length && oddPointer < nums.length;) {
    const num = nums[i]

    if (num % 2 === 0) {
      swap(nums, i, oddPointer)
      oddPointer += 2
    } else {
      i += 2
    }
  }

  return nums

  function swap(nums, a, b) {
    const temp = nums[a]
    nums[a] = nums[b]
    nums[b] = temp
  }
};
// @lc code=end
console.log(
  sortArrayByParityII([2,0,3,4,1,3])
)
