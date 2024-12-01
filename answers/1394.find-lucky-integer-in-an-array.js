/*
 * @lc app=leetcode id=1394 lang=javascript
 *
 * [1394] Find Lucky Integer in an Array
 *
 * https://leetcode.com/problems/find-lucky-integer-in-an-array/description/
 *
 * algorithms
 * Easy (67.95%)
 * Likes:    1171
 * Dislikes: 32
 * Total Accepted:    140K
 * Total Submissions: 205.2K
 * Testcase Example:  '[2,2,3,4]'
 *
 * Given an array of integers arr, a lucky integer is an integer that has a
 * frequency in the array equal to its value.
 *
 * Return the largest lucky integer in the array. If there is no lucky integer
 * return -1.
 *
 *
 * Example 1:
 *
 *
 * Input: arr = [2,2,3,4]
 * Output: 2
 * Explanation: The only lucky number in the array is 2 because frequency[2] ==
 * 2.
 *
 *
 * Example 2:
 *
 *
 * Input: arr = [1,2,2,3,3,3]
 * Output: 3
 * Explanation: 1, 2 and 3 are all lucky numbers, return the largest of them.
 *
 *
 * Example 3:
 *
 *
 * Input: arr = [2,2,2,3,3]
 * Output: -1
 * Explanation: There are no lucky numbers in the array.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= arr.length <= 500
 * 1 <= arr[i] <= 500
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
  arr.sort((a, b) => b - a)

  let result = -1
  let prevNum = arr[0]
  let count = 1
  for (let i = 1; i < arr.length + 1; i++) {
    const num = arr[i]

    if (num === prevNum) {
      count += 1

      continue
    }

    if (prevNum === count) {
      result = prevNum

      break
    }

    prevNum = num
    count = 1
  }

  return result
};
// @lc code=end
console.log(
  findLucky([2, 2, 3, 4])
)
