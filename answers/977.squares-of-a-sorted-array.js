/*
 * @lc app=leetcode id=977 lang=javascript
 *
 * [977] Squares of a Sorted Array
 *
 * https://leetcode.com/problems/squares-of-a-sorted-array/description/
 *
 * algorithms
 * Easy (72.97%)
 * Likes:    9450
 * Dislikes: 243
 * Total Accepted:    2M
 * Total Submissions: 2.8M
 * Testcase Example:  '[-4,-1,0,3,10]'
 *
 * Given an integer array nums sorted in non-decreasing order, return an array
 * of the squares of each number sorted in non-decreasing order.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [-4,-1,0,3,10]
 * Output: [0,1,9,16,100]
 * Explanation: After squaring, the array becomes [16,1,0,9,100].
 * After sorting, it becomes [0,1,9,16,100].
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [-7,-3,2,3,11]
 * Output: [4,9,9,49,121]
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 10^4
 * -10^4 <= nums[i] <= 10^4
 * nums is sorted in non-decreasing order.
 *
 *
 *
 * Follow up: Squaring each element and sorting the new array is very trivial,
 * could you find an O(n) solution using a different approach?
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  const negativeNums = []

  let i = 0
  for (; i < nums.length; i++) {
    const num = nums[i]

    if (num >= 0) {
      break
    }

    negativeNums.push(num * num)
  }

  let negativePointer = negativeNums.length - 1

  if (negativePointer === -1) {
    return nums.map(num => num * num)
  }

  const result = []

  for (; i < nums.length; i++) {
    const num = nums[i]
    const square = num * num

    if (negativePointer > -1) {
      for (;negativePointer > -1;) {
        if (square > negativeNums[negativePointer]) {
          result.push(negativeNums[negativePointer])
          negativePointer -= 1
        } else {
          break
        }
      }
    }

    result.push(square)
  }

  for (;negativePointer > -1;) {
    result.push(negativeNums[negativePointer])
    negativePointer -= 1
  }

  return result
};
// @lc code=end

console.log(
  sortedSquares([-5, 1, 2, 3])
)
