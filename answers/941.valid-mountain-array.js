/*
 * @lc app=leetcode id=941 lang=javascript
 *
 * [941] Valid Mountain Array
 *
 * https://leetcode.com/problems/valid-mountain-array/description/
 *
 * algorithms
 * Easy (33.59%)
 * Likes:    2982
 * Dislikes: 188
 * Total Accepted:    453.8K
 * Total Submissions: 1.3M
 * Testcase Example:  '[2,1]'
 *
 * Given an array of integers arr, return true if and only if it is a valid
 * mountain array.
 *
 * Recall that arr is a mountain array if and only if:
 *
 *
 * arr.length >= 3
 * There exists some i with 0 < i < arr.length - 1 such that:
 *
 * arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
 * arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
 *
 *
 *
 *
 *
 * Example 1:
 * Input: arr = [2,1]
 * Output: false
 * Example 2:
 * Input: arr = [3,5,5]
 * Output: false
 * Example 3:
 * Input: arr = [0,3,2,1]
 * Output: true
 *
 *
 * Constraints:
 *
 *
 * 1 <= arr.length <= 10^4
 * 0 <= arr[i] <= 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
  if (arr.length < 3) {
    return false
  }

  let isIncreasing = false
  let isDecreasing = false

  let i = 1
  for (;i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      isIncreasing = true
    } else {
      break
    }
  }

  for (;i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      isDecreasing = true
    } else {
      return false
    }
  }

  return isIncreasing && isDecreasing
};
// @lc code=end

console.log(validMountainArray([0,1,2,1,2]))
