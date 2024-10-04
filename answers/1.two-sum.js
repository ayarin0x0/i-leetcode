/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const requiredMap = Object.create(null)

  for (let i = 0; i < nums.length; i++) {
    const num  = nums[i]

    const lookupIndex = requiredMap[num]
    if (lookupIndex !== undefined) {
      return [lookupIndex, i]
    }

    const requied = target - num
    requiredMap[requied] = i
  }

  return []
}
// @lc code=end
