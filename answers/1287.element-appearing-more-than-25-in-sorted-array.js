/*
 * @lc app=leetcode id=1287 lang=javascript
 *
 * [1287] Element Appearing More Than 25% In Sorted Array
 *
 * https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/description/
 *
 * algorithms
 * Easy (61.01%)
 * Likes:    1722
 * Dislikes: 80
 * Total Accepted:    225.7K
 * Total Submissions: 370K
 * Testcase Example:  '[1,2,2,6,6,6,6,7,10]'
 *
 * Given an integer array sorted in non-decreasing order, there is exactly one
 * integer in the array that occurs more than 25% of the time, return that
 * integer.
 *
 *
 * Example 1:
 *
 *
 * Input: arr = [1,2,2,6,6,6,6,7,10]
 * Output: 6
 *
 *
 * Example 2:
 *
 *
 * Input: arr = [1,1]
 * Output: 1
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= arr.length <= 10^4
 * 0 <= arr[i] <= 10^5
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
  const minFrequency = Math.ceil(arr.length / 4)

  const map = Object.create(null)

  let candidate = -1

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i]

    if (map[num] === undefined) {
      map[num] = 0
    }

    map[num] += 1

    if (map[num] === minFrequency) {
      candidate = num
    } else if (map[num] > minFrequency) {
      return num
    }
  }

  return candidate
};
// @lc code=end
console.log(
  // findSpecialInteger([1, 2, 3, 3])
  findSpecialInteger([1])
)
