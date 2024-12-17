/*
 * @lc app=leetcode id=1636 lang=javascript
 *
 * [1636] Sort Array by Increasing Frequency
 *
 * https://leetcode.com/problems/sort-array-by-increasing-frequency/description/
 *
 * algorithms
 * Easy (79.90%)
 * Likes:    3452
 * Dislikes: 159
 * Total Accepted:    287.7K
 * Total Submissions: 359.9K
 * Testcase Example:  '[1,1,2,2,2,3]'
 *
 * Given an array of integers nums, sort the array in increasing order based on
 * the frequency of the values. If multiple values have the same frequency,
 * sort them in decreasing order.
 *
 * Return the sorted array.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,1,2,2,2,3]
 * Output: [3,1,1,2,2,2]
 * Explanation: '3' has a frequency of 1, '1' has a frequency of 2, and '2' has
 * a frequency of 3.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [2,3,1,3,2]
 * Output: [1,3,3,2,2]
 * Explanation: '2' and '3' both have a frequency of 2, so they are sorted in
 * decreasing order.
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [-1,1,-6,4,5,-6,1,4,1]
 * Output: [5,-1,4,4,-6,-6,1,1,1]
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 100
 * -100 <= nums[i] <= 100
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
  const map = Object.create(null)

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]

    if (map[num] === undefined) {
      map[num] = 0
    }

    map[num] += 1
  }

  return nums.sort((a, b) => {
    const countA = map[a]
    const countB = map[b]

    if (countA === countB) {
      return b - a
    }

    return countA - countB
  })
};
// @lc code=end

console.log(
  frequencySort([1,1,2,2,2,3])
)
