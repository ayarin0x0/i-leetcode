/*
 * @lc app=leetcode id=1089 lang=javascript
 *
 * [1089] Duplicate Zeros
 *
 * https://leetcode.com/problems/duplicate-zeros/description/
 *
 * algorithms
 * Easy (52.21%)
 * Likes:    2651
 * Dislikes: 762
 * Total Accepted:    455K
 * Total Submissions: 869.9K
 * Testcase Example:  '[1,0,2,3,0,4,5,0]'
 *
 * Given a fixed-length integer array arr, duplicate each occurrence of zero,
 * shifting the remaining elements to the right.
 *
 * Note that elements beyond the length of the original array are not written.
 * Do the above modifications to the input array in place and do not return
 * anything.
 *
 *
 * Example 1:
 *
 *
 * Input: arr = [1,0,2,3,0,4,5,0]
 * Output: [1,0,0,2,3,0,0,4]
 * Explanation: After calling your function, the input array is modified to:
 * [1,0,0,2,3,0,0,4]
 *
 *
 * Example 2:
 *
 *
 * Input: arr = [1,2,3]
 * Output: [1,2,3]
 * Explanation: After calling your function, the input array is modified to:
 * [1,2,3]
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= arr.length <= 10^4
 * 0 <= arr[i] <= 9
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
  const len = arr.length

  for (let i = 0; i < len; i++) {
    const num = arr[i]

    if (num !== 0) {
      continue
    }

    arr.splice(i, 0, 0)
    i += 1

    arr.pop()
  }
};
// @lc code=end

const arr = [1, 0, 2, 3, 0, 4, 5, 0]
duplicateZeros(arr)
console.log(arr)

arr.splice(1, 0, 9)
console.log(arr)
