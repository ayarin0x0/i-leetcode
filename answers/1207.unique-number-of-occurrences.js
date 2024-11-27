/*
 * @lc app=leetcode id=1207 lang=javascript
 *
 * [1207] Unique Number of Occurrences
 *
 * https://leetcode.com/problems/unique-number-of-occurrences/description/
 *
 * algorithms
 * Easy (77.58%)
 * Likes:    5175
 * Dislikes: 142
 * Total Accepted:    736.7K
 * Total Submissions: 947.9K
 * Testcase Example:  '[1,2,2,1,1,3]'
 *
 * Given an array of integers arr, return true if the number of occurrences of
 * each value in the array is unique or false otherwise.
 *
 *
 * Example 1:
 *
 *
 * Input: arr = [1,2,2,1,1,3]
 * Output: true
 * Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two
 * values have the same number of occurrences.
 *
 * Example 2:
 *
 *
 * Input: arr = [1,2]
 * Output: false
 *
 *
 * Example 3:
 *
 *
 * Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
 * Output: true
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= arr.length <= 1000
 * -1000 <= arr[i] <= 1000
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  const nums = []
  const powers = []

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i]

    const index = nums.indexOf(num)
    if (index < 0) {
      nums.push(num)
      powers.push(1)

      continue
    }

    powers[index] += 1
  }

  const map = Object.create(null)

  for (let i = 0; i < powers.length; i++) {
    const power = powers[i]

    if (map[power] === undefined) {
      map[power] = true

      continue
    }

    return false
  }

  return true
};
// @lc code=end
