/*
 * @lc app=leetcode id=905 lang=javascript
 *
 * [905] Sort Array By Parity
 *
 * https://leetcode.com/problems/sort-array-by-parity/description/
 *
 * algorithms
 * Easy (76.25%)
 * Likes:    5425
 * Dislikes: 150
 * Total Accepted:    848.6K
 * Total Submissions: 1.1M
 * Testcase Example:  '[3,1,2,4]'
 *
 * Given an integer array nums, move all the even integers at the beginning of
 * the array followed by all the odd integers.
 *
 * Return any array that satisfies this condition.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [3,1,2,4]
 * Output: [2,4,3,1]
 * Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be
 * accepted.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [0]
 * Output: [0]
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 5000
 * 0 <= nums[i] <= 5000
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
  let leftPointer = 0
  let rightPointer = nums.length - 1

  for (;leftPointer <= rightPointer;) {
    for (;leftPointer <= rightPointer;) {
      if (nums[leftPointer] % 2 === 0) {
        leftPointer += 1
      } else {
        break
      }
    }

    for (;leftPointer <= rightPointer;) {
      if (nums[rightPointer] % 2 === 1) {
        rightPointer -= 1
      } else {
        break
      }
    }

    if (leftPointer < rightPointer) {
      [nums[leftPointer], nums[rightPointer]] = [nums[rightPointer], nums[leftPointer]]
      leftPointer += 1
      rightPointer -= 1
    }
  }

  return nums
};
// @lc code=end

console.log(
  sortArrayByParity([3, 1, 2, 4])
)
