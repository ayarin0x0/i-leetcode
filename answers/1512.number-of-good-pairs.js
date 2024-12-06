/*
 * @lc app=leetcode id=1512 lang=javascript
 *
 * [1512] Number of Good Pairs
 *
 * https://leetcode.com/problems/number-of-good-pairs/description/
 *
 * algorithms
 * Easy (89.29%)
 * Likes:    5520
 * Dislikes: 266
 * Total Accepted:    861K
 * Total Submissions: 963.6K
 * Testcase Example:  '[1,2,3,1,1,3]'
 *
 * Given an array of integers nums, return the number of good pairs.
 *
 * A pair (i, j) is called good if nums[i] == nums[j] and i < j.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,2,3,1,1,3]
 * Output: 4
 * Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1,1,1,1]
 * Output: 6
 * Explanation: Each pair in the array are good.
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [1,2,3]
 * Output: 0
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 100
 * 1 <= nums[i] <= 100
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
  const map = Object.create(null)

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]

    if (map[num] === undefined) {
      map[num] = 0
    }

    map[num] += 1
  }

  let result = 0

  const keys = Object.keys(map)

  for (let i = 0; i < keys.length; i++) {
    const num = keys[i]
    const count = map[num]

    if (count < 2) {
      continue
    }

    result += count * (count - 1) / 2
  }

  return result
};
// @lc code=end

console.log(
  // numIdenticalPairs([1, 2, 3, 1, 1, 3])
  numIdenticalPairs([1, 1, 1, 1])
)
